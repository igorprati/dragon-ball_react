import { useHistory } from 'react-router-dom'
import { Api } from '../Api/Api';
import * as S from './styled'

export default function DeleteAll() {

    const history = useHistory();

    const gotoHome = () => {
        history.push('/');
    }

    const clickHandler = async event => {
        event.preventDefault();

        await Api.buildApiDeleteRequest(Api.deleteAllUrl());

        gotoHome();
    }

    return (
        <>
            <S.Title>Deletar todos os personagens?</S.Title>
            <S.SubTitle>Atenção! Esta ação não poderá ser desfeita.</S.SubTitle>

            <S.ButtonArea>
                <S.Button onClick={clickHandler} deletar>Deletar</S.Button>
                <S.Button onClick={gotoHome}>Voltar</S.Button>
            </S.ButtonArea>
        </>
    )
}