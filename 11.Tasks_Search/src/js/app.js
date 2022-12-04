const Country = [
  {
    id: 1,
    Description: "Kulekler seheri",
    Imgsrc: "../src/photos/best_img.jpg",
    Name: "baki",
  },
  {
    id: 2,
    Description: "Kulekler seheri",
    Imgsrc: "../src/photos/Barbecue.jpg",
    Name: "abseron",
  },
  {
    id: 3,
    Description: "Kulekler seheri",
    Imgsrc: "../src/photos/best_img.jpg",
    Name: "bineqedi",
  },
  {
    id: 4,
    Description: "Kulekler seheri",
    Imgsrc: "../src/photos/best_img.jpg",
    Name: "sumqayit",
  },
  {
    id: 5,
    Description: "Kulekler seheri",
    Imgsrc: "../src/photos/best_img.jpg",
    Name: "xirdalan",
  },
  {
    id: 6,
    Description: "Kulekler seheri",
    Imgsrc: "../src/photos/best_img.jpg",
    Name: "yasamal",
  },
  {
    id: 7,
    Description: "Kulekler seheri",
    Imgsrc: "../src/photos/best_img.jpg",
    Name: "bileceri",
  },
  {
    id: 6,
    Description: "Kulekler seheri",
    Imgsrc: "../src/photos/best_img.jpg",
    Name: "ehmedli",
  },
];
const AdderCart = document.querySelector(".bannerrow");
function AddCart() {
  Country.map((cart) => {
    AdderCart.innerHTML += `
<div class="col-lg-3">
<div class="cards">
  <div class="card_img">
    <img src="${cart.Imgsrc}" alt="">
  </div>
  <div class="card_content">
    <h2>${cart.Name}</h2>
    <p>${cart.Description}</p>
  </div>
</div>
</div>
`;
  });
}
AddCart();


const InputValue = document.getElementById("search");
InputValue.addEventListener("keyup", (e) => {
  e.preventDefault();
  let InputItem = document.getElementById("search");
  // let FilterData = InputItem.value;

  let element = document.querySelector(".bannerrow");
  element.innerHTML = "";
  Country.filter((data) => {
    if (InputValue.value === data.Name) {
      element.innerHTML = `
<div class="col-lg-3">
              <div class="cards">
                <div class="card_img">
             <img src="${data.Imgsrc}" alt="${data.Name}">
                </div>
                <div class="card_content">
                  <h2>${data.Name}</h2>
                  <p>${data.Description}</p>
                </div>
              </div>
              </div>
    `;
    }
  });
});
