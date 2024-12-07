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
    { name: "최윤지", role: "출연", image: "https://via.placeholder.com/50" },
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
    height: 338px;
    max-width: 1320px;
    margin: 60px 0 0 300px;
    padding: 0 0 40px;
  `,

  SectionTitle: styled.header`
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
    margin: 0 0 20px;
  `,

  CastList: styled.div`
    height: 268px;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 한 행에 4명씩 배치 */
    gap: 0.5rem;
  `,

  CastItem: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
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
    justify-content: center;
    width: 100%;
    border-bottom: ${(props) => props.theme.font.borderDefault};
    padding-bottom: 0.5rem;
  `,

  CastName: styled.div`
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
  `,

  CastRole: styled.div`
    font-size: 0.8rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
    margin: 4px 0 0;
  `,
};
