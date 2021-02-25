// Задание 2

// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredientsList = document.querySelector('#ingredients');
const addIngredients = newIngredients => {
    return newIngredients.map((ingredient) => {
        const newIngredientList = document.createElement('li');
        newIngredientList.classList.add('item');
        newIngredientList.textContent = `${ingredient}`;
        return newIngredientList
    });
};

const ingredientsItems = addIngredients(ingredients);
ingredientsList.append(...ingredientsItems);