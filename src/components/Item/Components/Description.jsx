import React from "react";
import { Box, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import QuantityButton from "./QuantityButton";

const Description = ({
  onQuant,
  onAdd,
  onRemove,
  handleAddItemToCart,
  onSetOrderedQuant,
}) => {
  return (
    <section className="description">
      <p className="pre">sneaker company</p>
      <h1>fall limited edition sneakers</h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer
      </p>
      <div className="price">
        <div className="main-tag">
          <p>$3,499.00 USD</p>
          <p>50% off</p>
        </div>
        <s>$4,999.00</s>
      </div>
      <div className="buttons">
        <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />

        <Button
          variant="contained"
          color="error"
          onClick={() => {
            handleAddItemToCart(onQuant);
            onSetOrderedQuant(onQuant);
          }}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to cart
        </Button>

        {/* <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          <CartIcon />
          add to cart
        </button> */}
      </div>
    </section>
  );
};

export default Description;
