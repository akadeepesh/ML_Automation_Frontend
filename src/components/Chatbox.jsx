import React, { useState, useEffect, useRef } from 'react';
import { LuArrowDownRightFromCircle } from 'react-icons/lu';
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import './styling/Chatbox.css';

const generateAvatarColor = (name) => {
    const initials = name
        .split(' ')
        .map(part => part.charAt(0))
        .join('')
        .toUpperCase();

    const colors = ['#f44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#FFC107', '#FF9800', '#FF5722', '#795548', '#607D8B'];

    const nameHash = initials.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colorIndex = nameHash % colors.length;

    const selectedColor = colors[colorIndex];

    return {
        backgroundColor: selectedColor,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        fontWeight: 'bold',
        fontSize: '14px',
        content: `"${initials}.toUpperCase()"`
    };
};

const Message = ({ message, divWidth, divHeight, name, type }) => (
    <div className="flex mt-2 ml-1">
        {type ? (
            <>
                <div className="flex ml-1">
                    <div className="logo flex-initial mr-1">
                        <span className=""><img src={require("./images/DC.png")} alt="DC" height={26} width={26} /></span>
                    </div>
                    <div style={{ width: `${divWidth + 15}px`, height: `${divHeight * 25 + 30}px` }} className="bg-[#2A3942] text-white pl-2 mt-1 pr-2 rounded-tl-none rounded-2xl ">
                        <span style={{ width: 255 }} className='text-lg w-4 h-4'>{message}</span>
                    </div>
                </div>
            </>
        ) : (
            <>
                <div className="flex mt-1 mr-1 ml-auto">
                    <div style={{ width: `${divWidth + 15}px`, height: `${divHeight * 25 + 30}px` }} className="bg-[#2A3942] text-white flex-initial pl-2 mt-1 pr-2 rounded-tr-none rounded-2xl ">
                        <span className='text-lg'>{message}</span>
                    </div>
                    <div className="logo mr-1">
                        <span style={generateAvatarColor(name)}>{name.toUpperCase().substring(0, 2)}</span>
                    </div>
                </div>
            </>
        )}
    </div>
);

const Home = () => {
    const [icon, setIcon] = useState('ripple');
    const [Input, setInput] = useState("");
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [botmessages, setBotMessages] = useState(["Hello! Deepesh here, How can I assist you today?"]);
    const [usermessages, setUsermessages] = useState(["yeah bro got it"]);
    const [type, setType] = useState(true);
    const chatContainerRef = useRef(null);

    const handleClick = () => {
        setIsChatOpen(!isChatOpen);
        setIcon(icon === 'ripple' ? 'cross' : 'ripple');
    };

    const InputChange = (event) => {
        setInput(event.target.value);
    };
    useEffect(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [usermessages]);

    const sendMessage = () => {
        if (Input.trim() !== "") {
            setType(!type);
            setUsermessages([...usermessages, Input]);
            setInput("");
        }
    };

    return (
        <div className="fixed flex right-4 bottom-[4%]">
            <div className={`w-[var(--w288)] h-[var(--h384)] chatBox ${isChatOpen ? "flex animate-show z-10" : "hidden"} rounded-xl bg-blackish`}>
                <span className={`bg-blackish text-blueish absolute w-fit h-fit cursor-pointer rounded-full p-3`} onClick={handleClick}>
                    <LuArrowDownRightFromCircle size={35} className='' />
                </span>
                <div style={{ width: 'calc(var(--w288) - 23px)', height: 'calc(var(--h384) - 23px)' }} className="m-auto bg-brownish rounded-xl flex flex-col">

                    <div ref={chatContainerRef} className="mt-14 scroll-smooth mb-2 overflow-y-auto">
                        {(type ? botmessages : usermessages).map((message, index) => (
                            <Message
                                key={index}
                                message={message}
                                divWidth={Math.min(message.length * 12, 240)}
                                divHeight={Math.floor(message.length / 20)}
                                type={type}
                                name={"deepesh kumar"}
                            />
                        ))}
                    </div>

                    <div className='mt-auto'>
                        <div className="flex  bg-[#2A3942] rounded-b-xl">
                            <div className="ml-2 w-full">

                                <input className="bg-[#202C33] text-white indent-2.5 rounded-xl p-1 w-full h-[80%] focus:outline-none my-2" value={Input} onChange={InputChange} type="text" placeholder='Enter Your Message...' />
                            </div>
                            <span className="text-[#8696A0] cursor-pointer rounded-full ml-2 w-fit h-fit p-1 mt-3" type='submit' onClick={sendMessage}>
                                <AiOutlineSend size={27} className="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <span className={`bg-blackish text-blueish mt-auto openit cursor-pointer rounded-full flex p-1 ${isChatOpen ? "openitRad" : "ani"}`} onClick={handleClick}>
                {icon === 'ripple' ? (
                    <HiOutlineCursorArrowRipple size={40} className='' />
                ) : (
                    <AiOutlineClose size={40} className='animate-rot' />
                )}
            </span>
        </div>
    );
};

export default Home;
