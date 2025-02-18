import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LoadingSpinner from "../ui/LoadingSpinner";
import ItemList from "./ItemList";

import Container from "@mui/material/Container";

const ItemListCointainer = ({ name, items }) => {
  // const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId, term } = useParams();

  // useEffect(async () => {
  //   setLoading(true);

  //   const itemsRef = collection(db, "items");
  //   const q = categoryId
  //     ? query(itemsRef, where("category", "==", categoryId))
  //     : itemsRef;

  //   try {
  //     const { docs } = await getDocs(q);
  //     // const items = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //     //const items = demoData;

  //     if (term) {
  //       const filteredItems = items.filter((item) =>
  //         item.title.toLowerCase().includes(term.trim().toLowerCase())
  //       );
  //       setItems(filteredItems);
  //     } else {
  //       setItems(items);
  //     }

  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [categoryId, term]);
  const formatString = (string) => {
    return string.replaceAll(" ", "-").toLowerCase();
  };
  if (loading) return <LoadingSpinner text="Cargando productos..." />;

  return (
    <Container>
      <h1 style={{ padding: 50 }} id={formatString(name)}>
        {name}
      </h1>
      <ItemList items={items} />
    </Container>
  );
};
export default ItemListCointainer;
