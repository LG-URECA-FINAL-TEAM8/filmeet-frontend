import ErrorContent from "../../components/error/ErrorContent";
import { ErrorContainer, ErrorContentArea } from "../../styles/error/error";




const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorContentArea>
        <ErrorContent />
      </ ErrorContentArea>
    </ErrorContainer>
  );
};

export default ErrorPage;