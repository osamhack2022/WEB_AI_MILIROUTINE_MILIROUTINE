import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/Element";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const goToLogin = useCallback(() => {
    navigate("/auth/login");
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-4xl py-6 mt-10">회원가입</h2>
          <h4 className="text-black text-medium">
            밀리루틴에 오신 것을 환영합니다
          </h4>
          <div className="py-1 mb-10">
            <span className="text-xs text-gray-500">이미 가입하셨나요?</span>
            <span
              onClick={goToLogin}
              className="text-xs text-blue ml-1 cursor-pointer"
            >
              로그인
            </span>
          </div>
        </div>

        <div className="container max-w-xs">
          <Form label="아이디" type="text" />
          <Form label="비밀번호" type="password" />
          <Form label="이메일" type="email" />
          <Form
            label="닉네임"
            help="밀리루틴 사이트에서 표시될 이름입니다"
            type="text"
          />
        </div>
      </div>
    </>
  );
};
