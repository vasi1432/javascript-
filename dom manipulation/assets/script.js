// const element = document.getElementsByClassName("try");
// console.log(element);

// for (let i = 0; i < element.length; i++) {
//   element[i].style.color = "blue";
//   element[i].style.background = "red";

// const list = document.getElementById("list");
// const productList = [
//   {
//     name: "macbook",
//     price: 70000,
//     brand: "apple",
//   },
// ];
// for (let i = 0; i <= productList.length; i++) {
//   const element = document.createElement("div");
//   element.className = "list-items";
//   element.innerHTML = productList[i];
//   list.appendChild(element);
// // }
// const productListObjArray = [
//   {
//     name: "MacBookPro 11",
//     price: 70000,
//     brand: "Apple",
//   },
// ];
// for (let i = 0; i <= productListObjArray.length; i++) {
//   const element = document.createElement("div");
//   element.innerHTML =
//     "<div class = 'product-items'><p>" +
//     productListObjArray[i].name +
//     "</p><p class = 'product-price' >" +
//     productListObjArray[i].price +
//     "</p><p>" +
//     productListObjArray[i].brand +
//     "</p></div>";
//   list.appendChild(element);
// }

const card1 = document.getElementById("card");

const CardDetail = [
  {
    shopname: "Shree Shyam Rasoi",
    rating: "4.0★",
    discount: "40% OFF",
    time: "36 min",
    location: "North india",
    price: "₹ 200 for one",
    arrowIMG:
      "	https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
    orderText: "1500+ orders placed from here recently",
    safetyImg:
      "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
  },
];
for (let i = 0; i <= CardDetail.length; i++) {
  const element = document.createElement("div");
  element.innerHTML =
    "<div class='data'><h4>" +
    CardDetail[i].shopname +
    "</h4><div class='rating'><p>" +
    CardDetail[i].rating +
    "</p></div></div>" +
    "<div class = 'discount'><p>" +
    CardDetail[i].discount +
    "</p></div> <div class = 'time'> <p>" +
    CardDetail[i].time +
    "</div> </p>" +
    "<div class= 'price'><span>" +
    CardDetail[i].location +
    "</span><span>" +
    CardDetail[i].price +
    "</span></div>" +
    "</div>" +
    "<hr/>";
  card1.appendChild(element);
}
