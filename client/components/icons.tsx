import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function ChevronDownIcon(props: IconProps) {
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
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

export function GlobeIcon(props: IconProps) {
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
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    );
}

export function SearchIcon(props: IconProps) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

export const ChromeIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 48"
    height={48}
    width={48}
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={3.2173}
        y1={15}
        x2={44.7812}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d93025" />
        <stop offset={1} stopColor="#ea4335" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={20.7219}
        y1={47.6791}
        x2={41.5039}
        y2={11.6837}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fcc934" />
        <stop offset={1} stopColor="#fbbc04" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={26.5981}
        y1={46.5015}
        x2={5.8161}
        y2={10.506}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1e8e3e" />
        <stop offset={1} stopColor="#34a853" />
      </linearGradient>
    </defs>
    <circle
      cx={24}
      cy={23.9947}
      r={12}
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z"
      style={{
        fill: "none",
      }}
    />
    <path
      d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z"
      style={{
        fill: "url(#a)",
      }}
    />
    <circle
      cx={24}
      cy={24}
      r={9.5}
      style={{
        fill: "#1a73e8",
      }}
    />
    <path
      d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z"
      style={{
        fill: "url(#b)",
      }}
    />
    <path
      d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z"
      style={{
        fill: "url(#c)",
      }}
    />
  </svg>
);

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