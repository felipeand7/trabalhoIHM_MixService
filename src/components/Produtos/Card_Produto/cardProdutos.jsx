import "./cardprodutos.css"
import imagem from "../../image/16.png"

const cardProdutos = ({title, prece}) => {
  return (
    <div className="card-produto"> 
      <img src={imagem} alt="" />
    <div className="informacoes">
      <h2>{title}</h2>
      <span>{prece}</span>
    </div>
    <button>Comprar</button>
    </div>
  )
}

export default cardProdutos