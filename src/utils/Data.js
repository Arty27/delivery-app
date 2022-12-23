import I1 from "../assets/img/i1.png";
import F1 from "../assets/img/f1.png";
import C3 from "../assets/img/c3.png";
import Fi1 from "../assets/img/fi1.png";
const heroData = [
  {
    id: 1,
    name: "Icecream",
    desc: "Chocolate & Vanilla",
    price: "5.25",
    img: I1,
  },
  {
    id: 2,
    name: "Strawberry",
    desc: "Fresh Strawberries",
    price: "9.25",
    img: F1,
  },
  {
    id: 3,
    name: "Chicken Platter",
    desc: "Mixed Kabab ",
    price: "10.25",
    img: C3,
  },
  {
    id: 4,
    name: "Fish Platter",
    desc: "Mixed Fish Kabab",
    price: "5.25",
    img: Fi1,
  },
];

export default heroData;

export const categories=[
  {
    id:1,
    name:"Chicken",
    urlParamName:"chicken"
  },
  {
    id:2,
    name:"Curry",
    urlParamName:"curry"
  },
  {
    id:3,
    name:"Rice",
    urlParamName:"rice"
  },
  {
    id:4,
    name:"Fish",
    urlParamName:"fish"
  },

  {
    id:5,
    name:"Fruits",
    urlParamName:"fruits"
  },
  {
    id:6,
    name:"Ice Cream",
    urlParamName:"icecream"
  },
  {
    id:7,
    name:"Soft Drinks",
    urlParamName:"drinks"
  },
]