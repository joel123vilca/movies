import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Content,Navigation } from 'react-mdl';
import Avatar from '@material-ui/core/Avatar';
import Routes from './routes';
function App() {
  return (
    <div style={{height: '800px', position: 'relative'}}>
    <Layout fixedHeader fixedDrawer>
        <Header title="Videos">
        <Avatar>A</Avatar><h6>ADMIN</h6>
        </Header>
        <Drawer title="Videos">
            <Navigation>
                <a>Usuarios</a>
                <a href="/">Peliculas</a>
                <a>Turnos</a>
                <a>Administradoes</a>
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
