// * ========== HTML Element Selectors ========== * \\
const priceInput = document.querySelector("#price");
const quantityInput = document.querySelector("#quantity");
const totalPriceDisplay = document.querySelector(".total-price");
const quantityLabel = document.querySelector(".quantity-label");

// * ========== Function Declarations ========== * \\
// FUNCTION: Calculate total Cost
function calculateTotalCost() {
  const total = priceInput.value * quantityInput.value;
  totalPriceDisplay.innerText = `$${total.toFixed(2)}`;
}

// FUNCTION: Update Quantity Label
function updateQuantityLabel() {
  const quantity = quantityInput.value;
  quantityLabel.innerText = quantity;
}

// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Calculate Total Cost When Price Input Changes
priceInput.addEventListener("input", calculateTotalCost);

// EVENT LISTENER: Calculate Total Cost When Quantity Input Changes
quantityInput.addEventListener("input", calculateTotalCost);

// EVENT LISTENER: Update Quantity Label When Quantity Input Changes
quantityInput.addEventListener("input", updateQuantityLabel);

// * ========== Application Start ========== * \\
// Calcualte the Total Cost When the Application Starts
calculateTotalCost();

// Update the Quantity Label When the Application Starts
updateQuantityLabel();
