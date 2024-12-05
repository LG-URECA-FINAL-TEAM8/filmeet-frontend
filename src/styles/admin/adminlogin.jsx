import styled from 'styled-components';
import { lightTheme } from '../themes';

export function FormInputWrapper({ type, placeholder, required }) {
  return (
    <FormGroup>
      <FormInput type={type} placeholder={placeholder} required={required} />
    </FormGroup>
  );
}
export const AdminPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${lightTheme.mainColor};
  background-color: ${lightTheme.mainColor};
  position: relative;
`;

export const AdminContent = styled.main`
  margin-top: 3rem;
  text-align: center;
`;

export const AdminTitle = styled.h2`
  margin-top: 10rem;
  font-size: 1.5rem;
  font-weight: ${lightTheme.fontWeightBold};
  font-family: ${lightTheme.fontSuitBold};
  color: ${lightTheme.fontBlack};
  border-bottom: 0.1rem solid ${lightTheme.fontBlack};
  width: 70%;
  display: inline-block;
  padding-bottom: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;

export const AdminForm = styled.form`
  max-width: 23rem; 
  max-width: 23rem; 
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormInput = styled.input`
  width: 23rem; 
  height: 3rem; 
  padding: 1rem;
  width: 23rem; 
  height: 3rem; 
  padding: 1rem;
  font-size: 1rem;
  border: ${lightTheme.defaultBorder};
  border: ${lightTheme.defaultBorder};
  border-radius: 0.25rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: ${lightTheme.fontBlack};
    border-color: ${lightTheme.fontBlack};
  }
`;

export const SubmitButton = styled.button.attrs(function () {
  return {
    type: 'submit',
  };
})`
  width: 23rem; 
  height: 3rem; 
  font-size: 1rem;
  background-color: ${lightTheme.fontBlack};
  color: ${lightTheme.fontWhite};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: ${lightTheme.fontWeightBold};
  font-family: ${lightTheme.fontSuitRegular};
  font-weight: ${lightTheme.fontWeightBold};
  font-family: ${lightTheme.fontSuitRegular};
  &:hover {
    background-color: ${lightTheme.footerBlack};
    background-color: ${lightTheme.footerBlack};
  }
`;