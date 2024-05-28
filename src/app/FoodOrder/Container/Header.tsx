import { useApplicationContext } from "@/app/Context/FoodOrderContext";
import Avatar from "@mui/material/Avatar";
export default function Header() {
  const { menuItems } = useApplicationContext();
  const HeaderStyles = {
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      height: "25px",
      alignItems: "center",
    },
  };
  const getquantity = menuItems
    .map((el) => {
      return el.quantity;
    })
    .reduce((prev, curr) => {
      return (prev as number) + (curr as number);
    });
  const getTotalPrice = menuItems
    .map((el) => {
      return el.totalPrice;
    })
    .reduce((prev, curr) => {
      return (prev as number) + (curr as number);
    });
  return (
    <div>
      <h1>FOOD ORDER APPLICATION</h1>
      <div>
        {" "}
        <div>
          Order :
          {(getquantity as number) >= 1 && (
            <Avatar
              sx={{
                bgcolor: "#1769aa",
                cursor: "pointer",
                display: "inline-flex",
              }}
            >
              {getquantity}
            </Avatar>
          )}{" "}
        </div>
        <div>
          {" "}
          <h3>Total Price: &#x20b9;{getTotalPrice}</h3>
        </div>
      </div>
    </div>
  );
}
