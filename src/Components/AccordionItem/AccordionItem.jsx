import { useState } from "react";


const AccordionItem = ({ num, title, children,onOpen, curOpen }) => {

  const isOpen = num === curOpen

  const handleToggle = () => {
    onOpen(isOpen? null:num)
  };

  return (
    <div className={`itemm ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="titlee">{title}</p>
      <p className="iconn">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default AccordionItem;
