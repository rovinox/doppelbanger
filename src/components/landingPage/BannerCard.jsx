import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ItemRating from "../ui/ItemRating";

const BannerCard = ({ id, title, price, image, info, rating }) => {
  const imgPath = `../assets/img/${id}.jpg`;
  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/item/${id}`);
  const arr = [5, 5, 5];
  console.log("vv new", Math.ceil(2.5 % 5));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <img
            style={{ height: "100%", width: "100%" }}
            src={image}
            alt="cat"
          />
        </Grid>
        <Grid item xs={4}>
          <div className="banner-info">
            <h1>{title}</h1>
            <div className="banner-cost">${price}</div>
            <div className="banner-rating">
              <ItemRating rating={rating} />
            </div>
            <div className="banner-actions">
              <Button
                variant="contained"
                color="error"
                // onClick={() => {
                //   handleAddItemToCart(onQuant);
                //   onSetOrderedQuant(onQuant);
                // }}
                startIcon={<InfoIcon />}
              >
                More Info
              </Button>
            </div>
          </div>
          <Typography>{info}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerCard;
