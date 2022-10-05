import { useState, useRef, useEffect, MutableRefObject } from "react";
import "./Segment.css";

interface SegmentItemProps {
  label: string;
  value: string;
  ref: MutableRefObject<any>;
}

export interface SegmentProps {
  name: string;
  segments: Array<SegmentItemProps>;
  callback: (value: string, index: number) => void;
  defaultIndex?: number;
  controlRef: MutableRefObject<any>;
}

export const Segment = ({
  name,
  segments,
  callback,
  defaultIndex = 0,
  controlRef,
}: SegmentProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const componentReady = useRef<boolean>(false);

  useEffect(() => {
    componentReady.current = true;
  }, []);

  useEffect(() => {
    const activeSegmentRef = segments[activeIndex].ref;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty("--highlight-width", `${offsetWidth}px`);
    style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
  }, [activeIndex, callback, controlRef, segments]);

  const onInputChange = (value: string, index: number) => {
    setActiveIndex(index);
    callback(value, index);
  };

  return (
    <div className="controls-container flex" ref={controlRef}>
      <div
        className={`controls bg-gray-300 before:bg-orange ${
          componentReady.current ? "ready" : "idle"
        }`}
      >
        {segments?.map((item, i: number) => (
          <div
            key={item.value}
            className={`segment ${i === activeIndex ? "active" : "inactive"}`}
            ref={item.ref}
          >
            <input
              type="radio"
              value={item.value}
              id={item.label}
              name={name}
              onChange={() => onInputChange(item.value, i)}
              checked={i === activeIndex}
            />
            <label
              className="text-gray-500 text-sm font-normal"
              htmlFor={item.label}
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
