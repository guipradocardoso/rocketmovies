import { Container, Content } from "./styles";
import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Film } from "../../components/Film";


export function Home() {
   return (
      <Container>
         <Header />
         <header>
            <h2>Meus Filmes</h2>
            <Button title="Adicionar Filme" icon={FiPlus} />
         </header>

         <Content>
            <Film data={{
               name: "Star Wars",
               description: "Um filme de Star Wars",
            }}>

            </Film>

         </Content>





      </Container >
   )
}