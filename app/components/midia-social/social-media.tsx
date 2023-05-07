import { ReactNode } from "react";

interface SocialProps {
    link:string;
    icone: ReactNode;
    texto: string; 
}

export default function SocialMedia(props: SocialProps) {
    return (
            <a href={props.link} className={`
            hover:scale-110
            transition-all
            border
            dark:border-zinc-800 border-zinc-300
            px-4 py-2
            rounded-xl
            dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900 ...
            bg-gradient-to-r from-zinc-100 to-zinc-200 ...
            `}><li className="dark:text-zinc-400 text-zinc-600 flex items-center gap-4">{props.icone} {props.texto}</li></a>
    )
}