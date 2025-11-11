import React from 'react';
// LINHA REMOVIDA: import Menu from './components/menu/menu.jsx'; 
import Banner_Principal from './components/banner_principal/banner_principal.jsx';

function App() {
  return (
    <div className="site-container">
      {/* O componente <Menu /> foi removido daqui */}
      
      {/* O Banner Principal continua */}
      <Banner_Principal /> 
      
      {/* Outros componentes do site virão aqui */}
    </div>
  );
}

export default App;