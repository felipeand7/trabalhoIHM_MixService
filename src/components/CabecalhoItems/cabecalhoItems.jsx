import React from "react";
import "../CabecalhoItems/cabecalhoItems.css";

const CabecalhoProdutos = ({ title }) => {
  return (
    <div id="cabecalhoItems">
      <div className="cabecalho">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default CabecalhoProdutos;
