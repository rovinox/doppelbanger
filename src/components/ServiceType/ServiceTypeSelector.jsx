import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ServiceTypeSelectorButtons from "./ServiceTypeSelectorButtons";
import AddressSelector from "./AddressSelector";

export default function ServiceTypeSelector() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [serviceType, setServiceType] = useState("");

  const handleServiceType = (event, newServiceType) => {
    handleClickOpen();
    setServiceType(newServiceType);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ServiceTypeSelectorButtons
        serviceType={serviceType}
        handleServiceType={handleServiceType}
        divider
      />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle sx={{ textAlign: "center" }} id="responsive-dialog-title">
          <ServiceTypeSelectorButtons
            serviceType={serviceType}
            handleServiceType={handleServiceType}
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <AddressSelector />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ backgroundColor: "#282c34", color: "white" }}
            onClick={handleClose}
            autoFocus
          >
            DONE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
