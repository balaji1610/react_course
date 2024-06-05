import { TravelListType } from "@/app/Interface/TravelList";
import Checkbox from "@mui/material/Checkbox";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
interface OrderListProps {
  travelLists: TravelListType[];
  setTravelLists: Dispatch<SetStateAction<TravelListType[]>>;
}
export default function OrderList({
  travelLists,
  setTravelLists,
}: OrderListProps) {
  const OrderListstyle = {
    list: {
      display: "inline-flex",
      flexDirection: "row" as "row",
      margin: "10px",
    },
    sorting: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "space-around",
      height: "4rem",
      alignItems: "center",
      border: " 1px solid rgb(15 23 42 / .1)",
    },
  };

  const handleChange = (e: any, currentId: number) => {
    setTravelLists((prev) => {
      const updated = prev.map((el) => {
        return el.id == currentId ? { ...el, ispacked: e.target.checked } : el;
      });
      return updated;
    });
  };
  const removeItem = (currentId: number) => {
    setTravelLists((prev) => {
      const updateremove = prev.filter((el) => el.id != currentId);
      return updateremove;
    });
  };

  const sortingOptions = [
    "Sort by input Order",
    "Sort ASC Description",
    "Sort DSC Description",
    "Sort ASC Quantity",
    "Sort DSC Quantity",
    "Sort by packedStatus",
  ];
  const [sortBy, setSortBy] = useState("Sort by input Order");
  const handleOnSortby = (e: any) => {
    setSortBy(e.target.value);
  };

  let sortStatus;
  switch (sortBy) {
    case "Sort by input Order":
      sortStatus = travelLists.sort((a, b) => b.id - a.id);
      break;
    case "Sort ASC Description":
      sortStatus = travelLists.sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      break;
    case "Sort DSC Description":
      sortStatus = travelLists.sort((a, b) =>
        b.description.localeCompare(a.description)
      );
      break;
    case "Sort ASC Quantity":
      sortStatus = travelLists.sort((a, b) => a.quantity - b.quantity);
      break;
    case "Sort DSC Quantity":
      sortStatus = travelLists.sort((a, b) => b.quantity - a.quantity);
      break;
    case "Sort by packedStatus":
      sortStatus = travelLists.sort(
        (a, b) => Number(a.ispacked) - Number(b.ispacked)
      );
      break;
    default:
      break;
  }

  const clearList = () => {
    setTravelLists([]);
  };
  return (
    <>
      <div style={OrderListstyle.sorting}>
        <div>
          <Select
            name="Sort by input Order"
            value={sortBy}
            onChange={handleOnSortby}
            disabled={travelLists.length < 2}
          >
            {sortingOptions.map((el, index) => {
              return (
                <MenuItem key={index} value={el}>
                  {el}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <div>
          {" "}
          <Button
            variant="contained"
            onClick={clearList}
            disabled={travelLists.length < 1}
          >
            Clearing List
          </Button>
        </div>
      </div>

      {sortStatus?.map((el: any) => {
        const { id, quantity, description, ispacked } = el;
        return (
          <div key={id} style={OrderListstyle.list}>
            <div style={{ marginTop: "-7px" }}>
              {" "}
              <Checkbox
                checked={ispacked}
                onChange={(e) => handleChange(e, id)}
              />
            </div>
            <div>({quantity})-</div>
            <div>{description}-</div>
            <div
              style={{ cursor: "pointer" }}
              title="Remove"
              onClick={() => removeItem(id)}
            >
              <CancelIcon color="action" />
            </div>
          </div>
        );
      })}
    </>
  );
}
