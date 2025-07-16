import "./Menu.css";
import { MenuList } from "../../../public/MenuList.js";
import MenuItem from "./components/MenuItem.jsx";

function Menu() {
  return (
    <main className="menu">
      <section className="container">
        <h1 className="menu-title">Our Menu</h1>
        <div className="menu-content">
          {MenuList.map((item, key) => (
            <MenuItem image={item.image} name={item.name} price={item.price} key={key} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Menu;
