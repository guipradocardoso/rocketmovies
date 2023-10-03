import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
   return (
      <Container>
         <Form>
            <header>
               <h1>RocketMovies</h1>
               <p>Aplicação para acompanhar tudo que assistir.</p>
               <h2>Faça seu login</h2>
            </header>

            <Input
               type="email"
               placeholder="E-mail"
               icon={FiMail}
            />

            <Input
               type="current-password"
               placeholder="Senha"
               icon={FiLock}
            />

            <Button title="Entrar" />

            <Link to="/register">
               Criar conta
            </Link>
         </Form>

         <Background />

      </Container>
   )

}