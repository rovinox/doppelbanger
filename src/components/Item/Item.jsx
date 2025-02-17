import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ItemDetail from "./ItemDetail";
import "./item.css";
const Item = ({ guid, name, prices, imageUrls, description, ...props }) => {
  console.log("props: ", props);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/item/${guid}`);
  const dummyImage =
    "https://cdn2.picryl.com/photo/1988/12/01/good-food-display-nci-visuals-online-bb10ce-1024.jpg";
  return (
    <>
      <ItemDetail open={open} handleClose={handleClose} />
      <Card
        onClick={handleClickOpen}
        className="animate__animated animate__fadeIn"
        raised
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="260"
            image={imageUrls?.large || dummyImage}
            alt={guid}
            onClick={handleClickOpen}
          />
          <CardContent sx={{ height: 200 }}>
            <Typography variant="h5" color="text.secondary">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          {/* <Button size="small" color="error" onClick={handleNavigation}>
            More Info
          </Button> */}
          <Typography variant="subtitle2" color="text.secondary" align="right">
            {`$${prices[0]}`}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default Item;
