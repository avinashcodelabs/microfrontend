import faker from "faker";

const mount = (el) => {
  const cartText = `You have ${faker.random.number()} items in your cart`;
  el.innerHTML = cartText;
};

// Used by products standalone app to render the products with particular el and that too, during the dev mode
const el = document.querySelector("#dev-cart");
if (process.env.NODE_ENV === "development" && el) {
  mount(el);
}

// Used by container app to render the products part wherever it wants by passing the host element
export { mount };
