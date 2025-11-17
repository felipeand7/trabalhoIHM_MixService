import Banner_Principal from "../components/Cabecalho/banner_principal.jsx";
import Menu from "../components/Menu/menu.jsx";
import BarraDesTaque from "../components/Barra_red/barra.js";
import Produtos from "../components/Produtos/produtos.jsx";
import Quem_Somos from "../components/Quem_somos/quem_somos.jsx";
import Grid_Servicos from "../components/Grid_servicos/grid_servicos.jsx";
function App() {
  return (
    <div className="site-container">
      <Menu />
      <Banner_Principal />
      <BarraDesTaque />
      <Quem_Somos />
      <Produtos />
      <Grid_Servicos />
    </div>
  );
}

export default App;
