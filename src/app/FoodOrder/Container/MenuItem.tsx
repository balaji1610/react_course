"use client";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Model from "@/app/FoodOrder/Components/Model";
import Additem from "@/app/FoodOrder/Container/AddItem";
import { useApplicationContext } from "@/app/Context/FoodOrderContext";
import { MenuListType } from "@/app/Interface/FoodOrderType";
export default function MenuItem() {
  const { open, setOpen, menuItems, setMenuItems, setSelectMenuList } =
    useApplicationContext();

  const addItem = (menu: MenuListType) => {
    setOpen(true);
    setSelectMenuList(menu);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const MenutItemstyles = {
    dishNameStyle: {
      display: "grid",
      gridTemplateColumns: "17rem 5rem",
    },
    add: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "center",
      height: "20px",
    },
    cardLayout: {
      paddingBottom: "20px",
    },
  };
  const categoryImage = (category: string) => {
    const categoryType = {
      categoryColor: "",
      categoryAbbreviation: "",
    };
    switch (category) {
      case "NON-VEG":
        categoryType.categoryColor = "#ff5722";
        categoryType.categoryAbbreviation = "NV";
        break;
      case "VEG":
        categoryType.categoryColor = "#4caf50";
        categoryType.categoryAbbreviation = "N";
        break;
      case "Beverages":
        categoryType.categoryColor = "#00bcd4";
        categoryType.categoryAbbreviation = "B";
        break;
      case "Snacks":
        categoryType.categoryColor = "#ec407a";
        categoryType.categoryAbbreviation = "S";
        break;
    }
    return categoryType;
  };

  return (
    <div>
      {menuItems.map((item, index) => {
        const { dishname, price, description, image, category } = item;
        return (
          <div key={index} style={MenutItemstyles.cardLayout}>
            <Card
              sx={{
                height: "9rem",
                display: "flex",
                border: "1px solid #cbd5e1",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 281, height: 140 }}
                image={image}
                alt="Live from space album cover"
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <div style={MenutItemstyles.dishNameStyle}>
                  <div>
                    <Typography component="div" variant="h5">
                      {dishname}
                    </Typography>
                  </div>
                  <div>
                    <Tooltip title={category}>
                      <Avatar
                        sx={{
                          bgcolor: categoryImage(category as string)
                            .categoryColor,
                          cursor: "pointer",
                        }}
                      >
                        {categoryImage(category as string).categoryAbbreviation}
                      </Avatar>
                    </Tooltip>
                  </div>
                </div>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  {description}
                </Typography>
                <Typography component="div" variant="h5">
                  &#x20b9;{price}{" "}
                </Typography>
                <div style={MenutItemstyles.add}>
                  <Button variant="contained" onClick={() => addItem(item)}>
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
      <div>
        <Model
          open={open}
          handleClose={handleClose}
          title="Add Items"
          component={<Additem />}
        />
      </div>
    </div>
  );
}
