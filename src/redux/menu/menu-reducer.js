import hats from "../../images/hats.jpg";
import jackets from "../../images/jackets.jpg";
import shoes from "../../images/shoes.jpg";
import mens from "../../images/mens.webp";
import womens from "../../images/womens.jpeg";

let INITIAL_STATE = {
  items: [
    { title: "HATS", src: hats, id: 0, linkUrl: "shop/hats" },
    { title: "JACKETS", src: jackets, id: 1, linkUrl: "shop/jackets" },
    { title: "SHOES", src: shoes, id: 2, linkUrl: "shop/shoes" },
    { title: "WOMENS", src: womens, id: 3, linkUrl: "shop/womens" },
    { title: "MENS", src: mens, id: 4, linkUrl: "shop/mens" },
  ],
};

let menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuReducer;
