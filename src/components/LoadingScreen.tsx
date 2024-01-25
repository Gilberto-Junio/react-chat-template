import { FaLock } from 'react-icons/fa';
import { kpGreen } from '../assets/chat';
import { Progress } from "@/components/ui/progress"

type Props = {
    progress: number
}

function LoadingScreen({ progress }:Props) {
  return (
    <div className='flex flex-col justify-center items-center bg-background w-creen h-screen '>
        <span className='text-[#3d464a] text-6xl my-6'>
            <img src={kpGreen} alt="Keepins_logo" className='rounded-full w-[50px] h-[50px]' />
        </span>
        <div className='flex flex-col justify-evenly items-center h-[150px]'>
            <div className="rounded-lg w-[320px] h-[3px]">
                <Progress value={progress} className='h-[4px]' color={"bg-lime-600"}></Progress>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='ext-white dark:text-zinc-800 text-lg font-medium'>Keepins Atendimento</h1>
                <div className='flex items-center text-[#687782]'>
                    <span className='text-sm mr-3'>
                        <FaLock/>
                    </span>
                    <p>
                        Criptografia de ponta a ponta
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoadingScreen