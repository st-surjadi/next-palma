import { Metadata } from "next";
import { FC } from "react";
import LoginForm from "./_component/login-form";

export const metadata: Metadata = {
  title: 'Login',
}

const Page: FC = () => {
  return (
    <div className="bg-default">
      <LoginForm></LoginForm>
    </div>
  ) 
}

export default Page;