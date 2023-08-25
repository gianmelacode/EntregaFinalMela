import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const querycollection = collection(querydb, "products");
    const queryFiltro = category
      ? query(querycollection, where("category", "==", category))
      : querycollection;
    getDocs(queryFiltro).then((res) =>
      setProducts(res.docs.map((p) => ({ id: p.id, ...p.data() })))
    );
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <ItemList item={item} />
      </div>
    </div>
  );
};

export default ItemListContainer;
