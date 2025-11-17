import { useRef, useCallback } from "react";
import "./produtos.css";
import CardProdutos from "./Card_Produto/cardProdutos.jsx";
import seta from "../image/setas/esquerdo.png";

const Produtos = () => {
  const listaRef = useRef(null);

  const scroll = useCallback((direction) => {
    const container = listaRef.current;
    if (!container) return;

    const card = container.querySelector(".card-produto");
    const baseWidth = 250;
    const gap = 16;

    const cardWidth = card?.offsetWidth || baseWidth;
    const amount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="produtos" aria-label="Lista de produtos em carrossel">
      <div className="carrossel-produtos">
        <button
          type="button"
          className="seta seta-esquerda"
          onClick={() => scroll("right")}
          aria-label="Próximos produtos"
        >
          <img src={seta} alt="Seta para a direita" />
        </button>

        <div
          id="lista-produtos"
          ref={listaRef}
          role="list"
          aria-label="Produtos disponíveis"
        >
          <CardProdutos
            title="Câmera de Segurança Externa Dupla"
            prece="R$ 100,00"
          />
          <CardProdutos
            title="Câmera de Segurança Externa Dupla"
            prece="R$ 100,00"
          />
          <CardProdutos
            title="Câmera de Segurança Externa Dupla"
            prece="R$ 100,00"
          />
          <CardProdutos
            title="Câmera de Segurança Externa Dupla"
            prece="R$ 100,00"
          />
          <CardProdutos
            title="Câmera de Segurança Externa Dupla"
            prece="R$ 100,00"
          />
        </div>
        <button
          type="button"
          className="seta seta-direita"
          onClick={() => scroll("left")}
          aria-label="Produtos anteriores"
        >
          <img src={seta} alt="Seta para a esquerda" />
        </button>
      </div>
    </section>
  );
};

export default Produtos;
