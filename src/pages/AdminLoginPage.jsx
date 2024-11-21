import React from 'react';
import AdminHeaderComponent from '../components/Common/header/AdminHeader';
import {
  AdminPage,
  AdminContent,
  AdminTitle,
  AdminForm,
  FormInputWrapper,
  SubmitButton,
} from '../styles/admin/adminlogin';

function AdminLoginPage() {
  const headertitle = '관리자 페이지';
  const logintitle = '관리자 로그인';
  const loginbutton = '로그인';
  const formfields = [
    { type: 'text', placeholder: '관리자 ID', required: true },
    { type: 'password', placeholder: '비밀번호', required: true },
  ];
  return (
    <AdminPage>
      <AdminHeaderComponent text = {headertitle} showButtons = {false}/>
      <AdminContent>
        <AdminTitle>{logintitle}</AdminTitle>
        <AdminForm>
        {formfields.map((field, index) => (
          <FormInputWrapper 
          key={index}
          type={field.type} 
          placeholder={field.placeholder} 
          required={field.required} 
        />
        ))}
          <SubmitButton>{loginbutton}</SubmitButton>
        </AdminForm>
      </AdminContent>
    </AdminPage>
  );
}

export default AdminLoginPage;
