import styled from 'styled-components';
function Banner() {
  return (
    <>
      <S.BannerContainer></S.BannerContainer>
    </>
  );
}

export default Banner;

const S = {
  BannerContainer: styled.div`
    width: 100%;
    height: 20rem;
  `,
};
