import Logo from '@/assets/Logo.svg';

export const Footer = () => {
    return (
        <footer className="w-screen flex flex-col items-center justify-center bg-gray-300">
            <div className="container max-w-screen-xl py-16">
                <img src={Logo} className="mb-8" />

                <div>
                    <p className="text-black mb-2 text-sm">
                        2022 OSAM 군장병 해커톤 밀리루틴 팀의 프로젝트입니다.
                    </p>
                    <p className="text-black text-sm">
                        프로젝트 개발과 관련된 자세한 내용은 <a className='font-bold underline decoration-1' href='https://github.com/osamhack2022/WEB_AI_MILIROUTINE_MILIROUTINE'>MILIROUTINE Github Repository</a>를 참고해주세요.
                    </p>
                </div>
            </div>
        </footer>
    );
};
