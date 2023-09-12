import "./styles.css";

export default function AccordionItem({ text, title, num, curOpen, onOpen }) {
  const isOpen = curOpen === num;
  return (
    <div className={isOpen ? "open item" : "item"} onClick={() => onOpen(num)} key={num}>
      <p className="  number ">{num}</p>
      <p className=" text ">{title}</p>
      <p className="icon">{isOpen ? "+" : "-"}</p>
      {isOpen && (
        <div className="content-box">
          <ul>{text}</ul>
        </div>
      )}
    </div>
  );
}
