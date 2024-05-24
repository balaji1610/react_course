import Grid from "@mui/material/Grid";
import Header from "@/app/FoodOrder/Container/Header";
import MenuItem from "@/app/FoodOrder/Container/MenuItem";
export default function FoodOrderHomePage() {
  const FoodOrderStyles = {
    headerStyle: {
      height: "10rem",
    },
    menuItemStyle: {
      height: "25rem",
    },
  };
  return (
    <div>
      <div style={FoodOrderStyles.headerStyle as React.CSSProperties}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          {" "}
          <Grid>
            {" "}
            <Header />
          </Grid>
        </Grid>
      </div>

      <div style={FoodOrderStyles.menuItemStyle as React.CSSProperties}>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <MenuItem />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </div>
  );
}
