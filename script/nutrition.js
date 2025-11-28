// Personalized Plan
const breakfasts = [
  "Oatmeal with banana",
  "Greek yogurt and honey",
  "Boiled eggs with brown toast",
  "Smoothie with spinach and banana",
  "Peanut butter toast",
  "Vegetable omelet",
  "Avocado toast"];
const lunches = [
  "Grilled chicken with rice",
  "Tuna salad bowl",
  "Vegetarian tacos",
  "Quinoa with veggies",
  "Baked pasta with cheese",
  "Chicken Caesar wrap",
  "Beef stir fry"
];

const dinners = [
  "Soup with vegetables",
  "Grilled fish with salad",
  "Egg omelet with veggies",
  "Light Caesar salad",
  "Cottage cheese bowl",
  "Veggie sandwich",
  "Chicken soup"
];

// Choosing a specific meal

function getRandomMeal(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("GenerateBTN").addEventListener("click", function () {
  const container = document.getElementById("mealPlan");
  container.innerHTML = "";
  //let plan="<h3>Your 7-Day Customized Meal Plan</h3>";
  for (let i = 1; i <= 7; i++) {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-3";

   col.innerHTML = `
            <div class="card">
                <div class="card-header">Day ${i}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item breakfast"><strong>Breakfast:</strong> ${getRandomMeal(breakfasts)}</li>
                    <li class="list-group-item lunch"><strong>Lunch:</strong> ${getRandomMeal(lunches)}</li>
                    <li class="list-group-item dinner"><strong>Dinner:</strong> ${getRandomMeal(dinners)}</li>
                </ul>
            </div>
        `;

    container.appendChild(col);
    // plan+=`<div class="day-plan mb-3">
    // <h4> Day ${i}</h4>
    // <p><strong>Breakfast:</strong>${getRandomMeal(breakfasts)}</p>
    // <p><strong>Lunches:</strong>${getRandomMeal(lunches)}</p>
    //<p><strong>Dinners:</strong>${getRandomMeal(dinners)}</p>
    //</div>
    //<hr>
    //`;
  }
  //document.getElementById("mealPlan").innerHTML=plan;
});


// BMI Calculator
document.getElementById("calculateBMI").addEventListener("click", function () {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight) {
    alert("Please Enter Your Height And Your Weight.");
    return;
  }
  const heightInMeter = height / 100;
  const bmi = weight / (heightInMeter * heightInMeter);
  const bmiRound = bmi.toFixed(1);

  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "#3498db";
  }
  else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
    color = "#2ecc71";
  }
  else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
    color = "#f39c12";
  }
  else {
    category = "Obesity";
    color = "#e74c3c";
  }

  document.getElementById("bmiResult").innerHTML = `
    <h5 style="color:${color};">Your BMI: ${bmiRound}</h5>
    <p style="color:${color};">Category: <strong>${category}</strong></p>
`;

});

const hamburger = document.querySelector('.hamburger');
const mainNavLinks = document.querySelector('.mainNav');

hamburger.addEventListener('click', () => {
    mainNavLinks.classList.toggle('active');
});
