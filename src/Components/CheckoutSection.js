import { useContext } from "react";
import AppContext from "../AppContext";

const CheckoutSection = () => {
  const { state } = useContext(AppContext);

  const formattedTotalPrice = (data) => {
    let price = 0;
    data.forEach((item) => {
      // console.log(
      //   item.price,
      //   item.quantity,
      //   (item.price * item.quantity) / 100
      // );
      price += (item.price * item.quantity) / 100;
      // console.log(price);
    });
    return price.toFixed(2);
  };

  return (
    <>
      <section className="container d-flex align-items-center justify-content-end ">
        <div className="border p-3 checkout-wrapper text-center">
          <h1 className="fs-3">Carrello</h1>
          <hr />
          <h2>{formattedTotalPrice(state.data)} €</h2>
          <hr />
          <button
            type="button"
            className="btn btn-info text-light text-uppercase px-4 rounded-pill fw-semibold "
          >
            Checkout
          </button>
        </div>
      </section>
    </>
  );
};

export default CheckoutSection;
