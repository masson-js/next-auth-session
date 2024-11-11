"use client";

import { login } from "@/actions";
import { useActionState } from "react";


const LoginForm = () => {
  const [state, formAction] = useActionState<any, FormData>(login, undefined);

  return (
    <form action={formAction}>
      <input type="text" name="username" required placeholder="username" />
      <input type="password" name="password" required placeholder="password" />
      <button>Login</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  );
};

export default LoginForm;