import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  // setup filter
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice );
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceInput.value = maxPrice;
  priceValue.textContent = `تومان ${maxPrice/1000},000`;

  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `تومان ${value}`;
    let newStore = store.filter((product) => product.price <= value);
    display(newStore, getElement('.products-container'), true);
    if (newStore.length < 1) {
      const products = getElement('.products-container');
      products.innerHTML = `<h3 class="filter-error">!!!‌ نتیجه‌ای یافت نشد </h3>`;
    }
  });
};

export default setupPrice;
