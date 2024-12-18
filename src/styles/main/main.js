import styled from 'styled-components';

export const MainBody = styled.div`
  height: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.mainColor};
  padding: 1rem 20rem;
  color: ${(props) => props.theme.color.fontBlack};
`;

export const PostContainer = styled.div`
  width: calc(5 * (20% - 1rem) + 4rem);
  height: 24rem;
  display: flex;
  gap: 1rem;
  overflow: hidden;
  & > div {
    flex: 0 0 calc(20% - 1rem);
    max-width: calc(20% - 1rem);
  }
`;

// 그라데이션 오버레이 스타일
export const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,    /* 좌측 어두움 */
    rgba(0, 0, 0, 0.6) 20%,   /* 점점 밝아짐 */
    rgba(0, 0, 0, 0) 50%,     /* 중앙 투명 */
    rgba(0, 0, 0, 0.6) 80%,   /* 점점 어두워짐 */
    rgba(0, 0, 0, 0.8) 100%   /* 우측 어두움 */
  );
  pointer-events: none; /* 클릭 이벤트 방해 방지 */
`;

// Carousel 이미지 스타일
export const StyledCarouselImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: relative; /* 그라데이션 위에 이미지 배치 */
  z-index: 1;
  filter: brightness(0.9); /* 이미지 밝기 약간 조정 */
`;

// Carousel 컨테이너 스타일
export const StyledCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const SlideContainer = styled.div`
  position: relative; /* 그라데이션과 이미지 위치 기준 */
  width: 100%;
  height: 400px; /* Carousel 이미지 높이와 동일하게 설정 */
  overflow: hidden;
`;

export const TextOverlay = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  z-index: 3; /* 이미지와 그라데이션 위에 표시 */
  color: ${(props) => props.theme.color.fontWhite};
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;

export const MovieTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: ${(props) => props.theme.font.fontSuitBold};
`;

export const Subtitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

export const Content = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;
