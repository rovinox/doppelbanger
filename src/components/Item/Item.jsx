import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./item.css";
const Item = ({ guid, name, prices, imageUrls }) => {
  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/item/${guid}`);
  const dummyImage =
    "https://cdn2.picryl.com/photo/1988/12/01/good-food-display-nci-visuals-online-bb10ce-1024.jpg";
  return (
    <Card className="animate__animated animate__fadeIn" raised>
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image={imageUrls?.large || dummyImage}
          alt={guid}
          onClick={handleNavigation}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" noWrap>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button size="small" color="error" onClick={handleNavigation}>
          More Info
        </Button>
        <Typography variant="subtitle2" color="text.secondary" align="right">
          {`$${prices[0]}`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Item;
