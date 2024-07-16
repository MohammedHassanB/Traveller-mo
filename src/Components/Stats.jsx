export default function Stats({ items }) {
  const numItems = items.length;
  const numitemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numitemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      {!items.length ? (
        <p className="stats">Are you ready 🎒</p>
      ) : (
        <em>
          {!percentage
            ? "Hurry up and start packing 🕔"
            : percentage === 100
            ? "You got everything! Ready to go ✈️"
            : `🧳 You have ${numItems} items on your list, and you already packed
        ${numitemsPacked} (${percentage}%)`}
        </em>
      )}
    </footer>
  );
}
