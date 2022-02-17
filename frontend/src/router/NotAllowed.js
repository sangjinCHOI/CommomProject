import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function EmailAuth() {
  const history = useHistory();
  const redirectLoginPage = () => {
    alert("유효하지 않은 사용자입니다.");
    history.push("/accounts/login");
  };
  useEffect(() => {
    redirectLoginPage();
  }, []);
  return <div></div>;
}
