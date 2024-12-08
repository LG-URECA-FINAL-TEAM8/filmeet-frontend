import styled from "styled-components";
import { movieDetailData } from "../../../data/moviedetail";

function Banner() {
  const { title, subtitle, details, age, backgroundUrl } = movieDetailData.banner;

  return (
    <S.BannerContainer bgImage={backgroundUrl}>
      <S.BannerContentContainer>
        <S.BannerContent>
          <S.BannerTitle>{title}</S.BannerTitle>
          <S.BannerSubTitle>{title}</S.BannerSubTitle>
          <S.BannerSubContent>{details}</S.BannerSubContent>
          <S.BannerSubContent>{age}</S.BannerSubContent>
          <S.BannerSubTitle>{subtitle}</S.BannerSubTitle>
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
    display: flex;
    align-items: center;
    top: 45%;
    left: 0;
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
    font-size: 2rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontWhite};
  `,

  BannerSubTitle: styled.div`
    margin: 1rem 0 0;
    font-size: 0.8rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontWhite};
  `,

  BannerSubContent: styled.div`
    margin: 0.5rem 0 0;
    font-size: 0.8rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontWhite};
  `,
};


