function MenuItem({ image, name, price, id }) {
  return (
    <div className="menu-item" key={id}>
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="text">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default MenuItem;
