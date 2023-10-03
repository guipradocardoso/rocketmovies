import { Container, Brand, Profile } from "./styles";
import { Input } from '../../components/Input';
import { FiSearch } from "react-icons/fi";


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
               <button>Sair</button>
            </div>

            <img src="https://github.com/guipradocardoso.png" alt="Imagem do usuário" />

         </Profile>








      </Container>
   )
}
