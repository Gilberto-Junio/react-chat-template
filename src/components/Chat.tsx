type Props = {
    pp: string,
    contact: string,
    msg: string,
    time: string,
    unreadMsgs: number,
    active: boolean,
}

function Chat({pp, contact, msg, time, unreadMsgs, active}:Props) {
  return (
    <div className={`flex items-center cursor-pointer h-[85px] mx-1 my-0.5 p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-neutral-800 ${
        active ? "bg-zinc-300 dark:bg-neutral-700" : ""
      }`}
    >
        <img 
            src={pp}
            alt="profile_picture"
            className='rounded-full w-[50px] mr-5'
        />
        <div className='flex justify-between w-screen h-full py-3'>
            <div className='flex flex-col justify-between dark:text-white'>
                <h1 className='font-medium mb-1'>{contact}</h1>
                <p className={`text-sm ${!unreadMsgs ? "text-neutral-400" : ""}`}>{msg}</p>
            </div>
            <div className='flex flex-col justify-between items-end h-full text-xs'>
                <p className='text-lime-600 min-w-[55px]'>{time}</p>
                {unreadMsgs > 0 && (
                    <div className='flex justify-center items-center bg-lime-600 rounded-full w-[20px] h-[20px]'>
                        <p className='text-white dark:text-zinc-800 font-medium'>{unreadMsgs}</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Chat;