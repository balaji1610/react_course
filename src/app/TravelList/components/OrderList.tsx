import { TravelListType } from "@/app/Interface/TravelList";
import Checkbox from "@mui/material/Checkbox";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { Dispatch, SetStateAction } from "react";
import { json } from "stream/consumers";
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
  return (
    <>
      {travelLists.map((el) => {
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
