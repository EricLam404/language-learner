import { ChatContainer } from "@components/chat/ChatContainer";
import React from "react";

const Page = ({ params }: { params: { chatId: string } }) => {
    return (
        <div>
            <ChatContainer chatId={params.chatId} />
        </div>
    );
};

export default Page;
