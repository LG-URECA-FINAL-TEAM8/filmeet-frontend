import { ageOptions } from '../../data/generedata';
import AgeButton from './AgeButton';
import styled from 'styled-components';

const AgeLabel = {
  title: '나이를 선택해주세요!',
  subtitle: '당신의 나이는?',
  label: '나이',
};

const AgeSection = () => {
  return (
    <S.AgeSectionContainer>
      <S.Title>{AgeLabel.title}</S.Title>
      <S.Subtitle>{AgeLabel.subtitle}</S.Subtitle>
      <S.Label>{AgeLabel.label}</S.Label>
      <S.ButtonGroupContainer>
        {ageOptions.map((option, id) => (
          <AgeButton key={id} label={option.label} emoji={option.emoji} value={option.value} />
        ))}
      </S.ButtonGroupContainer>
    </S.AgeSectionContainer>
  );
};

export default AgeSection;

const S = {
  AgeSectionContainer: styled.div`
    width: 100%;
    max-width: 60rem;
    height: 20rem;
    margin: 0 auto;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.color.mainColor};
    border-radius: 0.625rem;
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
  `,
  ButtonGroupContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.95rem;
    margin-top: 2.5rem;
  `,
  Title: styled.h1`
    font-size: 1.7rem;
    margin: 0 0 0.75rem 0;
    text-align: left;
    color: ${(props) => props.theme.color.fontDark};
    font-weight: ${(props) => props.theme.font.fontWeightBold};
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
    margin: 0 0 0.62rem 0;
    text-align: left;
    color: ${(props) => props.theme.color.fontDark};
    font-weight: ${(props) => props.theme.font.fontWeightBold};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,
};
