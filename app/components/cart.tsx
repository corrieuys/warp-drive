import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Car } from "../types";
import { formatCurrency } from "../utils/currency-formatter";

function CartOffcanvas({
  show,
  handleClose,
  cart,
  setCart,
}: {
  show: boolean;
  handleClose: () => void;
  cart: Car[];
  setCart: (car: Car[]) => void;
}) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 && (
            <p className=" text-slate-400">Your cart is empty</p>
          )}
          {cart.map((car, index) => {
            return (
              <div
                key={index}
                className="p-2 rounded-md border-b-2 border-slate-20 flex flex-row justify-between hover:bg-slate-100"
              >
                <div>
                  <h3>
                    {car.manufacturer} {car.model}
                  </h3>
                  <p>{formatCurrency(Number(car.price), "ZAR")}</p>
                </div>
                <div>
                  <Button
                    variant="danger"
                    onClick={() => {
                      const updatedCart = [...cart];
                      updatedCart.splice(index, 1);
                      setCart(updatedCart);
                    }}
                  >
                    X
                  </Button>
                </div>
              </div>
            );
          })}
          <hr />
          <div className="flex flex-row justify-between">
            {cart.length > 0 && (
              <>
                <h4>Total:</h4>
                <h4>
                  {formatCurrency(
                    cart.reduce((prev, curr) => {
                      return prev + Number(curr.price);
                    }, 0),
                    "ZAR"
                  )}
                </h4>
              </>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartOffcanvas;
