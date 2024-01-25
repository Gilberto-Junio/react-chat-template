import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { messagesData } from "../data/chat";
import { MdSearch, MdSend } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { cs1, cs2 } from "../assets/chat";
import { getTime } from "../logic/chat";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


function ChatDetail() {
  const [messages, setMessages] = useState(messagesData);
  const [typing, setTyping] = useState(false);

  const inputRef = useRef<HTMLInputElement >(null);
  const bottomRef = useRef<HTMLInputElement >(null);

  // Functions

  const addMessage = (msg:any) => {
    const newMessages = [...messages, msg];
    setMessages(newMessages);
  };

  const handleEmojiClick = () => {
    if  (inputRef.current) inputRef.current.value += "🔥";
    inputRef.current?.focus();
  };

  const handleImgUpload = () => {
    addMessage({
      img: cs2,
      time: getTime(),
      sent: true,
    });
  };

  const handleInputChange = () => {
    inputRef.current?.value.length === 0 ? setTyping(false) : setTyping(true);
  };

  const handleInputSubmit = () => {
    if (inputRef.current && inputRef.current.value.length > 0) {
      addMessage({
        msg: inputRef.current.value,
        time: getTime(),
        sent: true,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
      setTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const listener = (e:KeyboardEvent) => {
      if (e.code === "Enter") handleInputSubmit();
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  });

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between bg-background h-[60px] p-3">
        <div className="flex items-center">
          <img
            src={cs1}
            alt="profile_picture"
            className="rounded-full w-[45px] h-[45px] mr-5"
          />
          <div className="flex flex-col">
            <h1 className="dark:text-white font-medium">Coding Spot</h1>
            <p className="text-neutral-400 text-xs">online</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-[85px]">
            <Button variant="ghost" size="icon" className="rounded-full">
                <MdSearch className='h-[1.2rem] w-[1.2rem] text-lime-600 dark:text-white'/>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
                <HiDotsVertical className='h-[1.2rem] w-[1.2rem] text-lime-600 dark:text-white'/>
            </Button>
        </div>
      </div>
      <div
        className="bg-neutral-200 dark:bg-neutral-900 bg-contain overflow-y-scroll scrollbar-thin h-100"
        style={{ padding: "12px 7%" }}
      >
        {messages.map((msg,key) => (
          <Message
            key={key}
            msg={msg.msg}
            time={msg.time}
            isLink={msg.isLink}
            img={msg.img}
            sent={msg.sent}
          />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex items-center bg-background w-full h-[70px] p-2">
        <span>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={handleEmojiClick}>
                    <BiHappy className='h-[1.2rem] w-[1.2rem] text-lime-600 dark:text-white'/>
            </Button>
        </span>
        <span className="mr-2">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={handleImgUpload}>
                    <AiOutlinePaperClip className='h-[1.2rem] w-[1.2rem] text-lime-600 dark:text-white'/>
            </Button>
        </span>
        <Input
          type="text"
          placeholder="Mensagem"
          className=" rounded-lg outline-none text-sm w-full h-full"
          onChange={handleInputChange}
          ref={inputRef}
        />
        <span className="ml-2">
          {typing ? (
                <Button variant="ghost" size="icon" className="rounded-full" onClick={handleInputSubmit}>
                        <MdSend className='h-[1.2rem] w-[1.2rem] text-lime-600 dark:text-white'/>
                </Button>
          ) : (
            <Button variant="ghost" size="icon" className="rounded-full">
                <BsFillMicFill className='h-[1.2rem] w-[1.2rem] text-lime-600 dark:text-white'/>
            </Button>
          )}
        </span>
      </div>
    </div>
  );
}

export default ChatDetail;
