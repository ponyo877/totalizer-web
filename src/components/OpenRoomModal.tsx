// import { FC } from "react";
// import { FAB } from "./FAB";

// export const OpenRoom: FC = () => {
//     return (
//         <>
//             <div className="relative flex flex-col items-center justify-center h-screen max-w-96 w-screen">
//                 <input
//                     className="absolute flex flex-col bg-white text-center rounded-2xl h-[90%] w-[90%]"
//                     type="text"
//                     defaultValue='0877'
//                     onChange={(e) => e.preventDefault()}
//                 />
//                 <FAB text="入室" bgColor="bg-indigo-400" />
//                 <FAB text="IDをシェア" bgColor="bg-indigo-400" />
//             </div>
//         </>
//     )
// }

import { FC, memo } from "react"
import { createPortal } from "react-dom"
import { MdClose } from "react-icons/md";

type Props = {
  closeModal: () => void
  handleAction: () => void
  // isOpen: boolean
}

export const OpenRoomModal: FC<Props> = memo(() => {
  // const {
  //   closeModal,
  //   handleAction,
  //   // isOpen,
  // } = props

 //早期リターン
//  if (!isOpen) return <> </>

  return <><p>sample modal</p></>
  // createPortal(
  //   //オーバレイ
  //   <div
  //     className={`fixed inset-0 z-40 flex items-center justify-center bg-[rgb(0_0_0/0.6)]`}
  //     onClick={closeModal}
  //   >
  //     <div
  //       className="w-full max-w-[540px] rounded bg-white py-4"
  //       onClick={(e) => e.stopPropagation()}
  //     >
  //       <div className="flex w-full items-center justify-between border-b px-6 pb-4">
  //         <div className="gap-4">
  //           <p className="text-base sm:text-xl">〇〇の削除</p>
  //         </div>
  //         <button onClick={closeModal}>
  //           <MdClose width={24} height={24} className="fill-gray-500" />
  //         </button>
  //       </div>
  //       <div className="px-6 pt-8">
  //         <p>本当に削除しても良いですか？</p>
  //       </div>
  //       <div className="mt-8 flex justify-end gap-x-2 border-t px-4 pt-4">
  //         <button
  //           className="rounded border border-gray-500 px-4 py-2 text-gray-500"
  //           onClick={closeModal}
  //         >
  //           キャンセル
  //         </button>
  //         <button
  //           className={`rounded px-4 py-2 text-white`}
  //           onClick={handleAction}
  //         >
  //         削除
  //         </button>
  //       </div>
  //     </div>
  //   </div>,
  //   document.getElementById("__next")!,
  // )
})