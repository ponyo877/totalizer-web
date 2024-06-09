import { FC } from "react";
import Button from "../components/Button"
import { Title } from "../components/Title"
import { LocalIcon, GlobalIcon } from "../components/Icon";
import { useNavigate } from "react-router-dom";

export const Top: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-blue-50 h-dvh w-screen">
        <div className="flex flex-col items-center justify-center bg-blue-50 h-1/2 w-screen">
          <Title />
        </div>
        <div className="flex flex-col items-center bg-blue-50 h-1/2 w-screen">
          <Button icon={LocalIcon} text='1台で' onClick={() => navigate('vote')} />
          <Button icon={GlobalIcon} text='みんなで' onClick={() => alert('Hello!')} />
        </div>
      </div>
    </>
  )
}