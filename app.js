// ============================================
// RECIPE DATA
// ============================================
const recipes = [
  {
    title: "Citrus Herb Salmon",
    difficulty: "easy",
    time: 25,
    description: "Bright citrus, herbs, and blistered fennel make this salmon takeout-worthy in under 30 minutes.",
    tags: ["one-pan", "seafood", "fresh"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Moroccan Chickpea Stew",
    difficulty: "medium",
    time: 45,
    description: "Layered spices and preserved lemons turn a simple stew into a Sunday-night favorite.",
    tags: ["vegan", "simmer", "spiced"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Spiced Coconut Curry",
    difficulty: "medium",
    time: 35,
    description: "Tender vegetables bathed in coconut broth make this curry a soothing, job-friendly meal.",
    tags: ["vegetarian", "curry", "comfort"],
    image: "https://images.unsplash.com/photo-1543357480-c3fa0b2363c8?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Sheet-Pan Chicken Fajitas",
    difficulty: "easy",
    time: 30,
    description: "Marinated chicken and peppers roast together for a hands-off dinner you can share family-style.",
    tags: ["sheet-pan", "weeknight", "protein"],
    image: "https://images.unsplash.com/photo-1512058564366-c9e5c72fbecd?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Braised Short Ribs",
    difficulty: "hard",
    time: 120,
    description: "Low and slow cooking creates melt-in-your-mouth beef with a glossy, savory jus.",
    tags: ["braise", "party", "luxury"],
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Summer Vegetable Risotto",
    difficulty: "hard",
    time: 50,
    description: "Creamy Arborio rice and seasonal produce require patience but reward you with silky texture.",
    tags: ["rice", "seasonal", "comfort"],
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "No-Bake Matcha Cheesecake",
    difficulty: "medium",
    time: 20,
    description: "Chilled layers of matcha cream and almond crust deliver a refined dessert without an oven.",
    tags: ["dessert", "no-bake", "matcha"],
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Herbal Quinoa Salad",
    difficulty: "easy",
    time: 18,
    description: "Bright herbs, toasted seeds, and citrus vinaigrette make this a quick, nourishing side or lunch.",
    tags: ["salad", "meal-prep", "refreshing"],
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80"
  }
];

// ============================================
// STATE MANAGEMENT
// ============================================
// Track current filter and sort settings
let currentFilter = 'all';
let currentSort = 'none';

// ============================================
// DOM REFERENCES
// ============================================
const recipeContainer = document.querySelector('#recipe-container');

// NEW: Select all filter and sort buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');

// ============================================
// PURE FILTER FUNCTIONS
// ============================================
// These functions don't modify the original array
// They return a NEW filtered array

// Filter recipes by difficulty level
const filterByDifficulty = (recipes, difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
};

// Filter recipes by maximum cooking time
const filterByTime = (recipes, maxTime) => {
    return recipes.filter(recipe => recipe.time <= maxTime);
};

// Apply the current filter
const applyFilter = (recipes, filterType) => {
    switch(filterType) {
        case 'easy':
            return filterByDifficulty(recipes, 'easy');
        case 'medium':
            return filterByDifficulty(recipes, 'medium');
        case 'hard':
            return filterByDifficulty(recipes, 'hard');
        case 'quick':
            return filterByTime(recipes, 30);
        case 'all':
        default:
            return recipes;  // Return all recipes (no filter)
    }
};

// ============================================
// PURE SORT FUNCTIONS
// ============================================
// sort() mutates the original array, so we create a copy first

// Sort recipes by name (A-Z)
const sortByName = (recipes) => {
    // Create a copy with spread operator, then sort
    return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
};

// Sort recipes by cooking time (fastest first)
const sortByTime = (recipes) => {
    // Create a copy with spread operator, then sort
    return [...recipes].sort((a, b) => a.time - b.time);
};

// Apply the current sort
const applySort = (recipes, sortType) => {
    switch(sortType) {
        case 'name':
            return sortByName(recipes);
        case 'time':
            return sortByTime(recipes);
        case 'none':
        default:
            return recipes;  // Return as-is (no sorting)
    }
};

// ============================================
// RENDER FUNCTIONS
// ============================================
const createRecipeCard = (recipe) => {
  const card = document.createElement("article");
  card.className = "recipe-card";

  const tagMarkup = recipe.tags
    .map((tag) => `<span class="recipe-tag">${tag}</span>`)
    .join("");

  card.innerHTML = `
    <div class="recipe-image" style="background-image: url('${recipe.image}');"></div>
    <div class="recipe-content">
      <h3>${recipe.title}</h3>
      <p class="recipe-desc">${recipe.description}</p>
      <div class="recipe-meta">
        <span class="recipe-badge">${recipe.difficulty}</span>
        <span class="recipe-time">${recipe.time} min</span>
      </div>
      <div class="recipe-tags">
        ${tagMarkup}
      </div>
    </div>
  `;

  return card;
};

const renderRecipes = (recipesToRender) => {
  recipeContainer.innerHTML = "";
  recipesToRender.forEach((recipe) => {
    const card = createRecipeCard(recipe);
    recipeContainer.appendChild(card);
  });
};

// ============================================
// MAIN UPDATE FUNCTION
// ============================================
// This function combines filter + sort + render

const updateDisplay = () => {
    // Step 1: Start with all recipes
    let recipesToDisplay = recipes;
    
    // Step 2: Apply current filter
    recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
    
    // Step 3: Apply current sort
    recipesToDisplay = applySort(recipesToDisplay, currentSort);
    
    // Step 4: Render the filtered and sorted recipes
    renderRecipes(recipesToDisplay);
    
    // Step 5: Log for debugging
    console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
};

// ============================================
// UI HELPER FUNCTIONS
// ============================================

// Update which button looks "active"
const updateActiveButtons = () => {
    // Update filter buttons
    filterButtons.forEach(btn => {
        const filterType = btn.dataset.filter;
        if (filterType === currentFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update sort buttons
    sortButtons.forEach(btn => {
        const sortType = btn.dataset.sort;
        if (sortType === currentSort) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
};

// ============================================
// EVENT HANDLERS
// ============================================

// Handle filter button clicks
const handleFilterClick = (event) => {
    const filterType = event.target.dataset.filter;
    
    // Update state
    currentFilter = filterType;
    
    // Update UI
    updateActiveButtons();
    updateDisplay();
};

// Handle sort button clicks
const handleSortClick = (event) => {
    const sortType = event.target.dataset.sort;
    
    // Update state
    currentSort = sortType;
    
    // Update UI
    updateActiveButtons();
    updateDisplay();
};

// ============================================
// EVENT LISTENER SETUP
// ============================================

const setupEventListeners = () => {
    // Attach click handlers to all filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Attach click handlers to all sort buttons
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });
    
    console.log('Event listeners attached!');
};

// ============================================
// INITIALIZATION
// ============================================

// Set up event listeners on page load
setupEventListeners();

// Initial render with default filter/sort
updateDisplay();
