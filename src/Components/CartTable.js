import { useContext } from "react";
import AppContext from "../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartTable = () => {
  const { state, dispatch } = useContext(AppContext);

  const deleteItem = (_id) => {
    try {
      dispatch({ type: "DELETE_ITEM", payload: { id: _id } });
    } catch (e) {
      console.error(e);
    }
  };

  const incrementQuantity = (_id) => {
    try {
      dispatch({ type: "INCREMENT_ITEM_QUANTITY", payload: { id: _id } });
    } catch (e) {
      console.error(e);
    }
  };

  const decrementQuantity = (_item) => {
    try {
      if (_item.amount - 1 > 0) {
        dispatch({
          type: "DECREMENT_ITEM_QUANTITY",
          payload: { id: _item.id },
        });
      } else {
        dispatch({ type: "DELETE_ITEM", payload: { id: _item.id } });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const formattedPrice = (price) => {
    return (price / 100).toFixed(2);
  };

  return (
    <>
      <table className="container my-5">
        <thead className="border border-0 border-bottom">
          <tr className="">
            <th className="p-2 text-center">Item</th>
            <th className="p-2 ps-5">Name</th>
            <th className="p-2 ">Qty</th>
            <th className="p-2 text-center">Price</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {state.data.map((item) => {
            return (
              <tr
                key={item.id}
                className=""
              >
                <td className="p-2 d-flex align-items-center justify-content-center">
                  <div className="shadow p-1 cart-img-wrapper text-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </div>
                </td>
                <td className="ps-5">{item.name}</td>
                <td className="d-inline-flex flex-column align-items-center justify-content-center">
                  <button
                    type="button"
                    className="btn py-1 px-2"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    <FontAwesomeIcon
                      className="text-success"
                      icon={faPlus}
                    />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    className="btn py-1 px-2"
                    onClick={() => decrementQuantity(item)}
                  >
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faMinus}
                    />
                  </button>
                </td>
                <td className="text-center">{formattedPrice(item.price)} €</td>
                <td className="text-center">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-danger"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CartTable;
