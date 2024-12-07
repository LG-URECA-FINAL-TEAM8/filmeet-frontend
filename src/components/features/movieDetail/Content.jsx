import styled from "styled-components";
import { Rate } from "antd";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import SvgPencil from "../../../assets/svg/Pencil";
import useMovieCommentStore from "../../../store/moviedetail/useMovieCommentStore";
import MovieDetailModal from "../../common/modal/MovieDetailModal";


function Content() {
  const { openModal } = useMovieCommentStore();

  return (
    <>
      <S.ContentContainer>
        <S.MovieSection>
          <S.MoviePoster>
            <img src="https://via.placeholder.com/300x400" alt="Movie Poster" />
          </S.MoviePoster>
          <S.StatAndSynopsis>
            <S.StatSection>
              <S.StatItem>
                <S.RatingStars>
                  <StyledRate allowHalf />
                </S.RatingStars>
                <S.StatDescription>평가하기</S.StatDescription>
              </S.StatItem>
              <S.StatItem>
                <S.StatScore>
                  2.8
                  <S.StatDescription>평균 평점 (2,437명)</S.StatDescription>
                </S.StatScore>
              </S.StatItem>
              <S.IconContainer>
                <S.StatItemBox>
                  <SvgIcLikeFilled24 />
                  <S.StatDescription>좋아요</S.StatDescription>
                </S.StatItemBox>
                <S.StatItemBox>
                  <SvgPencil onClick={openModal} />
                  <S.StatDescription>코멘트</S.StatDescription>
                </S.StatItemBox>
              </S.IconContainer>
            </S.StatSection>
            <S.SynopsisSection>
              <S.SynopsisContent>
                자신의 진정한 힘을 미처 발견하지 못한 엘리피아(신시아 에리보) 자신을 진정한 본성을 아직 발견하지 못한 클리다(아리아나
                그란데) 전혀 다른 두 사람은 마법 같은 우정을 쌓아간다. 그러나 어느 날, 아바샤의 초대를 받아 에메랄드 시티로 가게
                되고 운명을 예상치 못한 위기와 모험으로 두 사람을 이끄는데… 마법 같은 운명의 시작, 누구나 세상을 놀라게 할 수 있어!
              </S.SynopsisContent>
            </S.SynopsisSection>
          </S.StatAndSynopsis>
        </S.MovieSection>
      </S.ContentContainer>

      {/* MovieDetailModal 렌더링 */}
      <MovieDetailModal />
    </>
  );
}

export default Content;

const S = {
  ContentContainer: styled.div`
    width: 100%;
    max-width: 1320px;
    margin: 0 300px;
    padding: 30px 0 60px;
    display: flex;
    justify-content: flex-start;
    background-color: ${(props) => props.theme.color.commentColor};
  `,

  MovieSection: styled.div`
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  `,

  MoviePoster: styled.div`
    width: 300px;
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  StatAndSynopsis: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,

  StatSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,

  StatItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  StatItemBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 80px;
    height: 80px;
    border-radius: 8px;
    text-align: center;

    svg {
      width: 50px;
      height: 50px;
    }
  `,

  IconContainer: styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
  `,

  StatScore: styled.div`
    font-size: 2rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontPink};
    text-align: center;
    margin: 0 0 7px;
  `,

  StatDescription: styled.div`
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
    margin-top: 4px;
    text-align: center;
  `,

  RatingStars: styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  `,

  SynopsisSection: styled.div`
    margin: 0 0 30px;
  `,

  SynopsisTitle: styled.h2`
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
    margin-bottom: 1rem;
  `,

  SynopsisContent: styled.p`
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
    line-height: 1.5;
  `,
};

const StyledRate = styled(Rate)`
  font-size: 2.2rem;
  color: ${(props) => props.theme.color.fontPink};

  .ant-rate-star {
    margin-right: 0.31rem;
  }

  .ant-rate-star-full {
    color: ${(props) => props.theme.color.fontPink};
  }
`;
