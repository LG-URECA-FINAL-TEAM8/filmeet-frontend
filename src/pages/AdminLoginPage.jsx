import React from 'react';
import AdminHeaderComponent from '../components/Common/header/AdminHeader';
import {
  AdminPage,
  AdminContent,
  AdminTitle,
  AdminForm,
  FormGroup,
  FormInput,
  SubmitButton,
} from '../styles/admin/adminlogin';

function AdminLoginPage() {
  return (
    <AdminPage>
      <AdminHeaderComponent text="관리자 페이지" fontSize="1.5rem" top="50%" left="20%" />
      <AdminContent>
        <AdminTitle>관리자 로그인</AdminTitle>
        <AdminForm>
          <FormGroup>
            <FormInput type="id" placeholder="관리자 ID" required />
          </FormGroup>
          <FormGroup>
            <FormInput type="password" placeholder="비밀번호" required />
          </FormGroup>
          <SubmitButton type="submit">로그인</SubmitButton>
        </AdminForm>
      </AdminContent>
    </AdminPage>
  );
};

export default AdminLoginPage;
