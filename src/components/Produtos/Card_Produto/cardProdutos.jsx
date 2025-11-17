import "./cardprodutos.css";
import imagem from "../../image/16.png";

const CardProdutos = ({ title, prece }) => {
  return (
    <div className="card-produto">
      <img src={imagem} alt={title} />
      <div className="card-corpo">
        <h3>{title}</h3>
        <span>{prece}</span>
        <button className="btn-comprar">COMPRAR</button>
      </div>
    </div>
  );
};

export default CardProdutos;
