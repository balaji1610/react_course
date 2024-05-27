import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

interface ModelType {
  open: boolean;
  handleClose: () => void;
  title: string;
  component?: React.ReactNode;
}
export default function Model({
  open,
  handleClose,
  title,
  component,
}: ModelType) {
  return (
    <div>
      <Dialog open={open} maxWidth="xs" onClose={handleClose}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          style={{
            height: "1rem",
            textAlign: "center",
            padding: "19px",
            marginRight: "4px",
            fontFamily: "'Roboto'",
          }}
        >
          <h2 style={{ fontFamily: "'Roboto'" }}>{title}</h2>
        </DialogTitle>
        <DialogActions>
          <Grid container xs={12}>
            {component}
          </Grid>{" "}
        </DialogActions>
      </Dialog>
    </div>
  );
}
