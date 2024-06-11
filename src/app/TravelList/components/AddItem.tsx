import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TravelListInfo from "@/app/utilities/TravelList";
import { TravelListType } from "@/app/Interface/TravelList";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import OrderList from "@/app/TravelList/components/OrderList";
import { useState } from "react";
export default function AddItem() {
  const [travelLists, setTravelLists] = useState<TravelListType[]>([]);
  const [singleList, setSingleList] = useState<TravelListType>(TravelListInfo);

  const handleOnchange = (e: any) => {
    const { name, value } = e.target;
    setSingleList((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const AddItemClick = () => {
    setTravelLists((prev) => {
      return [...prev, { ...singleList, id: travelLists.length + 1 }];
    });
    setSingleList(TravelListInfo);
  };
  const addItemStyle = {
    addItem: {
      display: "grid",
      gridTemplateColumns: "auto auto auto auto",
      justifyContent: "space-around",
      height: "6rem",
      alignContent: "center",
      border: "1px solid red",
    },
  };

  const options = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <>
      <div style={addItemStyle.addItem}>
        <div>
          <h3 style={{ display: "inline" }}>What do you need for your trip?</h3>
        </div>
        <div>
          {" "}
          <Select
            value={singleList.quantity}
            onChange={handleOnchange}
            name="quantity"
          >
            {options.map((el) => {
              return (
                <MenuItem key={el} value={el}>
                  {el}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <div>
          {" "}
          <TextField
            name="description"
            value={singleList.description}
            placeholder="Add Your Item"
            onChange={handleOnchange}
          />
        </div>
        <div>
          {" "}
          <Button
            variant="contained"
            onClick={AddItemClick}
            disabled={singleList.description.length <= 3}
          >
            Add
          </Button>
        </div>
      </div>
      <div>
        <OrderList travelLists={travelLists} setTravelLists={setTravelLists} />
      </div>
    </>
  );
}
