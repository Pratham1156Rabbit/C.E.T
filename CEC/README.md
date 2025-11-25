# C.E.T - Code Explainer and Translator

C.E.T is a web application built using HTML, CSS, JavaScript, Python, and Django with Google Gemini API integration. It provides two main functionalities:

1. **Code Explanation**: Helps users understand code by providing detailed explanations
2. **Code Translation**: Translates code from one programming language to another

## Features

- Simple and intuitive user interface
- Support for multiple programming languages
- Powered by Google's Gemini AI (version: gemini-1.5-flash)
- Responsive design that works on desktop and mobile devices

## Project Structure

```
cet-project/
├── static/
│   ├── css/
│   │   ├── home.css
│   │   ├── explainer.css
│   │   └── translator.css
│   └── js/
│       ├── explainer_backend.js
│       └── translator_backend.js
├── templates/
│   ├── home.html
│   ├── explainer.html
│   └── translator.html
├── explainerAI.py
├── translatorAI.py
├── settings.py
├── urls.py
└── requirements.txt
```

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES6)

- **Backend**:
  - Python 3
  - Django (Python web framework)

- **AI Integration**:
  - Google Gemini API (v1.5-flash)

## Setup Instructions

1. Clone the repository
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the Django development server:
   ```
   python manage.py runserver
   ```
4. Access the application at http://localhost:8000

## Running with Live Server in VSCode

If you want to run the project as a static site (for frontend testing) using Visual Studio Code:

1. Install the **Live Server** extension from the VSCode Extensions Marketplace.
2. Open the project folder in VSCode.
3. In the Explorer, right-click on `home.html` (located in the `templates` folder) and select **"Open with Live Server"** or click the **"Go Live"** button in the bottom right corner of VSCode.
4. Your default browser will open the site. You can now navigate between `home.html`, `explainer.html`, and `translator.html` (or `Code Convertor`).

> **Note:** Some features (like API calls) may not work as expected in static mode. For full functionality, use the Django development server as described above.

## API Key

To use the Google Gemini API, you must obtain your own API key:

1. Go to the [Google AI Studio](https://aistudio.google.com/app/apikey) and sign in with your Google account.
2. Create a new API key or use an existing one.
3. Copy your API key.
4. In this project, replace every occurrence of `YOUR_GEMINI_API_KEY_HERE` in the following files with your actual API key:
   - `static/js/explainer_backend.js`
   - `static/js/translator_backend.js`
   - `explainerAI.py`
   - `translatorAI.py`

**Important**: Never commit your API key to a public repository. For production use, always keep your API key secure and never expose it in frontend code.

## License

This project is open source and available under the MIT License.

## Disclaimer

This is a demonstration project and not intended for production use without proper security measures.
