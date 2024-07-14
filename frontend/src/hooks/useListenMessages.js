import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useChat from "../zustand/useChat";

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useChat();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            setMessages([...messages, newMessage]);
        })

        return () => {socket?.off("newMessage")};
    }, [socket, messages, setMessages ])
}

export default useListenMessages;