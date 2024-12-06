import styled from "styled-components";

function Banner() {
  const bgImageUrl = 'https://via.placeholder.com/1920x400';

  return (
    <S.BannerContainer bgImage={bgImageUrl}>
      <S.BannerContentContainer>
        <S.BannerContent>
          <S.BannerTitle>트렁크</S.BannerTitle>
          <S.BannerSubTitle>트렁크</S.BannerSubTitle>
          <S.BannerSubContent>2024.로맨스/드라마/TV드라마</S.BannerSubContent>
          <S.BannerSubContent>한국.청불</S.BannerSubContent>
          <S.BannerSubTitle>한국 시리즈 인기 순위 1위</S.BannerSubTitle>
        </S.BannerContent>
      </S.BannerContentContainer>
    </S.BannerContainer>
  );
}

export default Banner;

const S = {
  BannerContainer: styled.div`
    width: 100%;
    height: 25rem;
    position: relative;
    background-color: #000;
    background-image: ${(props) => `url(${props.bgImage})`};
  `,

  BannerContentContainer: styled.div`
    position: absolute;
    width: 1320px;
    height: 172px;
    margin: 0 300px;
    top: 45%;
    left: 0;
    display: flex;
    align-items: center;
  `,

  BannerContent: styled.div`
    width: 230px;
    height: 172px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  `,

  BannerTitle: styled.h1`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 2rem;
    color: ${(props) => props.theme.color.fontWhite};
    margin: 0 0 0 0;
  `,

  BannerSubTitle: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontWhite};
    margin: 1rem 0 0;
  `,

  BannerSubContent: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontWhite};
    margin: 0.5rem 0 0;
  `,
};
