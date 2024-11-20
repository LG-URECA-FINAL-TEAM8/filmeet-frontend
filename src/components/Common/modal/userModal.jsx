import React, { useState } from 'react';
import ReactModal from 'react-modal';
import useModalStore from '../../../store/modal/useModalStore'; 
import { lightTheme } from '../../../styles/themes';
import styled from 'styled-components';
import ModalInput from '../../Features/auth/ModalInput';
import Authbutton from '../../Features/auth/Authbutton';
import AuthTitle from '../../Features/auth/AuthTitle';
import AuthMessage from '../../Features/auth/AuthMessage';
import Authlink from '../../Features/auth/Authlink';
ReactModal.setAppElement('#root');

function UserModal() {
  const { isModalOpen, closeModal } = useModalStore(); 
  const DividerText = ['OR'];
 

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="User Modal"
    >
      
      <AuthTitle value = "로그인" />
      <Container>
        <ModalInput type="email" placeholder="이메일" />
        <ModalInput type="password" placeholder='비밀번호'/>
        <Authbutton value = "로그인" />
        <AuthWrapper>
          <AuthMessage value='계정이 없으신가요?' />
          <Authlink value='회원가입' />
        </AuthWrapper>
        
      </Container>
      <Divider>
        <Line />
        <Dividertext>{DividerText[0]}</Dividertext>
        <Line />
      </Divider> 
    </ReactModal>
  );
}

export default UserModal;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.section`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  width: 100%;
`;

const Line = styled.div`
  flex: 1;
  height: 0.1rem;
  background-color: ${lightTheme.fontGray};
`;

const Dividertext = styled.div`
  margin: 0 1rem;
  font-size: 0.9rem;
  color: ${lightTheme.fontGray};
  font-family:${lightTheme.fontSuitRegular};
`;

const AuthWrapper = styled.section`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;

  
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`;

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