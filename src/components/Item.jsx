export function Item({ item, onDeleteItem, onToggleItem }) {
  function Delete() {
    onDeleteItem(item.id);
  }
  return (
    <>
      <li>
        <input
          type="checkbox"
          name=""
          id=""
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span
          style={
            item.packed
              ? { textDecoration: "line-through", color: "white" }
              : {}
          }
        >
          {`${item.quantity} ${item.description}`}
        </span>
      </li>
      <span className="delete" onClick={Delete}>
        ✖
      </span>
    </>
  );
}
