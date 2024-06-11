import { FC } from "react"
import Button from "../components/Button"
import { Top } from "./Top"
import LocalIcon from "../assets/local.svg";
import GlobalIcon from "../assets/global.svg";

export const History: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-blue-50 justify-center h-dvh w-screen">
        <Top />
        <Button icon={<img
          className="avatar"
          src={LocalIcon}
          alt={'local'}
          style={{
            width: 27,
            height: 27,
          }}
        />} text={'1台で'} />
        <Button icon={<img
          className="avatar"
          src={GlobalIcon}
          alt={'global'}
          style={{
            width: 32,
            height: 27,
          }}
        />} text={'みんなで'} />
      </div>
    </>
  )
}
