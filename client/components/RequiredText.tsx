import { ReactNode } from "react";

const RequiredText = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}{" "}
            <span className="ml-[-2px] text-red-500">*</span>
        </>
    );
};

export default RequiredText;
