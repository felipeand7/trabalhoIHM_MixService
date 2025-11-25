import './banner_principal.css'; 
import banner from '../image/Banner.png'; 

function Banner_Principal() {
  return (
    
    <section id="cabecalho">
      <div className="banner-content-wrapper" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-limitador"> 
          <button className="banner-slider-arrow left-arrow" aria-label="Slide anterior">
            &lt;
          </button>
          <button className="banner-slider-arrow right-arrow" aria-label="Próximo slide">
            &gt;
          </button>
       </div>
      </div>
    </section>
  );
}

export default Banner_Principal;