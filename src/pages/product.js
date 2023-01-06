// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';
import fetchProducts from '../fetchProducts.js';
import { findProduct } from '../store.js';

// selections
const singleproductmain = getElement('.single-product');
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
// const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

// show product when page loads
window.addEventListener('DOMContentLoaded', async function () {
  const urlID = window.location.search;
  const urlIDnum = new URL(location.href).searchParams.get('id')

  try {

    // const response = await fetch(`${singleProductUrl}${urlID}`);
    const ress = findProduct(urlIDnum)
    console.log(ress)
    // if (response.status >= 200 && response.status <= 299)

    if (ress != undefined) {
      // const product = await response.json();

      const { id ,image ,name, company, price, colors, description } = ress;

      // grab data
      // const { id, fields } = product;
      productID = id;

      console.log(ress)
      console.log(id ,image ,name, company, price, colors , description )
    

      // const { name, company, price, colors, description } = fields;
      // const image = fields.image[0].thumbnails.large.url;
      // set values

      document.title = `${name.toUpperCase()} | Comfy`;
      pageTitleDOM.textContent = `محصولات / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `دسته : ${company}`;
      priceDOM.textContent = (`${price/1000},000  تومان`);
      descDOM.textContent = description;
      colors.forEach((color) => {
        const span = document.createElement('span');
        span.classList.add('product-color');
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
      });
    } else {
      // console.log(response.status, response.statusText);
      centerDOM.innerHTML = `
    <div>
    <h3 class="error">متاسفانه مشکلی پیش آمد</h3>
    <a href="index.html" class="btn">بازگشت به خانه</a>
    </div> 
     `;
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = 'none';
});

// cartBtn.addEventListener('click', function () {
//   addToCart(productID);
// });
