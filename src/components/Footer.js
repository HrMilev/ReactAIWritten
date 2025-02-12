import React from "react";

function Footer({ items }) {
  if (items.length === 0)
    return <footer className="footer">Start adding stuff 🤹</footer>;

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  return (
    <footer className="footer">
      <em>
        👜 You have {totalItems} items on your list, and you already packed{" "}
        {packedItems} (
        {(packedItems / (totalItems === 0 ? 1 : totalItems)) * 100}
        )% of them.
      </em>
    </footer>
  );
}

export default Footer;
