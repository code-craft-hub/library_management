"use client"
import AuthForm from "@/components/AuthForm";
import { signUp } from "@/lib/action/auth";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const SignUp = async () => {
 
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={signUp}
    />
  );
};

export default SignUp;
