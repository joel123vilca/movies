import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Content,Navigation } from 'react-mdl';
import Routes from './routes';
function App() {
  return (
    <div style={{height: '800px', position: 'relative'}}>
    <Layout fixedHeader fixedDrawer>
        <Header title="Videos">
        </Header>
        <Drawer title="Videos">
            <Navigation>
                <a href="#">Usuarios</a>
                <a href="/list">Peliculas</a>
                <a href="#">Turnos</a>
                <a href="#">Administradoes</a>
                <a>Perfil</a>
                <a>Cerrar Sesión</a>
            </Navigation>
        </Drawer>
        <Content>
            <Routes/>
        </Content>
    </Layout>
  </div>
  );
}

export default App;
