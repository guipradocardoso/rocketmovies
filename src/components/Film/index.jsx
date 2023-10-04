import { Container } from './styles';
import { FiStar } from 'react-icons/fi';

export function Film(data, ...rest) {
   return (
      <Container {...rest}>
         <h3>{data.name}</h3>
         <FiStar />
         <p>{data.description}</p>
         <footer>
         </footer>

      </Container>
   )
}