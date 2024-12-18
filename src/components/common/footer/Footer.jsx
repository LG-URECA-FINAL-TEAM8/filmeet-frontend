import styled from 'styled-components';
import { footerText } from '../../../data/footer/text';
import { useRatingTotal } from '../../../apis/footer/query';
function Footer() {
  const { data: ratingCount } = useRatingTotal();
  let count = ratingCount?.data;
  return (
    <>
      <S.Footer>
        <section className="footerMain"> {`지금까지 ★${count || 0}개의 평가가 쌓였어요.`}</section>
        <section className="footerLink">
          <a href="/policy">{footerText.footerLink}</a>
        </section>
      </S.Footer>
    </>
  );
}

export default Footer;

const S = {
  Footer: styled.footer`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 9rem;
    background-color: ${(props) => props.theme.color.footerBlack};
    -webkit-font-smoothing: antialiased;
    

    .footerMain {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 1.2rem;
      padding: 1rem 0;
      font-family: ${(props) => props.theme.font.fontSuitRegular};
      color: ${(props) => props.theme.color.fontPink};
    }

    .footerLink {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 1rem 0;
      font-size: 0.8rem;
      font-family: ${(props) => props.theme.font.fontSuitRegular};
      color: ${(props) => props.theme.color.fontGray};

      a {
        text-decoration: none;
        color: ${(props) => props.theme.color.fontGray};

        &:hover,
        &:visited,
        &:focus,
        &:active {
          text-decoration: none;
          color: ${(props) => props.theme.color.fontGray};
        }
      }
    }
  `,
};
