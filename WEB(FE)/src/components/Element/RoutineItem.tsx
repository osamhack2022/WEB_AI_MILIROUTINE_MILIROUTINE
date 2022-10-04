import { useMemo } from "react";
import { Button } from "@/components/Element";

export interface RoutineItemProps {
  size?: number;
  nickname?: string;
  title?: string;
}

export const RoutineItem = ({
  size = 40,
  nickname = "Test Nickname",
  title = "Test Title",
}: RoutineItemProps) => {
  const itemSize = useMemo(() => `w-${size}`, [size]);
  const imageSize = useMemo(() => `w-${size} h-${size}`, [size]);

  return (
    <div className={itemSize}>
      <div className={`border rounded-xl border-black mb-2 ${imageSize}`} />
      <span className="text-sm text-gray-500">{nickname}</span>
      <h4 className="text-lg text-black font-bold mb-1">{title}</h4>
      <Button label="학습" />
      <div className="flex flex-row justify-between items-center mt-4">
        <span className="text-black text-sm">주 5회 인증</span>
        <span className="text-black text-sm">35명 참여중</span>
      </div>
    </div>
  );
};
