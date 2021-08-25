import * as S from './styled';
import instagram from './instagram.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';

export default function About() {
  return (
    <S.Center>
      <h1>Olá, meu nome é Igor!</h1>
      <S.Text>
        Estou aprendendo React e este é um projeto que visa realizar um CRUD
        (Create, Read, Update e Delete) de dados através de uma API de um
        back-end pronto.
      </S.Text>
      <S.Text>
        Acredito que a prática e melhora contínua é o caminho para o sucesso.
      </S.Text>
      <S.Text>Esse aqui de baixo sou eu:</S.Text>
      <S.Image src="https://media-exp1.licdn.com/dms/image/C5603AQHFiDzSpmtLKA/profile-displayphoto-shrink_800_800/0/1623656390510?e=1635379200&v=beta&t=79dHBRWqdE6FFv3HhONbAR53HhpntO6JZ-ZemzZayfk" />
      <S.Text>Minhas redes sociais:</S.Text>
      <S.IconBox>
        <a
          href="https://www.instagram.com/igorprati/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.Icons src={instagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/igorprati/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.Icons src={linkedin} />
        </a>
        <a
          href="https://github.com/igorprati"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.Icons src={github} />
        </a>
      </S.IconBox>
    </S.Center>
  );
}
