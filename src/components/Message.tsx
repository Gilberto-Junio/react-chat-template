type Props = {
    msg?: string,
    time: string,
    isLink?: boolean,
    img?: string
    sent:boolean
}

function Message({msg, time, isLink, img, sent}:Props) {
  return (
    <div
        className={`flex justify-center items-center rounded-md w-fit my-1 ${
            sent ? "bg-lime-200 dark:bg-lime-700 ml-auto": "bg-white dark:bg-zinc-800 mr-auto"
        }`}
    >
        {img ? (
            <div className='relative w-full p-2'>
                <img src={img} alt="img_message" className='rounded-md max-w-[240px] w-full'/>
                <p className='absolute right-2 bottom-3 text-zinc-400 text-[10px] min-w-[50px]'>{time}</p>
            </div>
        ) : (
            <div
                className='flex justify-between items-end max-w-[410px] p-2'
                style={{ wordBreak: "break-word" }}
            >
                {isLink ? (
                    <a 
                      href={msg}
                      target='blank'
                      className='text-[#53beec] hover:text-[#53beec] focus:text-[#53beec] active:text-[#53beec] text-sm underline hover:underline mr-2'
                    >
                        {msg}
                    </a>
                ) : (
                    <p className='dark:text-white text-sm mr-2'>{msg}</p>
                )}
                <p className='text-zinc-500 dark:text-zinc-300 text-[10px] min-w-[50px]'>{time}</p>
            </div>
        )}
    </div>
  )
}

export default Message