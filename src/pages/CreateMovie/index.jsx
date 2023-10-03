import { Link } from "react-router-dom";
import { FiPlus, FiSearch } from "react-icons/fi";


import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Textarea } from "../../components/Textarea";
import { ButtonBack } from "../../components/ButtonBack";
import { MovieGender } from "../../components/MovieGender";

import { Container, Form } from "./styles";
import { Section } from "../../components/Section";


export function CreateMovie() {
   return (
      <Container>
         <Header />

         <main>
            <Form>
               <header>
                  <ButtonBack />
                  <h2>Novo filme</h2>
               </header>



               <div>
                  <Input placeholder="Título" />
                  <Input placeholder="Sua nota (de 0 a 5)" />
               </div>

               <Textarea placeholder="Observações" />
               
               <Section title="Marcadores">
                  <div>
                     <MovieGender value="React" />
                     <MovieGender isNew placeholder="Novo marcador" />
                  </div>
               </Section>



            </Form>
         </main>
      </Container>
   )
}

