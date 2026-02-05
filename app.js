// ------------------------------
// Recipe Data
// ------------------------------
const recipes = [
  {
    id: 1,
    title: "Garlic Butter Pasta",
    time: 20,
    difficulty: "easy",
    description: "Simple pasta tossed in garlic butter and herbs.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    time: 25,
    difficulty: "easy",
    description: "Quick stir-fried vegetables with soy sauce.",
    category: "vegetarian"
  },
  {
    id: 3,
    title: "Chicken Curry",
    time: 45,
    difficulty: "medium",
    description: "Spicy and flavorful chicken curry.",
    category: "curry"
  },
  {
    id: 4,
    title: "Grilled Paneer Skewers",
    time: 35,
    difficulty: "medium",
    description: "Marinated paneer grilled to perfection.",
    category: "grill"
  },
  {
    id: 5,
    title: "Beef Biryani",
    time: 75,
    difficulty: "hard",
    description: "Rich and aromatic layered rice and beef dish.",
    category: "rice"
  },
  {
    id: 6,
    title: "Lasagna",
    time: 90,
    difficulty: "hard",
    description: "Classic layered pasta with meat and cheese.",
    category: "pasta"
  },
  {
    id: 7,
    title: "Fruit Salad",
    time: 15,
    difficulty: "easy",
    description: "Fresh seasonal fruits with a light dressing.",
    category: "salad"
  },
  {
    id: 8,
    title: "Stuffed Bell Peppers",
    time: 60,
    difficulty: "medium",
    description: "Bell peppers filled with spiced rice and veggies.",
    category: "vegetarian"
  }
];

// ------------------------------
// DOM Selection
// ------------------------------
const recipeContainer = document.querySelector("#recipe-container");

// ------------------------------
// Create Recipe Card
// ------------------------------
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

// ------------------------------
// Render Recipes
// ------------------------------
const renderRecipes = (recipesArray) => {
  const html = recipesArray
    .map(recipe => createRecipeCard(recipe))
    .join("");

  recipeContainer.innerHTML = html;
};

// ------------------------------
// Initialize App
// ------------------------------
renderRecipes(recipes);
