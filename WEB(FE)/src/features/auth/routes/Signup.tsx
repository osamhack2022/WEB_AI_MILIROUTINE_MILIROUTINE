<<<<<<< HEAD
import { useCallback, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "@/components/Element";
import { Category } from "@/components/Element/Category";
import { PreferMiliroutine } from "@/components/Element/PreferMiliroutine";
import { ReactComponent as Check_green } from "@/assets/check_green.svg"
import Logo from "@/assets/Logo.png";


export const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  const goToLogin = useCallback(() => {
    navigate("/auth/login");
  }, []);

  const goToNext = useCallback(() => {
    setStep(1);
  }, []);

  const onChangeUsername = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setUsername(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setPassword(e.target.value);
  }, []);

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setEmail(e.target.value);
  }, []);

  const onChangeNickname = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setNickname(e.target.value);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-4xl py-6 mt-10">
            {step === 0 ? "회원가입" : "처음이신가요?"}
          </h2>
          <h4 className="text-black text-medium">
            {step === 0
              ? "밀리루틴에 오신 것을 환영합니다"
              : "추가 정보를 입력해주세요"}
          </h4>
          {step === 0 ? (
            <div className="py-1 mb-10">
              <span className="text-xs text-gray-500">이미 가입하셨나요?</span>
              <span
                onClick={goToLogin}
                className="text-xs text-blue ml-1 cursor-pointer"
              >
                로그인
              </span>
            </div>
          ) : null}
        </div>

        <div className="container max-w-xs mb-24">
          {step === 0 ? (
            <>
              <Form
                label="아이디"
                type="text"
                value={username}
                onChange={onChangeUsername}
              />
              <Form
                label="비밀번호"
                type="password"
                value={password}
                onChange={onChangePassword}
              />
              <Form
                label="이메일"
                type="email"
                value={email}
                onChange={onChangeEmail}
              />
              <Form
                label="닉네임"
                help="밀리루틴 사이트에서 표시될 이름입니다"
                type="text"
                value={nickname}
                onChange={onChangeNickname}
              />
            </>
          ) : null}

          <div className="flex justify-center items-center mt-20">
            {step === 0 ? (
              <Button label="다음 단계로" onClick={goToNext} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
=======



export const SignupMorePage = () => {
  return (
    <div>

      <header>
        <img src={Logo} className="mx-auto block"></img>
      </header>

      <div className="text-center mt-24">
        <p className="text-4xl font-bold ">처음이신가요?</p>
        <p className="mt-3">추가 정보를 입력해주세요</p>
      </div>


      <div className="text-center mt-24">
        <span className="text-2xl font-bold mr-36">관심 카테고리 설정</span>
        <span className="text-green ">최소 1개 이상</span>
        {/* 최소1개이상을 왼쪽으로 옮겨야 하는데 잘 안됨. + svg도 2 */}
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 p-5">
          <div className="p-1"><Category label="학습" /></div>
          <div className="p-1"><Category label="운동" /></div>
          <div className="p-1"><Category label="모닝루틴" /></div>
          <div className="p-1"><Category label="경제" /></div>
          <div className="p-1"><Category label="자기관리" /></div>
          <div className="p-1"><Category label="진로" /></div>
          <div className="p-1"><Category label="취미" /></div>
          <div className="p-1"><Category label="정서" /></div>
          <div className="p-1"><Category label="건강" /></div>
        </div>
      </div>


      <div className="text-center mt-24">
        <p className="text-2xl font-bold">선호하는 밀리루틴을 체크해주세요</p>
        <p className="text-gray-500 text-sm mt-2">회원가입 후 [좋아요한 밀리루틴] 탭에서 변경할 수 있습니다</p>
      </div>

      <div className="mt-24 grid grid-cols-3 gap-y-1 place-items-center">
        <div><PreferMiliroutine label="하루 10번 감사하기" /></div>
        <div><PreferMiliroutine label="백준 한 문제 풀기" /></div>
        <div><PreferMiliroutine label="물 5컵 마시기" /></div>
        <div><PreferMiliroutine label="아침 유산소 운동 하기" /></div>
        <div><PreferMiliroutine label="블로그에 글 포스팅하기" /></div>
        <div><PreferMiliroutine label="세줄 일기 적기" /></div>
        <div><PreferMiliroutine label="헬스장 가기" /></div>
        <div><PreferMiliroutine label="15분 일찍 기상하기" /></div>
        <div><PreferMiliroutine label="명상하기" /></div>
        <div><PreferMiliroutine label="매일 한 페이지씩 독서하기" /></div>
        <div><PreferMiliroutine label="수능특강 진도나가기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
        <div><PreferMiliroutine label="30분 공부하기" /></div>
      </div>


      <div className="text-center mb-24">
        <button className="bg-orange text-3xl font-bold text-white-200 rounded-full w-48 h-20 mt-32">
          계정 생성
        </button>
      </div>


    </div>
  )
>>>>>>> 210f8f4 (Feat : 카테고리 컴포넌트, 선호하는 밀리루틴 컴포넌트 제작 및 auth/signup/more 페이지 90% 완성)
};

