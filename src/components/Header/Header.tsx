import logo from '../../assets/logo.png';

import { Container, Content } from './HeaderStyles';

export default function Header() {
  
  return (
        <Container>
          <Content>
            <figure>
              <img src={logo} alt="logo" width='100' height='40' />
            </figure>
            
            <span>Desafio Marvel-API</span>
            
            <a href="https://github.com/isakielsouza/marvel">
              <img src='https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png' alt="logo" width='80' height='50' />
            </a>
          </Content>
        </Container>
  );
}