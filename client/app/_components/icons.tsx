
import React from 'react';

type props = {
    className?: string;
};

export function FilePenIcon(props: props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
    );
}

export function PlusIcon(props: props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}

export function TrashIcon(props: props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    );
}

export function UploadIcon(props: props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    );
}


interface FlashcardIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export const FlashcardIcon = ({ className, ...props }: FlashcardIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            background: "new 0 0 100 100",
        }}
        viewBox="0 0 100 125"
        className={`w-6 h-6 ${className}`}
        {...props}
    >
        <path d="M22.781 79.127c-.63.104-1.273.157-1.908.157A11.576 11.576 0 0 1 9.42 69.56l-1.048-6.338v14.196a9.106 9.106 0 0 0 9.106 9.106h61.668a9.106 9.106 0 0 0 9.106-9.106v-9.2c-.41.115-.829.213-1.259.285l-64.21 10.625z" />
        <path d="m96.357 53.83-5.059-30.573a10.322 10.322 0 0 0-10.212-8.673c-.568 0-1.14.047-1.703.14L15.171 25.35c-5.638.932-9.465 6.279-8.532 11.916l5.059 30.57a10.321 10.321 0 0 0 10.212 8.675c.567 0 1.14-.048 1.704-.141l64.21-10.625a10.295 10.295 0 0 0 6.736-4.192 10.298 10.298 0 0 0 1.797-7.724zM21.11 51.044a2.096 2.096 0 0 1 1.725-2.41l21.852-3.617a2.096 2.096 0 0 1 .684 4.135L23.519 52.77a2.096 2.096 0 0 1-2.41-1.726zm35.148 8.536L25.49 64.674a2.096 2.096 0 0 1-.684-4.135l30.768-5.094a2.099 2.099 0 0 1 2.41 1.726 2.098 2.098 0 0 1-1.726 2.41zm4.049-25.129-38.758 6.416a2.097 2.097 0 0 1-.684-4.135l38.757-6.416a2.102 2.102 0 0 1 2.41 1.725 2.097 2.097 0 0 1-1.725 2.41z" />
    </svg>
);
export default FlashcardIcon;