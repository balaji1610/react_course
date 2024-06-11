import { Button } from "@mui/material";
import Model from "@/app/FoodOrder/Components/Model";
import AddFriend from "@/app/SplitBill/Container/AddFriend";
import { useSplitBillContext } from "@/app/Context/SplitBillContext";
import FriendLists from "@/app/SplitBill/Container/FriendLists";
import { useState } from "react";
export default function SplitBill() {
  const { isAddFriendOpen, setIsAddFriendOpen, friendLists } =
    useSplitBillContext();

  const splitBillStyle = {
    header: {
      textAlign: "center",
      borderBottom: "1px solid red",
      textTransform: "uppercase",
    },
    addFriend: {
      textAlign: "right",
      padding: "5px",
    },
  };

  const handleClose = () => {
    setIsAddFriendOpen(false);
  };

  const addFriend = () => {
    setIsAddFriendOpen(true);
  };

  return (
    <>
      {" "}
      <div style={splitBillStyle.header as React.CSSProperties}>
        <Header />
      </div>
      <div style={splitBillStyle.addFriend as React.CSSProperties}>
        <Button variant="contained" onClick={addFriend}>
          Add Friend
        </Button>
      </div>
      <Model
        open={isAddFriendOpen}
        handleClose={handleClose}
        title="Add Friend"
        component={<AddFriend />}
      />
      <FriendLists />
    </>
  );
}

function Header() {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
