
# Recipe Search App

A simple web application that allows users to search for recipe. This app utilizes the Spoonacular API to fetch recipe data and provides a clean and responsive interface using Tailwind CSS.

## Features

- Search for recipes.
- Fetch recipe data from the Spoonacular API.
- Display recipes with details such as ingredients, instructions, and image.
- Responsive design that works across devices.

## Technologies Used

- HTML for the structure of the application.
- Tailwind CSS for responsive, utility-first styling.
- Vanilla JavaScript for handling user input, making API requests, and updating the DOM dynamically.
- Spoonacular API for retrieving recipe data based on ingredients.

## Setup Instructions

### Prerequisites
- A code editor (e.g., VS Code).
- A modern web browser (e.g., Chrome, Firefox).
- Internet connection for API requests.

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recipe-search-app.git
   ```

2. Navigate to the project folder:
   ```bash
   cd recipe-search-app
   ```

3. Open the `index.html` file in your browser to view the application.

### API Key

To make requests to the Spoonacular API, you need an API key. Here's how you can set it up:

1. Go to [Spoonacular API](https://spoonacular.com/food-api) and sign up for a free API key.
2. Replace the `YOUR_API_KEY` placeholder in the JavaScript file with your actual API key.

Example:
```javascript
const apiKey = 'YOUR_API_KEY';
```

## How It Works

1. Search Input: The user can enter recipe into a search bar.
2. API Request: When the user presses the "Search" button, the app makes an API request to the Spoonacular API with the provided ingredients.
3. Recipe Results: The app displays a list of recipes matching the provided recipe, including recipe name, image, ingredients, and cooking instructions.

## Code Overview

### HTML
- Provides the basic structure of the app, including the search bar, result container, and display area for recipes.

### JavaScript
- Handles the functionality of taking user input, making API calls, and dynamically displaying recipe results.

### Tailwind CSS
- A utility-first CSS framework used to style the application for a modern, responsive look.

## Screenshots
![Screenshot 2024-11-16 204757](https://github.com/user-attachments/assets/dd4e492f-9d8a-4c2c-bdf2-254cbc650669)


*Image of the Recipe Search App in action.*

## Future Improvements

- Allow users to filter results by dietary preferences (e.g., vegan, gluten-free).
- Add pagination or "Load More" functionality to handle large sets of recipe results.
- Allow users to save favorite recipes.
- Enhance error handling for failed API requests.
