import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
   return (
      <Container>
         <Form>
            <header>
               <h1>RocketMovies</h1>
               <p>Aplicação para acompanhar tudo que assistir.</p>
               <h2>Faça seu login</h2>
            </header>

            <Input
               type="user"
               placeholder="Nome"
               icon={FiUser}
            />

            <Input
               type="email"
               placeholder="E-mail"
               icon={FiMail}
            />

            <Input
               type="password"
               placeholder="Senha"
               icon={FiLock}
            />

            <Button title="Cadastrar" />

            <Link to="/">
               <FiArrowLeft/>
               Voltar para o login
            </Link>
         </Form>

         <Background />

      </Container>
   )

}