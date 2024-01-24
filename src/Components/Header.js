import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import AppContext from "../AppContext";

const Header = () => {
  const { state } = useContext(AppContext);

  const fetchQuantity = () => {
    // console.log(state);
    if (state.data !== undefined) {
      return state.data.length;
    } else {
      return 0;
    }
  };

  return (
    <>
      <header
        id="header"
        className="bg-info shadow "
      >
        <nav className="container py-4 d-flex align-items-center justify-content-between">
          <h1 className="fs-3 text-light">Cart Shop</h1>
          <div className="d-flex align-items-center gap-2">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-light"
            />
            <span className="bg-warning d-flex align-items-center justify-content-center rounded-circle cart-quantity-wrapper">
              <small className="cart-quantity-value">{fetchQuantity()}</small>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
