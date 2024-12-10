import styled from 'styled-components';

export const S = {
  AuthBody: styled.div`
    width: 20rem;
    height: auto;
    max-height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    background-color: ${(props) => props.theme.color.mainColor};
    color: ${(props) => props.theme.color.fontBlack};
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
    margin: 10rem auto;
  `,
  Container: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Divider: styled.section`
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
    width: 100%;
  `,

  Line: styled.div`
    flex: 1;
    height: 0.1rem;
    background-color: ${(props) => props.theme.color.fontGray};
  `,

  Dividertext: styled.div`
    margin: 0 1rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  AuthWrapper: styled.section`
    text-align: center;
    margin-top: 1rem;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  `,
  SocialWrapper: styled.div`
    display: flex;
    justify-content: center;

    svg {
      width: 3rem;
      height: 2rem;
      padding: 0.2rem;
      cursor: pointer;
    }
  `,
};
