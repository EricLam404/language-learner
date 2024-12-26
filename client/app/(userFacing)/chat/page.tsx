import { ChatContainer } from "@components/chat/ChatContainer";
import SettingsContainer from "@components/chat/SettingsContainer";
import React from "react";

const Page = () => {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <SettingsContainer />
        </div>
    );
};

export default Page;
