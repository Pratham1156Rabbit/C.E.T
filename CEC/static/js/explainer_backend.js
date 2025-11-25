document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('code-input');
    const explainBtn = document.getElementById('explain-btn');
    const explanationOutput = document.getElementById('explanation-output');
    const sourceLanguage = document.getElementById('source-language');

    // Try both possible paths for offline_patterns.js
    function loadOfflinePatterns(paths, onSuccess, onFailure) {
        if (!paths.length) {
            onFailure();
            return;
        }
        const path = paths.shift();
        const script = document.createElement('script');
        script.src = path;
        script.onerror = function() {
            console.error('Failed to load offline patterns script at', path);
            loadOfflinePatterns(paths, onSuccess, onFailure);
        };
        script.onload = function() {
            console.log('Offline patterns script loaded successfully from', path);
            if (window.offlineCodeTools) {
                console.log('offlineCodeTools is available');
                explainBtn.disabled = false;
                if (onSuccess) onSuccess();
            } else {
                console.error('offlineCodeTools is NOT available after loading', path);
                // Try next path if available
                loadOfflinePatterns(paths, onSuccess, onFailure);
            }
        };
        document.head.appendChild(script);
    }

    // Disable the explain button until script is loaded
    explainBtn.disabled = true;

    // Try both relative and absolute paths
    loadOfflinePatterns([
        '../static/js/offline_patterns.js',
        '/static/js/offline_patterns.js'
    ],
    function() {
        // Success callback (optional extra logic)
    },
    function() {
        // Failure callback
        explainBtn.disabled = false;
        console.error('Unable to load offline_patterns.js from any known path. Offline explanations will not be available.');
    });

    explainBtn.addEventListener('click', function() {
        const code = codeInput.value.trim();
        const language = sourceLanguage.value;

        if (!code) {
            alert('Please enter some code to explain.');
            return;
        }

        // Show loading state
        explanationOutput.innerHTML = '<p class="loading">Explaining your code</p>';

        // Try online first, fallback to offline
            callGeminiAPI(code, language)
                .then(explanation => {
                    explanationOutput.innerHTML = formatExplanation(explanation);
                })
                .catch(error => {
                // Fallback to offline mode
                console.log('Falling back to offline mode:', error);
                try {
                    if (window.offlineCodeTools && window.offlineCodeTools.explainCode) {
                        const offlineExplanation = window.offlineCodeTools.explainCode(code, language);
                        explanationOutput.innerHTML = formatExplanation(offlineExplanation);
                    } else {
                        throw new Error('Offline patterns not available.');
                    }
                } catch (offlineError) {
                    explanationOutput.innerHTML = formatExplanation('Unable to explain code. No internet connection and offline patterns are not available.');
        }
            });
    });

    async function callGeminiAPI(code, language) {
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
                Please explain the following ${language} code in detail:

                \`\`\`${language}
                ${code}
                \`\`\`

                Focus on explaining:
                1. Provide syntax correction if there is any
                2. What the code does overall
                3. The purpose of each function or class
                4. Key logic and algorithms for the algorithm codes
                5. Any notable patterns or techniques used in this code

                Please provide the briefest explanation possible in a listed manner without rewriting the code.
                Do the following only if the code is not in the correct syntax or the selected language is wrong, please only provide the error details, there is no need to focus on anything other than this.
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

            // Extract the explanation from the response
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error('Unexpected API response format');
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            // Throw the error so the .catch() block in the click handler is triggered
            throw error;
        }
    }

    function formatExplanation(explanation) {
        // Format the explanation with some basic styling
        // Convert markdown-style headings to HTML headings
        explanation = explanation.replace(/^#\s+(.*?)$/gm, '<h3>$1</h3>');
        explanation = explanation.replace(/^##\s+(.*?)$/gm, '<h4>$1</h4>');
        explanation = explanation.replace(/^###\s+(.*?)$/gm, '<h5>$1</h5>');

        // Convert markdown-style lists to HTML lists
        explanation = explanation.replace(/^\*\s+(.*?)$/gm, '<li>$1</li>');
        explanation = explanation.replace(/^\d+\.\s+(.*?)$/gm, '<li>$1</li>');

        // Wrap adjacent list items in ul or ol tags
        explanation = explanation.replace(/(<li>.*?<\/li>)\n(<li>)/g, '$1$2');
        explanation = explanation.replace(/^<li>(.*?)(?=\n<li>|$)/gm, '<ul><li>$1');
        explanation = explanation.replace(/(<\/li>)(?!\n<li>)/g, '$1</ul>');

        // Convert markdown-style code blocks to HTML code blocks
        explanation = explanation.replace(/```([a-z]*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');

        // Convert markdown-style inline code to HTML inline code
        explanation = explanation.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Convert markdown-style emphasis to HTML emphasis
        explanation = explanation.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        explanation = explanation.replace(/\*([^*]+)\*/g, '<em>$1</em>');

        // Convert markdown-style paragraphs to HTML paragraphs
        explanation = explanation.replace(/\n\n/g, '</p><p>');

        // Wrap the entire explanation in a paragraph if it's not already
        if (!explanation.startsWith('<')) {
            explanation = `<p>${explanation}</p>`;
        }

        return explanation;
    }
});