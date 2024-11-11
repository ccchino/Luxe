import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products = [
  {
    id: "Grt223",
    name: "Remera Memories",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 26241,
    stock: 10,
    image: "/img/remera 1.webp",
    category: "remeras"
  },
  {
    id: "Grt224",
    name: "Remera Dream",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 26241,
    stock: 4,
    image: "/img/remera 2.webp",
    category: "remeras"
  },
  {
    id: "Grt225",
    name: "Remera Net Vanta",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 26241,
    stock: 4,
    image: "/img/remera 3.webp",
    category: "remeras"
  },
  {
    id: "Grt226",
    name: "Remera Surf Snow Boxy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 26241,
    stock: 9,
    image: "/img/remera 4.webp",
    category: "remeras"
  },
  {
    id: "Hff556",
    name: "Pantalon Art 545",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 20000,
    stock: 5,
    image: "/img/pantalon 1.webp",
    category: "pantalones"
  },
  {
    id: "Hff557",
    name: "Pantalon Art 586",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 20000,
    stock: 17,
    image: "/img/pantalon 2.webp",
    category: "pantalones"
  },
  {
    id: "Hff558",
    name: "Pantalon Art 552",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 20000,
    stock: 6,
    image: "/img/pantalon 3.webp",
    category: "pantalones"
  },
  {
    id: "Hff559",
    name: "Pantalon Art 582",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 20000,
    stock: 9,
    image: "/img/pantalon 4.webp",
    category: "pantalones"
  },
  {
    id: "Wre442",
    name: "Zapatillas Cloudfield",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 800,
    stock: 2,
    image: "/img/zapatillas-m.jpg",
    category: "zapatillas"
  },
  {
    id: "Wre443",
    name: "Zapatillas Space",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 820,
    stock: 6,
    image: "/img/zapatillas-h.jpg",
    category: "zapatillas"
  },
]

const seedProducts = () => {
  const productsRef = collection(db, "products")
  products.map(( { id, ...dataProduct } )=> {
    addDoc(productsRef, dataProduct)
  })

  console.log("productos subidos")
  return
}

seedProducts()

const db = getFirestore()

export default db;