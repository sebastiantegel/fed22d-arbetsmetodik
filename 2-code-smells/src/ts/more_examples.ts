// Long function
function calculateGrade(scores: number[]) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  const average = total / scores.length;

  let grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

// Refaktoreras till
function calculateGrade(scores: number[]) {
  const average =
    scores.reduce(
      (accumulatedValue, currentValue) => (accumulatedValue += currentValue)
    ) / scores.length;

  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";

  return "F";
}

/* -------------------------- */
// Följande funktion kommer att skapa html
interface IProduct {
  name: string;
  price: number;
  tax: number;
  imageUrl: string;
}

function createHtml() {
  const products: IProduct[] = JSON.parse(
    localStorage.getItem("products") || "[]"
  );

  //const valueFromLs = localStorage.getItem("products");
  //const objectFromLs = JSON.parse(valueFromLs || "[]");

  const container = document.getElementById("container") as HTMLDivElement; // <div id="container"></div>

  const heading = document.createElement("h3"); // <h3></h3>
  heading.innerHTML = "Produkter"; // <h3>Produkter</h3>
  container.appendChild(heading); // <div id="container"><h3>Produkter</h3></div>

  for (let i = 0; i < products.length; i++) {
    const productContainer = document.createElement("div"); // <div></div>

    const productName = createNameElement(i); // <h5 class="product__name">Callaway Chrome Soft</h5>

    const imageContainer = createImageElement(i); // <div class="product__image"><img src="..." alt="Callaway Chrome Soft" /></div>

    productContainer.appendChild(productName); // <div><h5 class="...">...</h5></div>
    productContainer.appendChild(imageContainer); // <div><h5 class="...">...</h5><div class="product_image><img /></div>
    container.appendChild(productContainer); // <div id="container"><div><h5></h5><div><img /></div></div></div>
  }

  function createImageElement(i: number) {
    const imageContainer = document.createElement("div");
    imageContainer.className = "product__image";

    const productImage = document.createElement("img");
    productImage.src = products[i].imageUrl;
    productImage.alt = products[i].name;

    imageContainer.appendChild(productImage);
    return imageContainer;
  }

  function createNameElement(i: number) {
    const productName = document.createElement("h5");
    productName.innerHTML = products[i].name;
    productName.className = "product__name";
    if (products[i].price < 100) {
      productName.className += "--discounted";
    }
    return productName;
  }
}
