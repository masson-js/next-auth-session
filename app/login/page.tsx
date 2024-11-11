import { getSession } from "@/actions";

import { redirect } from "next/navigation";
import LoginForm from "../components/loginForm";

const LoginPage = async () => {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/");
  }
  return (
    <div className="login">
      <h1>Welcome to the LoginPage</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
