import Navbar from "./Navbar";
export default function Header({ cartCount, toggleCartVisibility }) {
  return (
    <>
      <Navbar
        cartCount={cartCount}
        toggleCartVisibility={toggleCartVisibility}
      />
    </>
  );
}
