import { genreOptions } from '../../data/generedata';
import GenreButton from './GenereButton';
import styled from 'styled-components';

const GenereLabel = {
  title: '어떤 영화 장르를 좋아하나요?',
  subtitle: '좋아하는 장르를 최대 5개까지 골라주세요',
  label: '장르',
};

const GenreSection = () => {
  return (
    <S.GenereSectionContainer>
      <S.Title>{GenereLabel.title}</S.Title>
      <S.Subtitle>{GenereLabel.subtitle}</S.Subtitle>
      <S.Label>{GenereLabel.label}</S.Label>
      <S.ButtonGroupContainer>
        {genreOptions.map((option, index) => (
          <GenreButton key={index} id={option.id} label={option.label} emoji={option.emoji} />
        ))}
      </S.ButtonGroupContainer>
    </S.GenereSectionContainer>
  );
};

export default GenreSection;

const S = {
  GenereSectionContainer: styled.div`
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
    padding: 1.25rem;
    background: ${(props) => props.theme.color.mainColor};
    border-radius: 0.62rem;
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
  `,
  ButtonGroupContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  `,
  Title: styled.h1`
    font-size: 1.7rem;
    font-weight: ${(props) => props.theme.font.fontWeightBold};
    margin: 0 0 0.75rem 0;
    text-align: left;
    color: ${(props) => props.theme.color.fontDark};
    font-family: ${(props) => props.theme.font.fontSuitBold};
  `,
  Subtitle: styled.p`
    font-size: 1.2rem;
    margin: 0 0 1.25rem 0;
    text-align: left;
    color: ${(props) => props.theme.color.fontGray};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,
  Label: styled.h3`
    font-size: 1.2rem;
    font-weight: ${(props) => props.theme.font.fontWeightBold};
    margin: 0 0 0.62rem 0;
    text-align: left;
    color: ${(props) => props.theme.color.fontDark};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,
};
