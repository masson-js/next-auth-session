"use client";

import { registration } from "@/actions";
import { useActionState } from "react";


const RegisterForm = () => {
  const [state, formAction] = useActionState<any, FormData>(registration, undefined);

  return (
    <form action={formAction}>
      <input type="text" name="username" required placeholder="username" />
      <input type="password" name="password" required placeholder="password" />
      <button>Registration</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  );
};

export default RegisterForm;