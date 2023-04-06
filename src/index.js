// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").innerText);
  const quantity = Number(product.querySelector(".quantity input").value);
  const subtotal = product.querySelector(".subtotal span");
  return (subtotal.innerText = price * quantity);
}

function calculateAll() {
  // ITERATION 2
  const allProduct = document.querySelectorAll(".product");
  let total = 0;
  allProduct.forEach((element) => {
    total += updateSubtotal(element);
  });
  // ITERATION 3
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerText = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target.closest("tr").remove());
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelectorAll(".create-product input")[0]
    .value;
  const newProductPrice = document.querySelectorAll(".create-product input")[1]
    .value;

  const tr = document.createElement("tr");
  tr.className = "product";
  const parent = document.querySelectorAll("tbody")[0];
  parent.appendChild(tr);
  tr.innerHTML = `<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  const arrayBtn = document.querySelectorAll(".btn.btn-remove");
  lastElementIndex = document.querySelectorAll(".btn.btn-remove").length - 1;
  let newButton = arrayBtn[lastElementIndex];
  newButton.addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removesBtn = document.querySelectorAll(".btn.btn-remove");
  removesBtn.forEach((btn) => btn.addEventListener("click", removeProduct));

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
