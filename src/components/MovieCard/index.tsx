import AvataHolder from '../../assets/placeholder.png';

import { 
  Container,
  Title,
  Footer,
  Avatar
 } from './styles';

export interface IMovieCardProps {
  avatar:string;
  titulo:string;
}

interface Props {
  data: IMovieCardProps;
}

export function MovieCard({data}:Props){
  return (
    <Container>
      <Footer>
        <Title>{data.titulo}</Title>

        <Avatar 
          source={{uri:data.avatar}}
          defaultSource={AvataHolder}
          resizeMode="contain"
        />
      </Footer>
    </Container>
  );
}