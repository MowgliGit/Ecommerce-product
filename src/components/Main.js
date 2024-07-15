import Gallery from "./Gallery";
import Item from "./Item";
export default function Main({ addToCart }) {
  return (
    <div className="mainContainer">
      <Gallery />
      <Item addToCart={addToCart} />
    </div>
  );
}
