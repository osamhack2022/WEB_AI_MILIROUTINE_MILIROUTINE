import { Label } from "@/components/Element";

export interface RoutineItemProps {
  size?: number;
  nickname?: string;
  title?: string;
}

export const RoutineItem = ({
  nickname = "검은연필",
  title = "하루 30분 공부하기",
}: RoutineItemProps) => {
  return (
    <div>
      <div className="border rounded-xl border-black mb-2 w-40 h-40 bg-white-200 shadow-lg" />
      <span className="text-sm text-gray-500">{nickname}</span>
      <h4 className="text-lg text-black font-bold mb-1">{title}</h4>
      <Label text='text-xs' label="학습" />
      <div className="flex flex-row justify-between items-center mt-4">
        <span className="text-black text-sm">주 5회 인증</span>
        <span className="text-black text-sm">35명 참여중</span>
      </div>
    </div>
  );
};
