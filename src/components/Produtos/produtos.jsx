import './produtos.css'
import CardProdutos from './Card_Produto/cardProdutos.jsx'

const produtos = () => {
  return (
    <div id='produtos'>
      <div id='lista-produtos'>
        <CardProdutos title="CAMERA PRIMER" prece="R$100" />
        <CardProdutos title="CAMERA PRIMER" prece="R$100" />
        <CardProdutos title="CAMERA PRIMER" prece="R$100" />
        <CardProdutos title="CAMERA PRIMER" prece="R$100" />
      

      </div>
    </div>
  )
}

export default produtos