import { FC, useState } from "react";
import Button from "../components/Button"
import { Question } from "../components/Question"
import BlockModal from "../components/BlockModal";

export const Vote: FC = () => {
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleYesClick = () => {
    setYesCount(yesCount + 1);
    setShowModal(true);
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setShowModal(true);
  };

  const handleReceiveClick = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-blue-50 h-dvh w-screen">
        <div className="flex flex-col items-center bg-blue-50 h-1/2 max-w-96 w-screen">
          <div className="flex flex-col items-center bg-indigo-200 h-5/6 max-w-96 w-screen">
            <Question />
          </div>
        </div>
        <div className="flex flex-col items-center bg-blue-50 h-1/2 w-screen">
          <div className="flex max-w-96 px-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold">{yesCount + noCount}</div>
              <div className="text-base">参加</div>
            </div>
          </div>
          <div className="max-w-96 px-8 mb-8">
            <Button text='YES' bgColor='bg-emerald-600' txtColor='text-white' center onClick={handleYesClick} />
            <Button text='NO' bgColor='bg-rose-600' txtColor='text-white' center onClick={handleNoClick} />
          </div>
        </div>
      </div>

      {showModal && (
        <BlockModal onReceiveClick={handleReceiveClick} />
      )}
    </>
  )
}