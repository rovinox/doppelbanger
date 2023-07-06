import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import ItemDescription from "./ItemDescription";
import ItemCount from "./ItemCount";

import SuccessSnackbar from "../ui/SuccessSnackbar";
import GoBackBtn from "../ui/GoBackBtn";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Gallery from "./Components/Gallery";
import Description from "./Components/Description";
import MobileGallery from "./Components/MobileGallery";

const ItemDetail = ({ id, title, description, price, stock, image }) => {
  const { addItemToCart, isInCart } = useContext(CartContext);
  const [showSuccessBar, setShowSuccessBar] = useState(false);
  const imgPath = `/assets/img/${id}.jpg`;
  const [quant, setQuant] = useState(1);
  const [orderedQuant, setOrderedQuant] = useState(0);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  const resetQuant = () => {
    setQuant(0);
    setOrderedQuant(0);
  };

  const handleAddItemToCart = (quantity) => {
    if (isInCart(id) || quantity === 0) return;

    addItemToCart({ id, title, price, quantity });
    setShowSuccessBar(true);
  };

  return (
    <>
      <section className="core">
        <Gallery />
        <MobileGallery />
        <Description
          onQuant={quant}
          onAdd={addQuant}
          onRemove={removeQuant}
          onSetOrderedQuant={setOrderedQuant}
          handleAddItemToCart={handleAddItemToCart}
        />
      </section>
      {showSuccessBar && <SuccessSnackbar message={"Product added to cart"} />}
    </>
  );
};

export default ItemDetail;
