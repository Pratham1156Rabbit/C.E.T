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
def explain_code(request):
    try:
        # Parse the JSON data from the request
        data = json.loads(request.body)
        code = data.get('code', '')
        language = data.get('language', 'python')

        if not code:
            return JsonResponse({'error': 'No code provided'}, status=400)

        # Set up the model
        model = genai.GenerativeModel('gemini-1.5-flash')

        # Create the prompt for code explanation
        prompt = f"""
        Please explain the following {language} code in detail:

        ```{language}
        {code}
        ```

        Focus on explaining:
        1. What the code does overall
        2. The purpose of each function or class
        3. Key logic and algorithms
        4. Any notable patterns or techniques used

        Please provide a detailed explanation without rewriting the code.
        """

        # Generate the explanation
        response = model.generate_content(prompt)
        explanation = response.text

        return JsonResponse({'explanation': explanation})

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
        language = data.get('language', 'python')

        if not code:
            print(json.dumps({'error': 'No code provided'}))
            sys.exit(1)

        # Set up the model
        model = genai.GenerativeModel('gemini-1.5-flash')

        # Create the prompt for code explanation
        prompt = f"""
        Please explain the following {language} code in detail:

        ```{language}
        {code}
        ```

        Focus on explaining:
        1. What the code does overall
        2. The purpose of each function or class
        3. Key logic and algorithms
        4. Any notable patterns or techniques used

        Please provide a detailed explanation without rewriting the code.
        """

        # Generate the explanation
        response = model.generate_content(prompt)
        explanation = response.text

        print(json.dumps({'explanation': explanation}))

    except Exception as e:
        print(json.dumps({'error': str(e)}))
        sys.exit(1)
