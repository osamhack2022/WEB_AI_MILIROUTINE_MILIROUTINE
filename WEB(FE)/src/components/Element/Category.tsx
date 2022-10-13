import { useState } from "react"

interface Props {
  label: string
}

export const Category = ({ label }: Props) => {

  let [checked, setClicked] = useState(false);

  return (
    <button className= {checked == false ? "w-32 h-32 rounded-2xl bg-white-200"
      : "w-32 h-32 rounded-2xl bg-orange"}

      onClick={() => {
        setClicked(!checked)
      }}>

      <p className= {checked == false ? "text-gray-400 text-center text-2xl font-semibold"
        : "text-white-200 text-center text-2xl font-semibold"}>{label}</p>
    </button>


  )
}
