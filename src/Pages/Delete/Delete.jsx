import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Api } from '../Api/Api';
import * as S from './styled'

export default function DeleteAll(props) {

    const history = useHistory();
    const [loading, setLoading] = useState(false)

    const item = props.location.state

    const gotoHome = () => {
        history.push('/');
    }

    const goToItem = () => {
        history.push(`/view/${item._id}`, item)
    }

    const clickHandler = async event => {
        setLoading(true)
        event.preventDefault();

        await Api.buildApiDeleteRequest(Api.deleteUrl(item._id))
        .catch( e => {
            console.error('Erro ao deletar o item: ' + e)
        })

        gotoHome();
    }

    return (
        <>
        {loading === true ? (
            <S.Title>Carregando...</S.Title>
        ) : (
            <>
                <S.Title>Deletar o personagem:  {item.name}</S.Title>
                <S.SubTitle>Atenção! Esta ação não poderá ser desfeita.</S.SubTitle>

                <S.ButtonArea>
                    <S.Button onClick={clickHandler} deletar>Deletar</S.Button>
                    <S.Button onClick={goToItem}>Voltar</S.Button>
                </S.ButtonArea>
            </>
        )}
            
        </>
    )
}