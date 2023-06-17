export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItem = items.length;
  const numOfPacked = items.filter((items) => items.packed).length;
  const percentagePacked = Math.round((numOfPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "you got everything ready to go ✈"
          : `You have ${numItem} items on your list and you are already packed
        ${numOfPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
