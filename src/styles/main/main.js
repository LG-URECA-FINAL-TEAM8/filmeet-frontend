import styled from 'styled-components';

export const MainBody = styled.body`
  height: 300vh;
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

// Carousel 컨테이너 스타일
export const StyledCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
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
    rgba(0, 0, 0, 0.3) 0%,   /* 좌측 그라데이션 시작 (살짝 어두움) */
    rgba(0, 0, 0, 0) 15%,    /* 중간으로 갈수록 투명 */
    rgba(0, 0, 0, 0) 85%,    /* 중간으로 갈수록 투명 */
    rgba(0, 0, 0, 0.3) 100%  /* 우측 그라데이션 끝 (살짝 어두움) */
  );
`;


// Carousel 이미지 스타일
export const StyledCarouselImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.9);
`;
