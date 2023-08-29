/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantityItem, increaseQuantityItem } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="rounded"
        onClick={() => dispatch(decreaseQuantityItem(pizzaId))}
      >
        -
      </Button>
      <p className="text-sm font-medium">{currentQuantity}</p>
      <Button
        type="rounded"
        onClick={() => dispatch(increaseQuantityItem(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
