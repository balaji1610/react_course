import Grid from "@mui/material/Grid";
import { useSplitBillContext } from "@/app/Context/SplitBillContext";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
export default function FriendLists() {
  const { friendLists } = useSplitBillContext();

  const friendListStyle = {
    cardnameLayout: {
      display: "flex",
      height: "59px",
      alignItems: "center",
    },

    cardMainLayout: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "space-around",
      backgroundColor: "rgba(15, 23, 42, .1)",
      width: "16rem",
      padding: "1rem",
      borderRadius: "14px",
      margin: "2rem",
    },
  };
  return (
    <div>
      <Grid container xs={12}>
        <Grid xs={4}></Grid>
        <Grid xs={4}>
          {friendLists.map((el) => {
            const { id, name, image } = el;
            return (
              <div key={id} style={friendListStyle.cardMainLayout}>
                <div>
                  <Avatar
                    alt="Remy Sharp"
                    src={image}
                    sx={{ width: 64, height: 64 }}
                  />
                </div>
                <div style={friendListStyle.cardnameLayout}>
                  <Typography variant="h6" gutterBottom>
                    {name}
                  </Typography>
                </div>
              </div>
            );
          })}{" "}
        </Grid>
        <Grid xs={4}></Grid>
      </Grid>
    </div>
  );
}
