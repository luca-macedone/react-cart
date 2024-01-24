import React, { useReducer } from "react";
import "./App.css";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import Header from "./Components/Header";
import CartTable from "./Components/CartTable";
import CheckoutSection from "./Components/CheckoutSection";

const list = [
  {
    id: 0,
    name: "AirPods",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1613472793/react-api-course/cartShop/airpods_iev6qf.jpg",
    price: 8999,
    quantity: 1,
  },
  {
    id: 1,
    name: "iPhone 11 Pro 256Gb Memory",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1613472793/react-api-course/cartShop/phone_jjra8o.jpg",
    price: 59999,
    quantity: 1,
  },
  {
    id: 2,
    name: "Sony S 720",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1613472793/react-api-course/cartShop/camera_hnj3fq.jpg",
    price: 92999,
    quantity: 1,
  },
  {
    id: 3,
    name: "Sony Playstation 4 Pro White Edition",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1613472793/react-api-course/cartShop/playstation_n7txan.jpg",
    price: 39999,
    quantity: 1,
  },
  {
    id: 4,
    name: "Logitech G-Series Gaming Mouse",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1613472794/react-api-course/cartShop/mouse_xil0pz.jpg",
    price: 4999,
    quantity: 1,
  },
  {
    id: 5,
    name: "Amazon Echo Dot 3rd Generation",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1613472793/react-api-course/cartShop/alexa_blrhqd.jpg",
    price: 2999,
    quantity: 1,
  },
];

function App() {
  const defaultState = {
    data: list,
  };

  const [state, dispatch] = useReducer(AppReducer, defaultState);

  // console.log("app => ", state);
  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <Header />
        {state.data.length > 0 && (
          <>
            <CartTable />
            <CheckoutSection />
          </>
        )}
        {state.data.length === 0 && (
          <>
            <h2 className="fw-bold text-capitalize text-center py-5 my-5">
              Nessun prodotto nel carrello
            </h2>
          </>
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
