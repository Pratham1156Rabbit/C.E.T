import os
import json
import sys
import google.generativeai as genai
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

# API_KEY = "AIzaSyDlPz6y3UzJcCMB4Dpc6cpkdFPkKoJDJLY" # REMOVED for security
API_KEY = "YOUR_GEMINI_API_KEY_HERE" # <-- Insert your Gemini API key here
genai.configure(api_key=API_KEY)

@csrf_exempt
@require_POST
def translate_code(request):
    try:
        # Parse the JSON data from the request
        data = json.loads(request.body)
        code = data.get('code', '')
        source_language = data.get('source_language', 'python')
        target_language = data.get('target_language', 'javascript')

        if not code:
            return JsonResponse({'error': 'No code provided'}, status=400)

        # Set up the model
        model = genai.GenerativeModel('gemini-1.5-flash')

        # Create the prompt for code translation
        prompt = f"""
        Translate the following {source_language} code to {target_language}:

        ```{source_language}
        {code}
        ```

        Provide ONLY the translated code in {target_language} without any explanations, comments, or notes.
        Just the translated code, properly formatted.
        """

        # Generate the translation
        response = model.generate_content(prompt)
        translation = response.text

        # Clean up the response - sometimes the model includes markdown code blocks
        translation = translation.replace(f"```{target_language}", "").replace("```", "").strip()

        return JsonResponse({'translation': translation})

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

# This part will be used when the file is run directly
if __name__ == "__main__":
    # Read input from stdin
    input_data = sys.stdin.read()

    try:
        # Parse the input as JSON
        data = json.loads(input_data)
        code = data.get('code', '')
        source_language = data.get('source_language', 'python')
        target_language = data.get('target_language', 'javascript')

        if not code:
            print(json.dumps({'error': 'No code provided'}))
            sys.exit(1)

        # Set up the model
        model = genai.GenerativeModel('gemini-1.5-flash')

        # Create the prompt for code translation
        prompt = f"""
        Translate the following {source_language} code to {target_language}:

        ```{source_language}
        {code}
        ```

        Provide ONLY the translated code in {target_language} without any explanations, comments, or notes.
        Just the translated code, properly formatted.
        """

        # Generate the translation
        response = model.generate_content(prompt)
        translation = response.text

        # Clean up the response - sometimes the model includes markdown code blocks
        translation = translation.replace(f"```{target_language}", "").replace("```", "").strip()

        print(json.dumps({'translation': translation}))

    except Exception as e:
        print(json.dumps({'error': str(e)}))
        sys.exit(1)
