import styled from "styled-components";
import { movieDetailData } from "../../../data/moviedetail";

function CastAndCrew() {
  const castTitle = {
    title: "출연 / 제작",
  }
  const castList = movieDetailData.castAndCrew;

  return (
    <S.CastAndCrewContainer>
      <S.SectionTitle>{castTitle.title}</S.SectionTitle>
      <S.CastList>
        {castList.map((cast, index) => (
          <S.CastItem key={index}>
            <S.CastImage src={cast.image} alt={cast.name} />
            <S.CastDetails>
              <S.CastName>{cast.name}</S.CastName>
              <S.CastRole>{cast.role}</S.CastRole>
            </S.CastDetails>
          </S.CastItem>
        ))}
      </S.CastList>
    </S.CastAndCrewContainer>
  );
}

export default CastAndCrew;

const S = {
  CastAndCrewContainer: styled.div`
    width: 100%;
    max-width: 82.5rem;
    height: 21rem;
    margin: 4rem 0 0 19rem;
    padding: 0 0 2.5rem;
  `,

  SectionTitle: styled.header`
    margin: 0 0 1rem;
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
  `,

  CastList: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    height: 17rem;
  `,

  CastItem: styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
  `,

  CastImage: styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    object-fit: cover;
  `,

  CastDetails: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,

  CastName: styled.div`
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
  `,

  CastRole: styled.div`
    margin: 0.2rem 0 0;
    font-size: 0.8rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
  `,
};

