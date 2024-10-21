import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const menuMidori = [
  {
    "id": 1,
    "name": "Chicken Nuggets",
    "description": "7 chicken nuggets acompañados de papas a la fencesa, montado en arroz",
    "price": 80,
    "image": ""
  },
  {
    "id": 2,
    "name": "Nigiri",
    "description": "Nigiris mixtos de Salmón, Atún, Camarón y Kanikama, Acompañados de aderezo y salsa de la casa al gusto.",
    "price": 130,
    "image": ""
  },
  {
    "id": 3,
    "name": "Camarones Roca",
    "description": "Camarones capeados con salsa agridulce acopañados de arroz y ajonjoli",
    "price": 155,
    "image": ""
  },
  {
    "id": 4,
    "name": "Edamame Bowl",
    "description": "Bowl de semillas de soya tierna y sazonadas.",
    "price": 70,
    "image": ""
  },
  {
    "id": 5,
    "name": "Dedos de queso",
    "description": "6 Dedos de queso empanizados acompañdos de papas a la fancesa, montado en arroz.",
    "price": 80,
    "image": ""
  },
  {
    "id": 6,
    "name": "Sopa Miso",
    "description": "Sopa a base de repollo, cebolla, tofu y naruto.",
    "price": 60,
    "image": ""
  },
  {
    "id": 7,
    "name": "Sopa Sayú",
    "description": "Sopa de fideos a base de mungo y soya, tofu y naruto, con tofu, naruto, con guarnició a elegir: Camarón, Res, Huevo",
    "price": 100,
    "image": ""
  },
  {
    "id": 8,
    "name": "Teriyaki De Salmón",
    "description": "Bowl de arroz blanco con verduras al vapor y salmón a la plancha.",
    "price": 250,
    "image": ""
  },
  {
    "id": 9,
    "name": "Teriyaki",
    "description": "Bowl de arroz blanco con verduras al vapor y guarnición a elegir: Res, Pollo, Camarón $25, Mixto $20",
    "price": 185,
    "image": ""
  },
  {
    "id": 10,
    "name": "Chipote Especial",
    "description": "PD: Camarón tempura, philadelfia y aguacate. PF: Forrado con chipotle, topping de spicy tampico y camarón tempura. Natural/Empanizado ",
    "price": 210,
    "image": ""
  },
  {
    "id": 11,
    "name": "Norteñito Especial",
    "description": "PD: Carne de res, camarón, aguacate y philadelfia. PF: Gratinado en tres quesos con topping de tampico y camarón tempura. Natural/Empanizado",
    "price": 210,
    "image": ""
  },
  {
    "id": 12,
    "name": "California Spicy",
    "description": "PD: Philadefia, aguacate, Kanikama. PF: Topping de camarón tempura, spicy tampico con salsa de anguila y chipotle",
    "price": 180,
    "image": ""
  },
  {
    "id": 13,
    "name": "Hot Cheetos Roll",
    "description": "PD: Camaron, kanikama, philadelfia y aguacate. PF: Forrado de cheetos flaming hot y decorado con chipotle y anguila. Natural/Empanizado",
    "price": 140,
    "image": ""
  },
  {
    "id": 14,
    "name": "Salmon Epecial",
    "description": "PD: Camarón, philadelfia y aguacate. PF: Forrado salmón con anguila, topping de queso fratinado y trozos de camarón. Natural/Horneado",
    "price": 220,
    "image": ""
  },
  {
    "id": 15,
    "name": "Salmon Epecial",
    "description": "PD: Camarón, philadelfia y aguacate. PF: Forrado salmón con anguila, topping de queso fratinado y trozos de camarón. Natural/Horneado",
    "price": 220,
    "image": ""
  },
  {
    "id": 16,
    "name": "Hamachi Roll",
    "description": "PD: Camarón, aguacate y pepino. PF: Topping de ceviche de atún preparado de la casa. Natural",
    "price": 230,
    "image": ""
  },
  {
    "id": 17,
    "name": "Avocado Epecial",
    "description": "PD: Camarón, pepino y philadelfia. PF: Forrado en aguacate y ajonjoli con topping de tempico y camarón tempura. Natural/Empanizado",
    "price": 210,
    "image": ""
  },
  {
    "id": 18,
    "name": "Aguachile Patron",
    "description": "PD: Camarón curtido, pepino y aguacate. PF: Camarón y Atun en salsa negra marisquera. Natural",
    "price": 255,
    "image": ""
  },
  {
    "id": 19,
    "name": "Kanikama Roll",
    "description": "PD: Philadelfia, aguacate, camarón y kanikama. PF: Alga empanizada en tempura con topping de tampico, camarón tempura y siracha. Natural/Empanizado",
    "price": 210,
    "image": ""
  },
  {
    "id": 20,
    "name": "Kanikama Spicy",
    "description": "PD: Philadelfia, aguacate, camarón y kanikama. PF: Alga empanizada en tempura con topping de tampico spicy, camarón tempura y siracha. Natural/Empanizado",
    "price": 210,
    "image": ""
  },
  {
    "id": 21,
    "name": "Roca Roll",
    "description": "PD: Kanikama, philadelfia y aguacate. PF: Con topping de camarón roca, bañados en salsa agridulce. Natural/Empanizado",
    "price": 210,
    "image": ""
  },
  {
    "id": 22,
    "name": "Culichi Roll",
    "description": "PD: Camarón tempura, philadelfia y aguacate. PF: Con topping tampico con tiras de otoro bañado en salsa de anguila. Natural/Empanizado",
    "price": 210,
    "image": ""
  },
]

const menuSaborCulichi = [
  {
    "name": ""
  }
]
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `


const menuList = document.querySelector('#menu');
menuList.innerHTML = '<div class="container-fluid"> <div class="row ">' + menuMidori.map(function (item) {
	return `  
            <div class="col col-md-6 col-lg-3 d-flex justify-content-center">
              <div class="card mb-2" style="width: 18rem;">
                <img src="/sushi1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.name} | \$${item.price}</h5>
                  <p class="card-text">${item.description}</p>
                </div>
              </div>
            </div>
          `;
}).join('') + '</div></div>';

setupCounter(document.querySelector('#counter'))
