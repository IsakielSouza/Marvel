import logo from '../../assets/logo.png';
import { Container, Content } from './HeaderStyles';

export default function Header() {
  
  return (
        <Container>
          <Content>
            <figure>
              <img src={logo} alt="logo" width='80' height='70' />
            </figure>
          </Content>
        </Container>
  );
}