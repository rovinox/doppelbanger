import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(async () => {
    try {
      // const docRef = doc(db, "items", itemId);
      // const docItem = await getDoc(docRef);

      //setItem({ id: docItem.id, ...docItem.data() });
      setItem({
        id: 1,
        title: "my pod",
        description: "amamzinf",
        price: 500,
        image:
          "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
        stock: 2,
      });
    } catch (err) {
      console.error(err);
    }
  }, [itemId]);

  return item ? <ItemDetail {...item} /> : <LoadingSpinner />;
};

export default ItemDetailContainer;
