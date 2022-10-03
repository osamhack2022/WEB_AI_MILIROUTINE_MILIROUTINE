import Logo from "@/assets/Logo.png";

export const Footer = () => {
  return (
    <footer className="w-screen h-48 flex flex-col items-center justify-center bg-gray-300">
      <div className="container mx-xl">
        <img src={Logo} className="mb-8" />

        <div>
          <p className="text-black mb-2 text-sm">
            2022 OSAM 군장병 해커톤 밀리루틴 팀의 프로젝트입니다.
          </p>
          <p className="text-black text-sm">
            프로젝트 개발과 관련된 자세한 내용은 MILIROUTINE Github Repository를
            참고해주세요.
          </p>
        </div>
      </div>
    </footer>
  );
};
