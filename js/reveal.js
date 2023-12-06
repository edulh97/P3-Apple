function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function displayProductDetails() {
  const DETAILS = JSON.parse(localStorage.getItem('selectedProductDetails'));
  if (DETAILS) {
    const DETAILS_DIV = document.getElementById('productDetails');
    DETAILS_DIV.innerHTML =
      `<p>Product: ${DETAILS.product}</p>
    <p>Capacity: ${DETAILS.capacity}</p>
    <p>Color: ${DETAILS.color}</p>
    <p>Charger: ${DETAILS.charger}</p>`;
  }
}

displayProductDetails();
reveal();