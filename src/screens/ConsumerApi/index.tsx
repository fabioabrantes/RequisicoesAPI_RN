import {useState} from 'react';
import { FlatList } from 'react-native';

import { ButtonCustom } from '../../components/ButtonCustom';
import {MovieCard} from '../../components/MovieCard';

import { 
  Container,
  Header,
  Title,
  SubTitle,
  ContainerButton,
  Content,
  TitleList
} from './styles';

import {api} from '../../api';

interface IData{
  avatar:string;
  titulo:string;
}

export function ConsumerApi() {
  const [loading,setLoading] = useState(false);
  const [data, setData] = useState<IData[]>([]);

 
  async function handleSearchData(){
    
    try {
      setLoading(true);
      const response = await fetch('http://api.b7web.com.br/cinema');
      const data = await response.json() as IData[];
      setData(data);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }

    /* try {
      setLoading(true);
      const response = await api.get('/cinema');
      const data = response.data as IData[];
      setData(data);
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false);
    } */
  } 

  return (
    <Container>         
      <Header>
        <Title>Cinemas online</Title>
        <SubTitle>Faça sua busca dos filmes que deseje ver no cinema. </SubTitle>
      </Header>
      <ContainerButton>
        <ButtonCustom
          title="buscar Filmes"
          onPress={handleSearchData}
          loading={loading}
        />
      </ContainerButton>
      
      <Content>
          <TitleList>Listagem dos filmes</TitleList>

          <FlatList
            data={data}
            keyExtractor={(item)=>item.titulo}
            renderItem={({item})=>(
              <MovieCard data={item}/>
            )}
            removeClippedSubviews
            contentContainerStyle={{ paddingVertical:120, }}          
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={()=>(
              <SubTitle>Ainda não foi feita a busca {'\n'} dos filmes que deseje ver. </SubTitle>
            )}
          />
        </Content>
    </Container>
  );
}