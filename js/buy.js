let modelList = [
  {
    product: "iPhone X ",
    capacity: "128 GB",
    color: "Star blue",
    charger: "Yes",
  },
  {
    product: "AirPods Pro 2nd ",
    capacity: "4 GB",
    color: "White",
    charger: "No",
  },
];

function initialize() {
  loadProductsFromLocalStorage();
  const PRODUCT_FORM = document.getElementById("product-form");
  PRODUCT_FORM.addEventListener("submit", addOrUpdateProduct);
  showProducts();
}

function loadProductsFromLocalStorage() {
  const storedProducts = localStorage.getItem('products');
  if (storedProducts) {
    modelList = JSON.parse(storedProducts);
  }
}

function saveProductsToLocalStorage() {
  localStorage.setItem('products', JSON.stringify(modelList));
}

function showProducts() {
  const APPLES = document.getElementById("apples");
  let allProducts = "";
  for (let i = 0; i < modelList.length; i++) {
    allProducts += `<li>${modelList[i].product} <button class="button button-edit" onclick="editProduct(${i})">Edit</button><button class="button button-delete" onclick="deleteProduct(${i})">Delete</button><button class="button button-details" onclick="seeDetails(${i})">See Details</button></li>`;
  }
  APPLES.innerHTML = allProducts;
}

let editingIndex = null;

function editProduct(index) {
  editingIndex = index;
  const product = modelList[index];
  document.getElementById('product').value = product.product;
  document.getElementById('capacity').value = product.capacity;
  document.getElementById('color').value = product.color;
  document.getElementById('charger').checked = product.charger === "Yes";
  const submitButton = document.querySelector("#product-form button[type='submit']");
  submitButton.textContent = 'Update';
}

function addOrUpdateProduct(event) {
  event.preventDefault();
  const PRODUCT = event.target.product.value;
  const CAPACITY = event.target.capacity.value;
  const COLOR = event.target.color.value;
  const CHARGER = event.target.charger.checked ? "Yes" : "No";
  document.getElementById("product-error").style.visibility = "hidden";
  document.getElementById("capacity-error").style.visibility = "hidden";
  document.getElementById("finish-error").style.visibility = "hidden";
  document.getElementById("extra-error").style.visibility = "hidden";
  let hasErrors = false;
  if (PRODUCT === "") {
    document.getElementById("product-error").style.visibility = "visible";
    hasErrors = true;
  }
  if (CAPACITY === "") {
    document.getElementById("capacity-error").style.visibility = "visible";
    hasErrors = true;
  }
  if (COLOR === "") {
    document.getElementById("finish-error").style.visibility = "visible";
    hasErrors = true;
  }
  if (!hasErrors) {
    const newProduct = {
      product: PRODUCT,
      capacity: CAPACITY,
      color: COLOR,
      charger: CHARGER,
    };
    if (editingIndex !== null) {
      modelList[editingIndex] = newProduct;
    } else {
      modelList.push(newProduct);
    }
    saveProductsToLocalStorage();
    const submitButton = document.querySelector("#product-form button[type='submit']");
    submitButton.textContent = 'Submit';
    editingIndex = null;
    event.target.reset();
  }
  showProducts();
}

function deleteProduct(productId) {
  modelList.splice(productId, 1);
  saveProductsToLocalStorage();
  showProducts();
}

function seeDetails(index) {
  const PRODUCT_DETAILS = modelList[index];
  localStorage.setItem('selectedProductDetails', JSON.stringify(PRODUCT_DETAILS));
  window.location.href = 'final_gateway.html';
}

initialize();