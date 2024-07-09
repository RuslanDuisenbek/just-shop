console.log("Hello");
const productData = {
  id: 2,
  title: "iPhone X",
  description:
    "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  price: 899,
  discountPercentage: 17.94,
  rating: 4.44,
  stock: 34,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.ebayimg.com/images/g/mVEAAOSwx~dfcr32/s-l1600.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/2/1.jpg",
    "https://cdn.dummyjson.com/product-images/2/2.jpg",
    "https://cdn.dummyjson.com/product-images/2/3.jpg",
    "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
  ],
};

function createDiv(product) {
  return `
    <div class="col-md-4 mt-4">
          <div class="card" style="width: 18rem">
            <img
              class="card-img-top"
              src=${product.thumbnail}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">
                ${product.description}
              </p>
              <p class="card-text">
                <small class="text-muted">Price: $${product.price} - Disount : ${product.price}%</small>
              </p>
              <a href="#" class="btn btn-primary">Buy now!</a>
            </div>
          </div>
        </div>`;
}
addEventListener("DOMContentLoaded", () => {
  const roww = document.getElementById("row_product");
  roww.innerHTML += createDiv(productData);
  for (let i = 1; i < 12; i++) {
    fetch(`https://dummyjson.com/products/${i}`)
      .then((res) => res.json())
      .then((product) => (roww.innerHTML += createDiv(product)))
      .catch(() => {
        alert("Something gets wrong!");
      });
  }
});
