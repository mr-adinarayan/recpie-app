// API Configuration
const API_KEY = '41093a37c59f4a348a9b646c17c71653'; // Get your API key from Spoonacular or Edamam
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';

// Get DOM Elements
const ingredientInput = document.getElementById('ingredientInput');
const searchBtn = document.getElementById('searchBtn');
const recipeResults = document.getElementById('recipeResults');
const loadingSpinner = document.getElementById('loading');

// Event Listener for the Search Button
searchBtn.addEventListener('click', () => {
  const ingredient = ingredientInput.value.trim();

  if (ingredient) {
    fetchRecipes(ingredient);
  } else {
    alert('Please enter an ingredient');
  }
});

// Function to fetch recipes
async function fetchRecipes(ingredient) {
  try {
    // Show the loading spinner
    loadingSpinner.classList.remove('hidden');

    // Fetch data from the API
    const response = await axios.get(API_URL, {
      params: {
        query: ingredient,
        apiKey: API_KEY,
        number: 9 // Number of recipes to fetch
      }
    });

    const recipes = response.data.results;

    // Clear previous results
    recipeResults.innerHTML = '';

    // Display recipes
    recipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-lg');

      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover rounded-lg mb-4">
        <h3 class="text-lg font-semibold">${recipe.title}</h3>
        <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank" class="text-blue-500 mt-2 block">View Recipe</a>
      `;

      recipeResults.appendChild(recipeCard);
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    alert('Sorry, there was an error fetching recipes. Please try again later.');
  } finally {
    // Hide the loading spinner
    loadingSpinner.classList.add('hidden');
  }
}
