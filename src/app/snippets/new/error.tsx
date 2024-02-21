"use client";
interface ErorrPageProps {
  error: Error;
  rest: () => void;
}
const ErrorPage = ({ error }: ErorrPageProps) => {
  return <div>{error.message}</div>;
};
export default ErrorPage;
