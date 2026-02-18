// Wrap entire app in IIFE for encapsulation
const RecipeApp = (() => {
  
  // ============================================
  // PRIVATE: DATA
  // ============================================
  const recipes = [
    {
      id: 1,
      title: "Citrus Herb Salmon",
      difficulty: "easy",
      time: 25,
      description: "Bright citrus, herbs, and blistered fennel make this salmon takeout-worthy in under 30 minutes.",
      category: "seafood",
      tags: ["one-pan", "seafood", "fresh"],
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      ingredients: [
        "2 Salmon fillets",
        "1 Lemon, sliced",
        "Fresh dill",
        "1 Fennel bulb",
        "Olive oil",
        "Salt and pepper"
      ],
      steps: [
        "Preheat oven to 400°F (200°C)",
        "Slice fennel and arrange on baking sheet",
        "Place salmon on top of fennel",
        "Top with lemon slices and dill",
        "Drizzle with oil and season",
        "Roast for 15-18 minutes"
      ]
    },
    {
      id: 2,
      title: "Moroccan Chickpea Stew",
      difficulty: "medium",
      time: 45,
      description: "Layered spices and preserved lemons turn a simple stew into a Sunday-night favorite.",
      category: "vegan",
      tags: ["vegan", "simmer", "spiced"],
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80",
      ingredients: [
        "2 cans Chickpeas",
        "1 Onion, diced",
        "3 cloves Garlic",
        "2 tsp Ras el hanout",
        "1 preserved Lemon",
        "Fresh cilantro"
      ],
      steps: [
        "Sauté onion and garlic until soft",
        "Add spices and toast for 1 minute",
        {
          text: "Prepare the base",
          substeps: [
            "Add chickpeas with their liquid",
            "Stir in chopped preserved lemon",
            "Bring to a simmer"
          ]
        },
        "Simmer for 30 minutes",
        "Garnish with cilantro"
      ]
    },
    {
      id: 3,
      title: "Spiced Coconut Curry",
      difficulty: "medium",
      time: 35,
      description: "Tender vegetables bathed in coconut broth make this curry a soothing, job-friendly meal.",
      category: "vegetarian",
      tags: ["vegetarian", "curry", "comfort"],
      image: "https://images.unsplash.com/photo-1543357480-c3fa0b2363c8?auto=format&fit=crop&w=900&q=80",
      ingredients: [
        "1 can Coconut milk",
        "2 tbsp Red curry paste",
        "Mixed vegetables (broccoli, carrots)",
        "Tofu or Chickpeas",
        "Rice for serving"
      ],
      steps: [
        "Heat curry paste in a pan",
        "Whisk in coconut milk",
        "Add vegetables and protein",
        "Simmer until vegetables are tender",
        "Serve over steamed rice"
      ]
    },
    {
      id: 4,
      title: "Sheet-Pan Chicken Fajitas",
      difficulty: "easy",
      time: 30,
      description: "Marinated chicken and peppers roast together for a hands-off dinner you can share family-style.",
      category: "protein",
      tags: ["sheet-pan", "weeknight", "protein"],
      image: "https://images.unsplash.com/photo-1512058564366-c9e5c72fbecd?auto=format&fit=crop&w=900&q=80",
      ingredients: [
        "500g Chicken breast, sliced",
        "3 Bell peppers, sliced",
        "1 Onion, sliced",
        "Fajita seasoning",
        "Tortillas",
        "Lime wedges"
      ],
      steps: [
        "Toss chicken and veg with seasoning and oil",
        "Spread on a baking sheet",
        "Roast at 400°F for 20 minutes",
        "Warm the tortillas",
        "Serve with lime and desired toppings"
      ]
    },
    {
      id: 5,
      title: "Braised Short Ribs",
      difficulty: "hard",
      time: 120,
      description: "Low and slow cooking creates melt-in-your-mouth beef with a glossy, savory jus.",
      category: "meat",
      tags: ["braise", "party", "luxury"],
      image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=900&q=80",
      ingredients: [
        "1.5kg Beef short ribs",
        "Red wine",
        "Beef stock",
        "Mirepoix (carrots, celery, onion)",
        "Fresh thyme and rosemary"
      ],
      steps: [
        "Sear the ribs on all sides",
        "Remove ribs and sauté mirepoix",
        {
          text: "Deglaze and braise",
          substeps: [
            "Add red wine and scrape the pan",
            "Return ribs to pan",
            "Add stock and herbs until ribs are half covered"
          ]
        },
        "Cover and cook in oven at 325°F for 3 hours",
        "Reduce the braising liquid for a sauce"
      ]
    },
    {
      id: 6,
      title: "Summer Vegetable Risotto",
      difficulty: "hard",
      time: 50,
      description: "Creamy Arborio rice and seasonal produce require patience but reward you with silky texture.",
      category: "vegetarian",
      tags: ["rice", "seasonal", "comfort"],
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
      ingredients: [
        "300g Arborio rice",
        "1L Vegetable stock, warm",
        "Zucchini and peas",
        "Parmesan cheese",
        "White wine"
      ],
      steps: [
        "Sauté rice in butter until translucent",
        "Deglaze with white wine",
        {
          text: "The stirring process",
          substeps: [
            "Add stock one ladle at a time",
            "Stir continuously until absorbed",
            "Repeat until rice is creamy but al dente"
          ]
        },
        "Stir in vegetables and cheese",
        "Rest for 2 minutes before serving"
      ]
    },
    {
      id: 7,
      title: "No-Bake Matcha Cheesecake",
      difficulty: "medium",
      time: 20,
      description: "Chilled layers of matcha cream and almond crust deliver a refined dessert without an oven.",
      category: "dessert",
      tags: ["dessert", "no-bake", "matcha"],
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
      ingredients: [
        "200g Digestives, crushed",
        "80g Butter, melted",
        "400g Cream cheese",
        "2 tbsp Matcha powder",
        "100g Icing sugar"
      ],
      steps: [
        "Mix crumbs and butter, press into tin",
        "Chill base for 30 minutes",
        "Whisk together remaining ingredients",
        "Spread over base",
        "Refrigerate for at least 4 hours"
      ]
    },
    {
      id: 8,
      title: "Herbal Quinoa Salad",
      difficulty: "easy",
      time: 18,
      description: "Bright herbs, toasted seeds, and citrus vinaigrette make this a quick, nourishing side or lunch.",
      category: "salad",
      tags: ["salad", "meal-prep", "refreshing"],
      image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80",
      ingredients: [
        "1 cup Quinoa",
        "Large bunch of parsley and mint",
        "Cucumber and cherry tomatoes",
        "Lemon juice and olive oil",
        "Pumpkin seeds"
      ],
      steps: [
        "Rinse and cook quinoa",
        "Chop all herbs and vegetables",
        "Whisk lemon juice and oil",
        "Toss everything together",
        "Top with toasted pumpkin seeds"
      ]
    }
  ];

  // ============================================
  // PRIVATE: STATE
  // ============================================
  let currentFilter = "all";
  let currentSort = "none";
  let searchQuery = "";
  let favorites = JSON.parse(localStorage.getItem("recipeFavorites")) || [];
  let debounceTimer;

  // ============================================
  // PRIVATE: DOM REFERENCES
  // ============================================
  const recipeContainer = document.querySelector("#recipe-container");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const sortButtons = document.querySelectorAll(".sort-btn");
  const searchInput = document.querySelector("#search-input");
  const clearSearchBtn = document.querySelector("#clear-search");
  const recipeCountDisplay = document.querySelector("#recipe-count");

  // ============================================
  // PRIVATE: HELPER FUNCTIONS
  // ============================================

  // Recursive function to render steps
  const renderSteps = (steps, level = 0) => {
    const listClass = level === 0 ? "steps-list" : "substeps-list";
    let html = `<ol class="${listClass}">`;
    
    steps.forEach(step => {
      if (typeof step === "string") {
        html += `<li>${step}</li>`;
      } else {
        html += `<li>${step.text}`;
        if (step.substeps && step.substeps.length > 0) {
          html += renderSteps(step.substeps, level + 1);
        }
        html += `</li>`;
      }
    });
    
    html += `</ol>`;
    return html;
  };

  const createStepsHTML = (steps) => {
    if (!steps || steps.length === 0) return "<p>No steps available</p>";
    return renderSteps(steps);
  };

  const createRecipeCard = (recipe) => {
    const isFavorited = favorites.includes(recipe.id);
    const heartIcon = isFavorited ? "❤️" : "🤍";

    const tagMarkup = recipe.tags
      .map((tag) => `<span class="recipe-tag">${tag}</span>`)
      .join("");

    return `
      <article class="recipe-card" data-id="${recipe.id}">
        <!-- NEW: Favorite Button -->
        <button class="favorite-btn ${isFavorited ? "favorited" : ""}" 
                data-recipe-id="${recipe.id}"
                aria-label="Favorite this recipe">
            ${heartIcon}
        </button>

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
          
          <div class="card-actions">
            <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
              📋 Show Steps
            </button>
            <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
              🥗 Show Ingredients
            </button>
          </div>
          
          <div class="ingredients-container" data-recipe-id="${recipe.id}">
            <h4>Ingredients:</h4>
            <ul>
              ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}
            </ul>
          </div>
          
          <div class="steps-container" data-recipe-id="${recipe.id}">
            <h4>Cooking Steps:</h4>
            ${createStepsHTML(recipe.steps)}
          </div>
        </div>
      </article>
    `;
  };

  const renderRecipes = (recipesToRender) => {
    recipeContainer.innerHTML = recipesToRender.map(createRecipeCard).join("");
  };

  const filterByDifficulty = (recipes, difficulty) => recipes.filter(r => r.difficulty === difficulty);
  const filterByTime = (recipes, maxTime) => recipes.filter(r => r.time <= maxTime);

  // NEW: Search filter
  const filterBySearch = (recipes, query) => {
    if (!query || query.trim() === "") {
        return recipes;
    }
    
    const lowerQuery = query.toLowerCase().trim();
    
    return recipes.filter(recipe => {
        const titleMatch = recipe.title.toLowerCase().includes(lowerQuery);
        const ingredientMatch = recipe.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(lowerQuery)
        );
        const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);
        
        return titleMatch || ingredientMatch || descriptionMatch;
    });
  };

  // NEW: Favorites filter
  const filterFavorites = (recipes) => {
    return recipes.filter(recipe => favorites.includes(recipe.id));
  };

  const applyFilter = (recipes, filterType) => {
    switch(filterType) {
      case "easy": return filterByDifficulty(recipes, "easy");
      case "medium": return filterByDifficulty(recipes, "medium");
      case "hard": return filterByDifficulty(recipes, "hard");
      case "quick": return filterByTime(recipes, 30);
      case "favorites": return filterFavorites(recipes);
      default: return recipes;
    }
  };

  const sortByName = (recipes) => [...recipes].sort((a, b) => a.title.localeCompare(b.title));
  const sortByTime = (recipes) => [...recipes].sort((a, b) => a.time - b.time);

  const applySort = (recipes, sortType) => {
    switch(sortType) {
      case "name": return sortByName(recipes);
      case "time": return sortByTime(recipes);
      default: return recipes;
    }
  };

  const updateRecipeCounter = (showing, total) => {
    if (recipeCountDisplay) {
        recipeCountDisplay.textContent = `Showing ${showing} of ${total} recipes`;
    }
  };

  const updateDisplay = () => {
    let recipesToDisplay = recipes;
    
    // Apply search FIRST
    recipesToDisplay = filterBySearch(recipesToDisplay, searchQuery);
    
    // Then apply filters
    recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
    
    // Then apply sorts
    recipesToDisplay = applySort(recipesToDisplay, currentSort);
    
    // Update counter
    updateRecipeCounter(recipesToDisplay.length, recipes.length);
    
    // Render
    renderRecipes(recipesToDisplay);
    updateActiveButtons();
  };

  const updateActiveButtons = () => {
    filterButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.filter === currentFilter));
    sortButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.sort === currentSort));
  };

  // ============================================
  // PRIVATE: FAVORITES MANAGEMENT
  // ============================================
  const saveFavorites = () => {
    localStorage.setItem("recipeFavorites", JSON.stringify(favorites));
  };

  const toggleFavorite = (recipeId) => {
    const id = parseInt(recipeId);
    
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    
    saveFavorites();
    updateDisplay();
  };

  // ============================================
  // PRIVATE: EVENT HANDLERS
  // ============================================
  const handleSearchInput = (e) => {
    const query = e.target.value;
    
    if (clearSearchBtn) {
        clearSearchBtn.style.display = query ? "block" : "none";
    }
    
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        searchQuery = query;
        updateDisplay();
    }, 300);
  };

  const handleClearSearch = () => {
    if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
        if (clearSearchBtn) clearSearchBtn.style.display = "none";
        updateDisplay();
    }
  };

  const handleFavoriteClick = (e) => {
    const btn = e.target.closest(".favorite-btn");
    if (!btn) return;
    
    const recipeId = btn.dataset.recipeId;
    toggleFavorite(recipeId);
  };

  const handleFilterClick = (e) => {
    currentFilter = e.target.dataset.filter;
    updateDisplay();
  };

  const handleSortClick = (e) => {
    currentSort = e.target.dataset.sort;
    updateDisplay();
  };

  const handleToggleClick = (e) => {
    if (!e.target.classList.contains("toggle-btn")) return;
    
    const btn = e.target;
    const id = btn.dataset.recipeId;
    const type = btn.dataset.toggle;
    const containerClass = type === "steps" ? "steps-container" : "ingredients-container";
    const container = document.querySelector(`.${containerClass}[data-recipe-id="${id}"]`);
    
    if (container) {
      container.classList.toggle("visible");
      const isVisible = container.classList.contains("visible");
      
      if (type === "steps") {
        btn.textContent = isVisible ? "📋 Hide Steps" : "📋 Show Steps";
      } else {
        btn.textContent = isVisible ? "🥗 Hide Ingredients" : "🥗 Show Ingredients";
      }
    }
  };

  // ============================================
  // PRIVATE: INITIALIZATION
  // ============================================
  const setupEventListeners = () => {
    filterButtons.forEach(btn => btn.addEventListener("click", handleFilterClick));
    sortButtons.forEach(btn => btn.addEventListener("click", handleSortClick));
    recipeContainer.addEventListener("click", handleToggleClick);
    
    // NEW listeners
    if (searchInput) {
        searchInput.addEventListener("input", handleSearchInput);
    }
    
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", handleClearSearch);
    }
    
    recipeContainer.addEventListener("click", handleFavoriteClick);

    console.log("Event listeners attached!");
  };

  const init = () => {
    console.log("🍳 RecipeJS initializing...");
    setupEventListeners();
    updateDisplay();
    console.log("✅ RecipeJS ready!");
    console.log(`📊 ${recipes.length} recipes loaded`);
    console.log(`❤️  ${favorites.length} favorites saved`);
  };

  // ============================================
  // PUBLIC API
  // ============================================
  return {
    init,
    updateDisplay
  };

})();

// Start the app
RecipeApp.init();
