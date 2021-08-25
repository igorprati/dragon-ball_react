import { useEffect, useState } from "react"
import { Api } from "../Api/Api"
import * as S from './styled'

export default function ReadAll() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchApi(){
            let response = await Api.buildApiGetRequest(Api.readAllUrl())
            response = await response.json()
            setData(response.reverse())
            setLoading(false)
        }
        fetchApi()
    }, [])

    return (
        <>
        {loading === true ? (
            <h2>Carregando...</h2>
        ) : (<>
            <h1>Lista de todos os personagens:</h1>

            <S.Flex>
            {data.map((item) => (
                <S.Linked to={{ pathname: `view/${item._id}`, state: item}} key={item._id}>
                    <S.Card key={item._id}>
                        <S.Image src={item.url}/>
                        <S.Infos>
                            <S.Name>{item.name}</S.Name>
                            {/* <div>Poder: {item.poder}</div>
                            <div>Raça: {item.raca}</div>
                            <div>Saga: {item.saga}</div> */}
                        </S.Infos>
                    </S.Card>
                </S.Linked>
            ))}
            </S.Flex>
        </>)}
            
        </>
    )
}