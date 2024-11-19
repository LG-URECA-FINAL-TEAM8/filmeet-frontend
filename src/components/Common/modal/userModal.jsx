import React, { useState } from 'react';
import ReactModal from 'react-modal';
import useModalStore from '../../../store/modal/useModalStore'; 
import { lightTheme } from '../../../styles/themes';
import styled from 'styled-components';

ReactModal.setAppElement('#root');

function UserModal() {
  const { isModalOpen, closeModal } = useModalStore(); 


  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    content: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      width: '20rem',
      height: 'auto',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: `${lightTheme.defaulBoxShadow}`,
      overflow: 'auto'
    }
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="User Modal"
    >
      <Logo>로고</Logo>
      <LoginTitle>로그인</LoginTitle>
      <Container>
        <Input type="email" placeholder="이메일" />
        <Input type="password" placeholder='비밀번호'/>
        <LoginButton>로그인</LoginButton>
        <NoAccountText>계정이 없으신가요?<SignupLink>회원가입</SignupLink></NoAccountText>
      </Container>
      <Divider>
        <Line />
        <OrText>OR</OrText>
        <Line />
      </Divider> 
      <p>소셜로그인 아이콘</p>
    </ReactModal>
  );
}

export default UserModal;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2.125rem;
`;

const LoginTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2.125rem;
`;

const Input = styled.input`
  width: calc(100% - 3.25rem);              
  padding: 0.8rem;          
  margin-bottom: 0.75rem;      
  border: none;
  border-radius: 0.5rem;    
  background-color: #d3d3d3;
  font-size: 1rem;

  &::placeholder {
    color: #7a7a7a;
  }

  &:focus {
    outline: none;
    box-shadow:  0 0 0.3125rem rgba(0, 0, 0, 0.2); 
  }
`;
const LoginButton = styled.button`
  width: 91.5%;              
  padding: 0.8rem;          
  background-color: #FF3366; 
  color: white;            
  font-size: 1rem;
  font-weight: bold;        
  border: none;
  border-radius: 0.5rem; 
  margin-top: 0.35rem;
  cursor: pointer;

  &:hover {
    background-color: #E75480; 
  }
`;

const NoAccountText = styled.span`
  font-size: 0.9rem;
  color: #7a7a7a;
  margin-top: 1rem;
`;

const SignupLink = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: #ff69b4;
  margin-left: 0.3rem;
  cursor: pointer;
`;

const Divider = styled.section`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  width: 100%;
`;

const Line = styled.div`
  flex: 1;
  height: 0.0625rem;
  background-color: #d3d3d3;
`;

const OrText = styled.div`
  margin: 0 1rem;
  font-size: 0.9rem;
  color: #7a7a7a;
`;
