import React, { useState, useEffect } from "react";
import ItemListCointainer from "../Item/ItemListCointainer";
import LandingBanner from "./LandingBanner";
import demoData from "./bannerData.json";

export default function LandingPage() {
  const [items, setItems] = useState(null);

  useEffect(async () => {
    // const itemsRef = collection(db, "items");
    // const q = categoryId
    //   ? query(itemsRef, where("category", "==", categoryId))
    //   : itemsRef;

    try {
      const items = demoData;
      console.log("items: ", items);

      setItems(items);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div style={{ marginTop: 50 }}>
      <LandingBanner items={items} />
      <ItemListCointainer />
    </div>
  );
}
