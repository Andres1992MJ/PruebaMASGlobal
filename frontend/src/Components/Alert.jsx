import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function DraggableDialog(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const homeBtn = (e) => {
    e.preventDefault();
    props.history.push("/");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        User Not Found
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter a valid ID</DialogContentText>
        <DialogContentText>
          If you don't know the ID, you can do a blank search to get a complete
          list of employees
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleClose}
          onClick={homeBtn}
          color="primary"
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default withRouter(DraggableDialog);
