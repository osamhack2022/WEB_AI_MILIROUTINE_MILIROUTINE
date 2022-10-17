import { ReactComponent as Check_gray } from "@/assets/check_gray.svg"
import { useState } from "react"

interface Props {
  label: string
}


export const PreferMiliroutine = ({ label }: Props) => {

  let [checked, setClicked] = useState(false);

  return (
    <button className={checked == false ? "w-420 h-14 rounded-2xl bg-gray-300"
    : "w-420 h-14 rounded-2xl bg-orange"}
    
    onClick={()=>{
      setClicked(!checked)
    }}>

      <p className={checked == false ? "text-lg font-medium"
      : "text-lg text-white-200 font-semibold"}>{label}</p>
      
    </button>
  )
}

//svg 이모티콘 사용하면 내부 label이 줄바꿈이 되어버림. 수정도 안먹혀서 일단 보류.
//일단 내부 글자 패딩은 안맞춰뒀음.