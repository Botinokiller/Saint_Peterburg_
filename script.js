const projects = [
  {
    img1: "./img/pic_2.png",
    title1: "ССК “ОЛИМП”",
    desc1: "Световое оформление форума “Шубы-2019”",

    img2: "./img/pic_3.png",
    title2: "Chine Town",
    desc2: "Very great china town"
  },
  {
    img1: "./img/tashkentcity.jpg",
    title1: "Tashkent city",
    desc1: "Many people",

    img2: "./img/chinatown.jpg",
    title2: "Oslo Town",
    desc2: "Great City of Norway"
  }
];

let currentIndex = 0;
const img1   = document.getElementById("img1");
const title1 = document.getElementById("title1");
const desc1  = document.getElementById("desc1");
const img2   = document.getElementById("img2");
const title2 = document.getElementById("title2");
const desc2  = document.getElementById("desc2");

function updateSlides(){
    const data = projects[currentIndex];

    img1.src           =  data.img1;
    title1.textContent = data.title1;
    desc1.textContent  = data.desc1;

    img2.src           =  data.img2;
    title2.textContent = data.title2;
    desc2.textContent  = data.desc2;
}

const prevBtn = document.querySelector(".catalog_products .left-btn");
const nextBtn = document.querySelector(".catalog_products .right-btn");

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= projects.length) currentIndex = 0;
    updateSlides();
});

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = projects.length - 1;
    updateSlides();
});

updateSlides();




const rentItems = [
  {
    img:   "./img/pic_6.png",
    title: "Robe Robin ParFect 100",
    specs: [
      "Источник света 12 светодиодов RGBW по 15 Вт каждый",
      "Угол раскрытия 7°",
      "В комплекте рассеивающая линза 40°",
      "Потребляемая мощность 200 Вт"
    ]
  },
  {
    img:   "./img/pic_5.png",
    title: "FOG 1550 FT",
    specs: [
      "Мощность: 1500 Вт",
      "Мощность: 1500 Вт",
      "Время разогрева: 8.5 мин",
      "Вес: 18.5 кг"
    ]
  },
  {
    img:   "./img/pic_4.png",
    title: "X1 FT PRO",
    specs: [
      "Мощность: 1500 Вт",
      "Производительность: 99 м³/мин",
      "Время разогрева: 6 мин",
      "Вес: 52.5 кг"
    ]
  },

];

let rentIndex = 0;

const rentImg   = document.getElementById("img3");
const rentTitle = document.querySelector(".Robe_desc");
const rentSpecs = document.querySelectorAll(".rent_equipment .link2");

function updateRent() {
  const data = rentItems[rentIndex];

  rentImg.src           = data.img;
  rentTitle.textContent = data.title;

  rentSpecs.forEach((li, i) => {
    li.textContent = data.specs[i] || "";
  });
}

const prevBtn2 = document.querySelector(".rent_equipment .left-btn");
const nextBtn2 = document.querySelector(".rent_equipment .nav-box .nav-btn:last-child");

nextBtn2.addEventListener("click", () => {
  rentIndex++;
  if (rentIndex >= rentItems.length) rentIndex = 0;
  updateRent();
});

prevBtn2.addEventListener("click", () => {
  rentIndex--;
  if (rentIndex < 0) rentIndex = rentItems.length - 1;
  updateRent();
});

updateRent(); 