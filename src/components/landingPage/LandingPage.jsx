import React, { useState, useEffect } from "react";
import ItemListCointainer from "../Item/ItemListCointainer";
import LandingBanner from "./LandingBanner";
import demoData from "../../mockData/responseData.json";
import NavMenuItems from "../NavMenuGroup/NavMenuItems";
import Navbar from "../NavBar/NavBar";
export default function LandingPage() {
  const [items, setItems] = useState(null);

  useEffect(async () => {
    // const itemsRef = collection(db, "items");
    // const q = categoryId
    //   ? query(itemsRef, where("category", "==", categoryId))
    //   : itemsRef;

    try {
      //const items = demoData;
      console.log("items: ", demoData.paginatedMenuItems.menus[0].groups);

      setItems(demoData.paginatedMenuItems.menus[0].groups);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <LandingBanner />
      {items &&
        items.map((item) => <ItemListCointainer key={item.guid} {...item} />)}
    </div>
  );
}
