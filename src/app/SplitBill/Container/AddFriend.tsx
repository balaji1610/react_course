import { useSplitBillContext } from "@/app/Context/SplitBillContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";
import noimage from "../../../../public/noimage.jpg";
import SplitBillInfo from "@/app/utilities/SplitBillInfo";
import { useState, useEffect } from "react";
export default function AddFriend() {
  const {
    initalFriends,
    setInitalFriends,
    setIsAddFriendOpen,
    setFriendLists,
    friendLists,
  } = useSplitBillContext();
  const [previewImage, setPreviewImage] = useState(noimage);
  const [isSelectedImage, setIsSelectedImage] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (initalFriends.name.length != 0 && initalFriends.image.length != 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [initalFriends]);

  const handleChange = (e: any, para: string) => {
    if (para == "name") {
      setInitalFriends((prev) => {
        return { ...prev, name: e.target.value };
      });
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as any);
        setInitalFriends((prev) => {
          return { ...prev, image: reader.result as any };
        });
      };
      reader.readAsDataURL(e.target.files[0]);
      setIsSelectedImage(false);
    }
  };

  const removeImage = () => {
    setIsSelectedImage(true);
    setPreviewImage(noimage);
    setInitalFriends((prev) => {
      return { ...prev, image: "" };
    });
  };

  const cancelClick = () => {
    setIsAddFriendOpen(false);
    setInitalFriends(SplitBillInfo);
  };

  const addClick = () => {
    setFriendLists((prev) => {
      return [...prev, { ...initalFriends, id: friendLists.length + 1 }];
    });
    setIsAddFriendOpen(false);
    setInitalFriends(SplitBillInfo);
  };

  const addFriendStyle = {
    modelLayout: {
      height: "25rem",
      width: "26rem",
      marginTop: "2rem",
    },
    uploadImageLayout: {
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "center",
      alignItems: "center",
      rowGap: "10px",
    },

    addButton: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "space-around",
      height: "80px",
      alignItems: "center",
    },
  };

  return (
    <div style={addFriendStyle.modelLayout}>
      <div style={addFriendStyle.uploadImageLayout}>
        <div>
          {" "}
          <TextField
            placeholder="Type a name"
            variant="outlined"
            name="name"
            value={initalFriends.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div>
          {" "}
          <Image
            src={previewImage}
            alt="Picture of the author"
            width={250}
            height={200}
          />
        </div>
        <div>
          {isSelectedImage ? (
            <Button variant="contained" component="label">
              Select Image
              <input
                type="file"
                hidden
                onChange={(e) => handleChange(e, "image")}
              />
            </Button>
          ) : (
            <Button variant="contained" color="error" onClick={removeImage}>
              Remove
            </Button>
          )}
        </div>
      </div>

      <div style={addFriendStyle.addButton}>
        <div>
          <Button
            variant="contained"
            color="success"
            onClick={addClick}
            disabled={isDisabled}
          >
            Add
          </Button>
        </div>
        <div>
          <Button variant="contained" color="error" onClick={cancelClick}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
