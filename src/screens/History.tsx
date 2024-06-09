import { FC } from "react"
import Button from "../components/Button"
import Title from "../components/Title"
import LocalIcon from "../assets/local.svg";
import GlobalIcon from "../assets/global.svg";

export const History: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-blue-50 justify-center h-dvh w-screen">
        <Title />
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
