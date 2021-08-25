import { useState } from 'react'
import * as S from './styled'
import { Api } from '../Api/Api';
import { useHistory } from 'react-router';

export default function Update(info) {

    console.log(info)



    const [name, setName] = useState(info.location.state.name);
    const [url, setUrl] = useState(info.location.state.url);
    const [raca, setRaca] = useState(info.location.state.raca);
    const [saga, setSaga] = useState(info.location.state.saga);
    const [poder, setPoder] = useState(info.location.state.poder);

    const history = useHistory();

    const item = {
        name: name,
        url: url,
        raca: raca,
        saga: saga,
        poder: poder
    }

    const submitHandler = async event => {
        event.preventDefault()

        const request = await Api.buildApiUpdateRequest(Api.updateUrl(info.location.state._id), item) 
        .catch(e => {
            console.error('Erro ao tentar adicionar o item ao banco: ', e)
        })

        const result = await request.json();
        const id = result._id

        history.push(`/view/${id}`, result)
    }

    return (
        <>
        <S.Form onSubmit={submitHandler}>
            <S.FormTitle>Cadastrar um personagem</S.FormTitle>
            <S.Input type='text' placeholder='Nome do personagem' onChange={e => setName(e.target.value)} value={name} required/>
            <S.Input type='text' placeholder='URL da imagem' value={url} onChange={e => setUrl(e.target.value)}  required/>
            <S.Select type='text' placeholder='Raça' onChange={e => setRaca(e.target.value)} value={raca} required>
                <S.Option value="" hidden>Selecione uma raça</S.Option>
                <S.Option value="Terráqueo">Terráqueo</S.Option>
                <S.Option value="Sayajin">Sayajin</S.Option>
                <S.Option value="Android">Android</S.Option>
                <S.Option value="Majin">Majin</S.Option>
                <S.Option value="Namekuseijin">Namekuseijin</S.Option>
                <S.Option value="Raça do Freeza">Raça do Freeza</S.Option>
                <S.Option value="Ogro">Ogro</S.Option>
                <S.Option value="Demonio">Demonio</S.Option>
            </S.Select>
            <S.Select type='text' placeholder='Saga' onChange={e => setSaga(e.target.value)} value={saga} required>
                <S.Option value="" hidden>Selecione uma saga</S.Option>
                <S.Option value="Saga Sayajin">Saga Sayajin</S.Option>
                <S.Option value="Saga Freeza">Saga Freeza</S.Option>
                <S.Option value="Saga Garlic">Saga Garlic</S.Option>
                <S.Option value="Saga Android">Saga Android</S.Option>
                <S.Option value="Saga Majin Boo">Saga Majin Boo</S.Option>
            </S.Select>
            <S.Input type='number' min='0' placeholder='Poder de luta' onChange={e => setPoder(e.target.value)} value={poder} required/>
            <S.Button type='submit' secondary>Editar personagem</S.Button>
        </S.Form>
        </>
    )
}
