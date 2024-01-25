import {useState, useEffect} from 'react'
import { chatsData } from '../data/chat'
import Chat from './Chat'

type Props = {
    filter:boolean
}

function Chats({filter}:Props) {
    const [chats,setChats] = useState(chatsData);

    useEffect(() => { 
        const newChats = filter 
        ? chatsData.filter((chat) => chat.unreadMsgs)
        : chatsData;
        setChats(newChats);
     }, [filter]);

    return (
        <div className='flex flex-col overflow-y-scroll cursor-pointer h-full'>
            {chats.map((chat,key) => {
                return (
                    <Chat
                        key={key}
                        pp={chat.pp}
                        contact={chat.contact}
                        msg={chat.msg}
                        time={chat.time}
                        unreadMsgs={chat.unreadMsgs}
                        active={key === 0}
                    />
                )
            })}
        </div>
    )
}

export default Chats