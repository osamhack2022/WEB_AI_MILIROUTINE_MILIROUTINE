import { Button } from "@/components/Element";

export const Jumbotron = () => {
  return (
    <section className="w-screen flex items-center justify-center bg-gray-300 py-24">
      <div className="container max-w-screen-lg flex flex-row justify-between items-center">
        <div className="flex flex-col items-start justify-center flex-1">
          <h3 className="text-black text-2xl font-bold mb-4">
            군대에서 시작하는
          </h3>
          <h1 className="text-black text-4xl font-bold">
            나의 사소한 루틴 쌓기
          </h1>
        </div>

        <div className="flex flex-col items-start justify-center flex-1">
          <p className="text-black text-xl font-medium">
            지키고 싶은 밀리루틴을 만들고
            <br />
            함께 인증해보세요!
          </p>

          <Button label="지금 시작하기" margin="mt-4" />
        </div>
      </div>
    </section>
  );
};
