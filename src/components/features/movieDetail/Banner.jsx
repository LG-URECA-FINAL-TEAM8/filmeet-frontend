import styled from "styled-components";

function Banner() {
  const bannerData = {
    title: "트렁크",
    subtitle: "한국 시리즈 인기 순위 1위",
    details: "2024.로맨스/드라마/TV드라마",
    age: "한국.청불",
    backgroundUrl: "https://via.placeholder.com/1920x400",
  };

  return (
    <S.BannerContainer bgImage={bannerData.backgroundUrl}>
      <S.BannerContentContainer>
        <S.BannerContent>
          <S.BannerTitle>{bannerData.title}</S.BannerTitle>
          <S.BannerSubTitle>{bannerData.title}</S.BannerSubTitle>
          <S.BannerSubContent>{bannerData.details}</S.BannerSubContent>
          <S.BannerSubContent>{bannerData.age}</S.BannerSubContent>
          <S.BannerSubTitle>{bannerData.subtitle}</S.BannerSubTitle>
        </S.BannerContent>
      </S.BannerContentContainer>
    </S.BannerContainer>
  );
}

export default Banner;

const S = {
  BannerContainer: styled.div`
    position: relative;
    width: 100%;
    height: 25rem;
    background-image: ${(props) => `url(${props.bgImage})`};
  `,

  BannerContentContainer: styled.div`
    position: absolute;
    top: 45%;
    left: 0;
    display: flex;
    align-items: center;
    width: 82.5rem;
    height: 10.75rem;
    margin: 0 18.75rem;
  `,

  BannerContent: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 14.37rem;
    height: 10.75rem;
  `,

  BannerTitle: styled.h1`
    margin: 0;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 2rem;
    color: ${(props) => props.theme.color.fontWhite};
  `,

  BannerSubTitle: styled.div`
    margin: 1rem 0 0;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontWhite};
  `,

  BannerSubContent: styled.div`
    margin: 0.5rem 0 0;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontWhite};
  `,
};

