import { useEffect, useState } from 'react'
import LeftMenu from '../components/LeftMenu'
import ChatDetails from '../components/ChatDetails'
import LoadingScreen from '../components/LoadingScreen';

function ChatPage() {
    // const [progress, setProgress] = useState(0);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         if  (progress >= 100) setLoading(false);
    //         else {
    //             const increment = Math.floor(Math.random() * (10 + 1)) + 3
    //             if  (progress + increment >= 100) setLoading(false);
    //             else setProgress(progress + increment)
    //         }
    //     }, 300);
    // },[progress])
    
    return (
        // <>
        //     {loading ? ( 
        //         <LoadingScreen progress={progress}/>
        //     ) : (
        //         <div className='w-screen h-screen overflow-hidden'>
        //             <div className='flex justify-start chat-bp:justify-center item-center bg-neutral-100 dark:bg-neutral-900 h-screen'>
        //                 <div className='bg-background min-w-[340px] max-w-[400px] w-full h-full'>
        //                     <LeftMenu/>
        //                 </div>
        //                 <div className='bg-background min-w-[415px] w-full h-full'>
        //                     <ChatDetails/>
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        // </>
            <div className='w-screen h-screen overflow-hidden scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-800'>
                <div className='flex justify-start chat-bp:justify-center item-center bg-neutral-100 dark:bg-neutral-900 h-screen'>
                    <div className='bg-background min-w-[340px] max-w-[400px] w-full h-full'>
                        <LeftMenu/>
                    </div>
                    <div className='bg-background min-w-[415px] w-full h-full'>
                        <ChatDetails/>
                    </div>
                </div>
            </div>
    )
};

export default ChatPage;