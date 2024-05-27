import {useState} from 'react'
import { BiFilter } from "react-icons/bi";
import { pp } from "../assets/chat"
import Chats from './Chats';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from "@/components/ui/input"
import { ThemeToggle } from './theme-toggle';
import { Button } from "@/components/ui/button";
import { LuUserPlus, LuUserX, LuUsers } from 'react-icons/lu';

function LeftMenu() {

    const [filter, setFilter] = useState(false);

    

    return (
        <div className='flex flex-col border-r dark:border-neutral-800 w-full h-screen'>
            <div className='flex justify-between items-center bg-background  h-[60px] p-3'>
                <img src={pp} alt="profile_pictue" className='rounded-full w-[40px]'/>
                <div className='flex justify-between w-[200px]'>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <LuUserPlus  className='h-[1.2rem] w-[1.2rem] text-lime-600 dark:text-white'/>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <LuUsers  className='h-[1.2rem] w-[1.2rem] text-lime-600 dark:text-white'/>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <LuUserX className='h-[1.2rem] w-[1.2rem] text-lime-600 dark:text-white'/>
                    </Button>
                    <ThemeToggle/>
                </div>
            </div>
            {/* <div className='flex justify-between items-center h-[60px] p-2'>
                <Select>
                    <SelectTrigger className="w-full h-[35px]">
                        <SelectValue placeholder="Operação" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div> */}
            <div className='flex justify-between items-center h-[60px] p-2'>
                <Input 
                    type="text"
                    placeholder='Buscar conversa' 
                    className='w-full h-[35px]'
                />
                <button 
                    className={`text-2xl m-2 p-1 rounded-full ${
                        filter ? "bg-lime-600 text-white rounded-full hover:bg-lime-700"
                        : "text-lime-600 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }`}
                    onClick={() => setFilter(!filter)}
                >
                    <BiFilter/>
                </button>
            </div>
            <Chats filter={filter}/>
        </div>
    )
}

export default LeftMenu