import { useApplicationContext } from "@/app/Context/FoodOrderContext";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
export default function Additem() {
  const { selectMenuList, setOpen, setMenuItems } = useApplicationContext();

  const [updatedCart, setUpdateCart] = useState<any>(selectMenuList);

  useEffect(() => {
    updatedCart;
  }, [setUpdateCart, updatedCart]);

  const cancelClick = () => {
    setOpen(false);
  };
  const addCartClick = () => {
    setMenuItems((prev) => {
      const updated = prev.map((el) => {
        return el.id === updatedCart?.id ? updatedCart : el;
      });
      return updated;
    });
    setOpen(false);
  };
  const addQuantity = (type: string) => {
    let currentQuantity;
    let currentTotalPrice;
    if (type == "increase") {
      setUpdateCart((prev: any) => {
        currentQuantity = prev?.quantity + 1;
        currentTotalPrice = (prev?.quantity + 1) * prev?.price;
        return {
          ...prev,
          quantity: currentQuantity,
          totalPrice: currentTotalPrice,
        };
      });
    } else {
      setUpdateCart((prev: any) => {
        currentQuantity = prev?.quantity - 1;
        currentTotalPrice = (prev?.quantity - 1) * prev?.price;
        return {
          ...prev,
          quantity: currentQuantity,
          totalPrice: currentTotalPrice,
        };
      });
    }
  };
  const AddItemstyle = {
    modelLayout: {
      height: "15rem",
      width: "26rem",
      marginTop: "2rem",
    },
    addItemLayout: {
      display: "grid",
      gridTemplateColumns: "15rem auto",
    },
    counterLayout: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "space-around",
      height: "70px",
      alignItems: "center",
    },
    priceLayout: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "space-around",
    },
    addCartLayout: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "space-evenly",
      height: "83px",
      alignItems: "flex-end",
    },
  };
  return (
    <div style={AddItemstyle.modelLayout}>
      <div>
        <div style={AddItemstyle.addItemLayout}>
          {" "}
          <div>
            {" "}
            <h3>
              {selectMenuList?.dishname} - &#x20b9;{selectMenuList?.price}
            </h3>
          </div>
          <div style={AddItemstyle.counterLayout}>
            <div>
              {" "}
              <Button
                variant="contained"
                size="small"
                onClick={() => addQuantity("increase")}
              >
                +
              </Button>
            </div>
            <div>
              <h2> {updatedCart?.quantity}</h2>
            </div>
            <div>
              {" "}
              <Button
                variant="contained"
                size="small"
                onClick={() => addQuantity("decrease")}
              >
                -
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div style={AddItemstyle.priceLayout}>
        <div>
          <h4>Total Price :</h4>
        </div>
        <div>
          {" "}
          <h3 style={{ color: "red" }}>
            &#x20b9;&nbsp;{updatedCart?.totalPrice}
          </h3>
        </div>
      </div>

      <div style={AddItemstyle.addCartLayout}>
        <div>
          {" "}
          <Button variant="contained" color="error" onClick={cancelClick}>
            Cancel
          </Button>
        </div>
        <div>
          {" "}
          <Button variant="contained" onClick={addCartClick}>
            Add Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
