import { mbtiOptions } from '../../data/generedata';
import MbtiButton from './MbtiButton';
import styled from 'styled-components';

const MbtiLabel = {
  title: '당신의 MBTI?',
  subtitle: 'MBTI를 선택해 주세요',
  label: 'MBTI',
};

const MbtiSection = () => {
  return (
    <S.MbtiSectionContainer>
      <S.Title>{MbtiLabel.title}</S.Title>
      <S.Subtitle>{MbtiLabel.subtitle}</S.Subtitle>
      <S.Label>{MbtiLabel.label}</S.Label>
      <S.ButtonGroupContainer>
        {mbtiOptions.map((option, id) => (
          <MbtiButton key={id} label={option.label} emoji={option.emoji} />
        ))}
      </S.ButtonGroupContainer>
    </S.MbtiSectionContainer>
  );
};

export default MbtiSection;

const S = {
  MbtiSectionContainer: styled.div`
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
    padding: 1.25rem;
    background: ${(props) => props.theme.color.mainColor};
    border-radius: 0.63rem;
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
    display: flex;
    flex-direction: column;
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
  ButtonGroupContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.9375rem;
    justify-content: center;
    justify-items: center;
    width: 70%;
    margin: 0 auto;
  `,
  Label: styled.h3`
    font-size: 1.2rem;
    font-weight: ${(props) => props.theme.font.fontWeightBold};
    margin: 0 0 0.625rem 0;
    text-align: left;
    color: ${(props) => props.theme.color.fontDark};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,
};
