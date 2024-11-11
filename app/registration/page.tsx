import { getSession } from "@/actions";

import { redirect } from "next/navigation";
import RegisterForm from "../components/registerForm";


const RegistrationPage = async () => {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/");
  }
  return (
    <div className="login">
      <h1>Welcome to the Register page</h1>
      <RegisterForm />
    </div>
  );
};

export default RegistrationPage;
