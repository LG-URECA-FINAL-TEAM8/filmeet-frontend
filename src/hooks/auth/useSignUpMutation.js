import { useMutation } from '@tanstack/react-query';
import SignUp from '../../apis/auth/auth';

export const useSignUpMutation = (value) => {
  const signupMutate = useMutation({
    mutationFn: (data) => SignUp(data),
    onMutate: () => {
      console.log('요청 전');
    },
    onSuccess: (response) => {
      console.log(`${value} 성공:`, response);
    },
    onError: (error) => {
      console.error(`${value} 실패:`, error);
    },
    onSettled: () => {
      console.log('요청 완료');
    },
  });

  return signupMutate;
};
