import React, { useState, useEffect, useRef } from 'react';
import { LuArrowDownRightFromCircle } from 'react-icons/lu';
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";
import { AiOutlineSend, AiOutlineClose } from "react-icons/ai";
import './styling/Chatbox.css';

const generateAvatarColor = (name) => {
    const [firstName, lastName] = name.split(' ');
    const initials = (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();

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
        width: '26px',
        height: '26px',
        borderRadius: '50%',
        fontWeight: 'bold',
        fontSize: '13px',
        // content: `"${initials}.toUpperCase()"`
    };
};

const Message = ({ message, divWidth, divHeight, name, type }) => (
    <div className="flex mt-2 ml-1">
        {type ? (
            <>
                {/* Bot message rendering */}
                <div className="flex ml-1">
                    <div className="logo flex-initial mr-1">
                        <span className=""><img src={require("./images/DC.png")} alt="DC" height={26} width={26} /></span>
                    </div>
                    <div style={{ width: `${divWidth + 15}px`, height: `${divHeight * 25 + 30}px` }} className="bg-[#2A3942] text-white pl-2 mt-1 pr-2 rounded-tl-none rounded-2xl break-words">
                        <span style={{ width: 255 }} className='text-lg w-4 h-4'>{message}</span>
                    </div>
                </div>
            </>
        ) : (
            <>
                {/* User message rendering */}
                <div className="flex mt-1 mr-1 ml-auto">
                    <div style={{ width: `${divWidth + 15}px`, height: `${divHeight * 25 + 30}px` }} className="bg-[#2A3942] text-white flex-initial pl-2 mt-1 pr-2 rounded-tr-none rounded-2xl break-words">
                        <span className='text-lg'>{message}</span>
                    </div>
                    <div className="logo mr-1 ml-1">
                        <span style={generateAvatarColor(name)}>{name.split(' ').map(part => part.charAt(0)).join('').toUpperCase()}</span>
                    </div>
                </div>
            </>
        )}
    </div>
);

const Home = () => {
    const [icon, setIcon] = useState('ripple');
    const [input, setInput] = useState('');
    const [botResponse, setBotResponse] = useState('I am currently in development mode, thanks for your patience');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! Deepesh here, How can I assist you today?", type: 'bot' },
    ]);
    const chatContainerRef = useRef(null);

    const handleClick = () => {
        setIsChatOpen(!isChatOpen);
        setIcon(icon === 'ripple' ? 'cross' : 'ripple');
    };

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            // Add user message to the messages array
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: input, type: 'user' },
            ]);

            // Clear the input field
            setInput('');
        }
    };

    useEffect(() => {
        if (messages[messages.length - 1].type === 'user') {
            // Simulate bot response after user message
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: botResponse, type: 'bot' },
                ]);
                setBotResponse("Thanks for using but be patient!!!");
            }, 1000); // Simulate delay for bot response
        }

        // Scroll to the latest message
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [messages, botResponse]);

    return (
        <div className="fixed flex right-4 bottom-[4%] z-20">
            <div className={`w-[var(--w288)] h-[var(--h384)] chatBox ${isChatOpen ? "flex animate-show z-10" : "hidden-chat"} rounded-xl bg-blackish`}>
                <span className={`bg-blackish text-blueish absolute w-fit h-fit cursor-pointer rounded-full p-3`} onClick={handleClick}>
                    <LuArrowDownRightFromCircle size={35} className='' />
                </span>
                <div style={{ width: 'calc(var(--w288) - 23px)', height: 'calc(var(--h384) - 23px)' }} className="m-auto chatarea rounded-xl flex flex-col">
                    <div ref={chatContainerRef} className="mt-14 scroll-smooth mb-2 h-full overflow-y-auto">
                        {messages.map((message, index) => (
                            <Message
                                key={index}
                                message={message.text}
                                divWidth={Math.min(message.text.length * 12, 240)}
                                divHeight={Math.floor(message.text.length / 20)}
                                type={message.type === 'bot'}
                                name={"deepesh kumar"}
                            />
                        ))}
                    </div>
                    <div className='mt-auto'>
                        <div className="flex  bg-[#2A3942] rounded-b-xl">
                            <div className="ml-2 w-full">
                                <input className="bg-[#202C33] text-white indent-2.5 rounded-xl p-1 w-full h-[80%] focus:outline-none my-2" value={input} onChange={handleInput} type="text" placeholder='Enter Your Message...' />
                            </div>
                            <span className="text-[#8696A0] cursor-pointer rounded-full ml-2 w-fit h-fit p-1 mt-3" type='submit' onClick={handleSendMessage}>
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
