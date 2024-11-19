import styled from 'styled-components';
import { lightTheme } from '../themes';

export const AdminPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
`;

export const AdminContent = styled.main`
  margin-top: 3rem;
  text-align: center;
`;

export const AdminTitle = styled.h2`
  margin-top: 15rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'SUIT-Bold', sans-serif;
  color: #333333;
  border-bottom: 0.1rem solid #333333;
  width: 70%;
  display: inline-block;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;

export const AdminForm = styled.form`
  max-width: 23.375rem; 
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormInput = styled.input`
  width: 23.375rem; 
  height: 2.75rem; 
  padding: 0.5rem;
  font-size: 1rem;
  border: 0.1rem solid #cccccc;
  border-radius: 0.25rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #333333;
  }
`;

export const SubmitButton = styled.button`
  width: 23.375rem; 
  height: 3.375rem; 
  font-size: 1rem;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  font-family: 'SUIT-Regular', sans-serif;
  &:hover {
    background-color: #555555;
  }
`;
