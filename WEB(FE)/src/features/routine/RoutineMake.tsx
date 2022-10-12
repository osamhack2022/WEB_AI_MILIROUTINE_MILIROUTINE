import { useState, useCallback, ChangeEvent } from "react";
import { Form, Select, DropdownItem } from "@/components/Element";

export const RoutineMakePage = () => {
  const [categories, setCategories] = useState([
    { label: "학습1", value: "0" },
    { label: "학습2", value: "1" },
  ]);
  const [intervals, setIntervals] = useState([
    { label: "주기1", value: "0" },
    { label: "주기2", value: "1" },
  ]);
  const [periods, setPeriods] = useState([
    { label: "기간1", value: "0" },
    { label: "기간2", value: "1" },
  ]);

  const [title, setTitle] = useState<string | undefined>("");
  const [category, setCategory] = useState<DropdownItem | undefined>();
  const [interval, setInterval] = useState<DropdownItem | undefined>();
  const [period, setPeriod] = useState<DropdownItem | undefined>();

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
          <Select
            label="밀리루틴 카테고리"
            items={categories}
            value={category}
          />
          <Select label="인증 주기" items={intervals} value={interval} />
          <Select label="루틴 진행 기간" items={periods} value={period} />
        </div>
      </div>
    </>
  );
};
