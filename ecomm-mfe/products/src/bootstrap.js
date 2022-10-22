import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Used by products standalone app to render the products with particular el and that too, during the dev mode
const el = document.querySelector("#dev-products");
if (process.env.NODE_ENV === "development" && el) {
  mount(el);
}

// Used by container app to render the products part wherever it wants by passing the host element
export { mount };
