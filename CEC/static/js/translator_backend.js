document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('code-input');
    const translateBtn = document.getElementById('translate-btn');
    const translationOutput = document.getElementById('translation-output');
    const sourceLanguage = document.getElementById('source-language');
    const targetLanguage = document.getElementById('target-language');

    // Try both possible paths for translation_patterns.js
    function loadTranslationPatterns(paths, onSuccess, onFailure) {
        if (!paths.length) {
            onFailure();
            return;
        }
        const path = paths.shift();
        const script = document.createElement('script');
        script.src = path;
        script.onerror = function() {
            console.error('Failed to load translation patterns script at', path);
            loadTranslationPatterns(paths, onSuccess, onFailure);
        };
        script.onload = function() {
            console.log('Translation patterns script loaded successfully from', path);
            if (window.translationPatterns) {
                console.log('translationPatterns is available');
                translateBtn.disabled = false;
                if (onSuccess) onSuccess();
            } else {
                console.error('translationPatterns is NOT available after loading', path);
                // Try next path if available
                loadTranslationPatterns(paths, onSuccess, onFailure);
            }
        };
        document.head.appendChild(script);
    }

    // Disable the translate button until script is loaded
    translateBtn.disabled = true;

    // Try both relative and absolute paths
    loadTranslationPatterns([
        '../static/js/translation_patterns.js',
        '/static/js/translation_patterns.js'
    ],
    function() {
        // Success callback (optional extra logic)
    },
    function() {
        // Failure callback
        translateBtn.disabled = false;
        console.error('Unable to load translation_patterns.js from any known path. Offline translations will not be available.');
    });

    translateBtn.addEventListener('click', function() {
        const code = codeInput.value.trim();
        const sourceLang = sourceLanguage.value;
        const targetLang = targetLanguage.value;

        if (!code) {
            alert('Please enter some code to translate.');
            return;
        }

        if (sourceLang === targetLang) {
            alert('Source and target languages are the same. Please select different languages.');
            return;
        }

        // Show loading state
        translationOutput.innerHTML = '<p class="loading">Converting your code</p>';

        // Try online first, then fallback to offline if it fails
        callGeminiAPI(code, sourceLang, targetLang)
            .then(translation => {
                translationOutput.innerHTML = formatTranslation(translation);
            })
            .catch(error => {
                console.log('Online translation failed, falling back to offline mode:', error);
                try {
                    const offlineTranslation = translateCodeOffline(code, sourceLang, targetLang);
                    if (offlineTranslation && offlineTranslation !== code) {
                        translationOutput.innerHTML = formatTranslation(offlineTranslation);
                    } else {
                        translationOutput.innerHTML = formatTranslation('Unable to translate code. The code pattern is either wrong in syntax or selected wrong languages as either Source Language or Targeted Languages.\n\nPlease check your internet connection and try again.\n\nError details: ' + error.message);
                    }
                } catch (offlineError) {
                    translationOutput.innerHTML = formatTranslation('Unable to translate code. The code pattern is either wrong in syntax or selected wrong languages as either Source Language or Targeted Languages.\n\nPlease check your internet connection and try again.\n\nError details: ' + error.message);
                }
            });
    });

    function translateCodeOffline(code, sourceLang, targetLang) {
        const translationKey = `${sourceLang}_to_${targetLang}`;
        const translations = window.translationPatterns[translationKey];

        if (!translations) {
            throw new Error(`No translation patterns available for ${sourceLang} to ${targetLang}`);
        }

        let translatedCode = code;
        let hasMatched = false;

        // Try to match and translate each pattern
        for (const [patternName, patternData] of Object.entries(translations)) {
            const regex = new RegExp(patternData.pattern);
            if (regex.test(code)) {
                hasMatched = true;
                if (typeof patternData.translation === 'function') {
                    translatedCode = translatedCode.replace(regex, (...args) => patternData.translation(args));
                } else {
                    translatedCode = translatedCode.replace(regex, patternData.translation);
                }
            }
        }

        // If no patterns matched, return null to indicate failure
        return hasMatched ? translatedCode : null;
    }

    async function callGeminiAPI(code, sourceLang, targetLang) {
        try {
            // In a real implementation, we would make an API call to our Django backend
            // For now, we'll use the Gemini API directly from the frontend (for demo purposes)

            // NOTE: In a production environment, you should NEVER expose your API key in frontend code
            // This is just for demonstration purposes
            // const API_KEY = 'AIzaSyDlPz6y3UzJcCMB4Dpc6cpkdFPkKoJDJLY'; // REMOVED for security
            const API_KEY = 'YOUR_GEMINI_API_KEY_HERE'; // <-- Insert your Gemini API key here
            const MODEL = 'gemini-1.5-flash';
            const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

            const prompt = `
                Translate the following ${sourceLang} code to ${targetLang}:

                \`\`\`${sourceLang}
                ${code}
                \`\`\`

                Provide ONLY the translated code in ${targetLang} without any explanations, comments, or notes.
                Just the translated code, properly formatted.
            `;

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                { text: prompt }
                            ]
                        }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();

            // Extract the translation from the response
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                let translation = data.candidates[0].content.parts[0].text;

                // Clean up the response - sometimes the model includes markdown code blocks
                translation = translation.replace(/```[\w]*\n/g, '').replace(/```/g, '').trim();

                return translation;
            } else {
                throw new Error('Unexpected API response format');
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            throw error;
        }
    }

    function formatTranslation(translation) {
        // Format the translation as a code block
        return `<pre><code>${escapeHtml(translation)}</code></pre>`;
    }

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});
