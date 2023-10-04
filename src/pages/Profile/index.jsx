import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


import { Link } from 'react-router-dom';

export function Profile() {
   return (
      <Container>
         <header>
            <Link to="/">
               <FiArrowLeft />
               Voltar
            </Link>
         </header>

         <Form>
            <Avatar>
               <img src="https://github.com/guipradocardoso.png" alt="Foto do usuário" />
               <label htmlFor="avatar"> <FiCamera />
                  <input id='avatar' type='file' />
               </label>
            </Avatar>

            <Input
               placeholder="Guilherme Prado"
               icon={FiUser}
               type="text"
            />

            <Input
               placeholder="guilhermeprado-09@hotmail.com"
               icon={FiMail}
               type="email"
            />

            <Input
               placeholder="Senha atual"
               icon={FiLock}
               type="password"
            />

            <Input
               placeholder="Nova Senha"
               icon={FiLock}
               type="password"
            />

            <Button title="Salvar" />
         </Form>

      </Container>

   )
}