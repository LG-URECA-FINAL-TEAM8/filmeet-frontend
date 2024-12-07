import AdminHeaderComponent from '../../components/Common/header/AdminHeader';
import * as S from '../../styles/admin/adminlogin';

function AdminLoginPage() {
  const headertitle = '관리자 페이지';
  const logintitle = '관리자 로그인';
  const loginbutton = '로그인';
  const formfields = [
    { type: 'text', placeholder: '관리자 ID', required: true },
    { type: 'password', placeholder: '비밀번호', required: true },
  ];
  return (
    <S.AdminPage>
      <AdminHeaderComponent text = {headertitle} showButtons = {false}/>
      <S.AdminContent>
        <S.AdminTitle>{logintitle}</S.AdminTitle>
        <S.AdminForm>
        {formfields.map((field, index) => (
          <S.FormInputWrapper 
          key={index}
          type={field.type} 
          placeholder={field.placeholder} 
          required={field.required} 
        />
        ))}
          <S.SubmitButton>{loginbutton}</S.SubmitButton>
        </S.AdminForm>
      </S.AdminContent>
    </S.AdminPage>
  );
}

export default AdminLoginPage;
