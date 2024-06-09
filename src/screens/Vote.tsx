import { FC } from "react";
import Button from "../components/Button"
import { Question } from "../components/Question"
import { useNavigate } from "react-router-dom";

export const Vote: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-blue-50 h-dvh w-screen">
        <div className="flex flex-col items-center bg-indigo-200 h-1/2 max-w-96 w-screen">
          <Question />
        </div>
        <div className="flex flex-col items-center bg-blue-50 h-1/2 w-screen">
          <Button text='YES' bgColor='bg-emerald-600' txtColor='text-white' center onClick={() => navigate('/')}/>
          <Button text='NO' bgColor='bg-rose-600' txtColor='text-white' center />
        </div>
      </div>
      {/* <div className="flex flex-col items-center bg-blue-50 justify-center h-dvh w-screen">
        
        <Question />
        <div className=" bg-blue-600 inset-y-0 h-1/2 w-screen"></div>
        <Button text='YES' bgColor='bg-emerald-600' txtColor='text-white' center />
        <Button text='NO' bgColor='bg-rose-600' txtColor='text-white' center />
      </div> */}
    </>
  )
}