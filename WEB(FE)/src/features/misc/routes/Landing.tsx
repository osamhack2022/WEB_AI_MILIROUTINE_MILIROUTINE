import { useState, useCallback, useRef } from "react";
import {
  Jumbotron,
  RoutineItem,
  Carousel,
  Segment,
} from "@/components/Element";

export const Landing = () => {
  const [activeTab, setTab] = useState<string>();

  const onSelectedTab = useCallback((value: string) => setTab(value), []);

  return (
    <>
      <Jumbotron />

      <section className="w-screen flex flex-col items-center justify-center my-24">
        <div className="container max-w-screen-lg flex flex-row items-center">
          <h2 className="text-black text-2xl font-bold">AI 추천 밀리루틴</h2>
          <button className="text-sm text-gray-500 py-2 px-6 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>

        <div className="container max-w-screen-lg flex flex-row items-center mt-2 text-black">
          회원가입을 하시면, 더 알맞은 밀리루틴을 추천해드려요!
        </div>

        <div className="container max-w-screen-lg flex flex-row items-center my-4">
          <Segment
            name="group-1"
            callback={onSelectedTab}
            controlRef={useRef()}
            segments={[
              {
                label: "학습",
                value: "a",
                ref: useRef(),
              },
              {
                label: "운동",
                value: "b",
                ref: useRef(),
              },
              {
                label: "모닝루틴",
                value: "c",
                ref: useRef(),
              },
              {
                label: "경제",
                value: "d",
                ref: useRef(),
              },
              {
                label: "자기관리",
                value: "e",
                ref: useRef(),
              },
            ]}
          />
        </div>

        <Carousel>
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
        </Carousel>
      </section>

      <section className="w-screen flex flex-col items-center justify-center my-24">
        <div className="container max-w-screen-lg flex flex-row items-center">
          <h2 className="text-black text-2xl font-bold">인기 밀리루틴</h2>
          <a className="text-sm text-gray-500 py-2 px-6 cursor-pointer">전체</a>
        </div>

        <Carousel>
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
        </Carousel>
      </section>
    </>
  );
};
