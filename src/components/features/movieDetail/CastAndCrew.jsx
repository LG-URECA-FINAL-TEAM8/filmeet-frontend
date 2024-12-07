import styled from "styled-components";

function CastAndCrew() {
  const castList = [
    { name: "서현진", role: "출연 | 노은지", image: "https://via.placeholder.com/50" },
    { name: "공유", role: "출연 | 한정원", image: "https://via.placeholder.com/50" },
    { name: "정윤하", role: "출연", image: "https://via.placeholder.com/50" },
    { name: "김동원", role: "출연", image: "https://via.placeholder.com/50" },
    { name: "전혜진", role: "출연", image: "https://via.placeholder.com/50" },
    { name: "조이건", role: "출연", image: "https://via.placeholder.com/50" },
    { name: "홍우진", role: "출연", image: "https://via.placeholder.com/50" },
    { name: "양대혁", role: "출연", image: "https://via.placeholder.com/50" },
    { name: "주민경", role: "출연", image: "https://via.placeholder.com/50" },
    { name: "최윤지", role: "출연", image: "https://via.placeholder.com/50" },
  ];

  return (
    <S.CastAndCrewContainer>
      <S.SectionTitle>출연 / 제작</S.SectionTitle>
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
    max-width: 1320px;
    margin: 0 auto;
    padding: 2rem 0;
  `,

  SectionTitle: styled.h2`
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
    margin-bottom: 1.5rem;
  `,

  CastList: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  `,

  CastItem: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,

  CastImage: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    object-fit: cover;
  `,

  CastDetails: styled.div`
    display: flex;
    flex-direction: column;
  `,

  CastName: styled.div`
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
  `,

  CastRole: styled.div`
    font-size: 0.875rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
  `,
};
