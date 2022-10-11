import { useState, useCallback, ChangeEvent } from "react";
import { Form } from "@/components/Element";

export const RoutineMakePage = () => {
  const [title, setTitle] = useState("");

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setTitle(e.target.value);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-black font-bold text-4xl py-6 mt-10">
            밀리루틴 개설하기
          </h2>
        </div>

        <div className="container max-w-xs mb-24">
          <Form
            label="밀리루틴 이름"
            placeholder="10자 이내로 입력해주세요"
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
        </div>
      </div>
    </>
  );
};
