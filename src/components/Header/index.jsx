import { Container, Brand, Profile } from "./styles";
import { Input } from '../../components/Input';
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";


export function Header() {
   return (
      <Container>
         <Brand>
            <h1>RocketMovies</h1>
         </Brand>

         <Input placeholder="Pesquisar pelo título" icon={FiSearch} />

         <Profile to="/profile">
            <div>
               <strong>Guilherme Prado</strong>
               <Link to="/SignIn">Sair</Link>
            </div>

            <img src="https://github.com/guipradocardoso.png" alt="Imagem do usuário" />

         </Profile>








      </Container>
   )
}
