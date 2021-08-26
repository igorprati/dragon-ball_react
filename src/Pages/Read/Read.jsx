import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import BarPower from '../../Components/BarPower/BarPower';

export default function Read(props) {
  const item = props.location.state;

  const history = useHistory();

  const deleteHandler = async (e) => {
    // PORQUE EU USO ASYNC ?
    e.preventDefault();
    history.push(`/delete/${item._id}`, item); // COMO FUNCIONA O HISTORY ?
  };

  const updateHandler = () => {
    history.push(`/update/${item._id}`, item);
  };

  return (
    <>
      <S.Box>
        <S.Img src={item.url} alt={item.name} />
        <S.Info>
          <h2>Name: <S.Text>{item.name}</S.Text></h2>
          <BarPower poder={item.poder}/>
          <h2>Saga: <S.Text>{item.saga}</S.Text></h2>
          <h2>Raça: <S.Text>{item.raca}</S.Text></h2>
        </S.Info>
        <S.BoxButton>
          <S.Button onClick={deleteHandler} delete>Deletar Personagem</S.Button>
          <S.Button onClick={updateHandler}>Editar Personagem</S.Button>
        </S.BoxButton>
      </S.Box>
    </>
  );
}
