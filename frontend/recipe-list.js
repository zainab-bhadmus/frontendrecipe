const setEditRecipe = (id) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:8080/recipe/${id}`, false);
    xhttp.send();

    const recipe = JSON.parse(xhttp.responseText);

    // const {
    //     id,
    //     name,
    //     ingredients,
    //     directions,
    // } = recipe;

    document.getElementById('id').value = id;
    document.getElementById('name').value = name;
    document.getElementById('ingredients').value = ingredients;
    document.getElementById('directions').value = directions;
    
 

    // setting up the action url for the recipe
    document.getElementById('editRecipe').action = `http://localhost:8080/recipe/${id}`;
}

const deleteRecipe = (id) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:8080/recipe/${id}`, false);
    xhttp.send();

    location.reload();
}

const loadRecipes = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8080/recipes", false);
    xhttp.send();

    const recipes = JSON.parse(xhttp.responseText);

    for (let recipe of recipes) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title"><b>${recipe.name}</b></h4>
                        <h6 class="card-subtitle mb-2 text-muted">${recipe.id}</h6>
                        <div><b>Ingredients:</b> ${recipe.ingredients}</div>
                        <div><b>Directions:</b> ${recipe.directions}</div>
                        <hr>
                        <button type="button" class="btn btn-danger" onClick="deleteRecipe(${recipe.id})">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal" 
                            data-target="#editRecipeModal" onClick="setEditRecipe(${recipe.id})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('recipes').innerHTML = document.getElementById('recipes').innerHTML + x;
    }
}

loadRecipes();