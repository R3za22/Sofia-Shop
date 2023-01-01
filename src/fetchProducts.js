import { allProductsUrl } from './utils.js';

const data = [
  {
      "id": "1",
      "fields": {
          "company": "شمع",
          "colors": [
              "#f15025",
              "#222"
          ],
          "featured": true,
          "price": 26000,
          "name": "شمع گوش",
          "image": [
              {
                "id": "1",
                "url": "./images/ta/1.jpg", 
              }
          ]
      }
  },
  {
    "id": "2",
    "fields": {
        "company": "هدبند",
        "colors": [
            "#f15025",
            "#222"
        ],
        "featured": true,
        "price": 42000,
        "name": "هدبند فانتزی گوشدار",
        "image": [
            {
                "id": "2",
                "url": "./images/ta/2.jpg",

            }
        ]
    }
},
{
  "id": "3",
  "fields": {
      "company": "فوم",
      "colors": [
          "#f15025",
          "#222"
      ],
      "featured": true,
      "price": 65000,
      "name": "فوم شست وشو شیر بز",
      "image": [
          {
            "id": "3",
            "url": "./images/ta/3.jpg"

          }
      ]
  }
},
{
  "id": "4",
  "fields": {
      "company": "سوهان",
      "colors": [
          "#f15025",
          "#222"
      ],
      "featured": false,
      "price": 27000,
      "name": "رنده و سوهان پا",
      "image": [
          {
            "id": "4",
            "url": "./images/ta/4.jpg"
          }
      ]
  }
},
{
  "id": "5",
  "fields": {
      "company": "ماسک",
      "colors": [
          "#f15025",
          "#222"
      ],
      "featured": false,
      "price": 28000,
      "name": "ماسک صورت انار رینوزیت",
      "image": [
          {
            "id": "5",
            "url": "./images/ta/5.jpg",
          }
      ]
  }
},
{
  "id": "6",
  "fields": {
      "company": "ماسک",
      "colors": [
          "#f15025",
          "#222"
      ],
      "featured": false,
      "price": 29000,
      "name": "فرمژه مکس فاکتور",
      "image": [
          {
            "id": "6",
            "url": "./images/ta/6.jpg",
          }
      ]
  }
}
]



const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  if (response) {
    // return response.json();
    return data;
  }
  return response;
};

export default fetchProducts;
