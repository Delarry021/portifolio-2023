interface BotaoProp {
    link:string
    texto: string;
    checked?: boolean
}

export default function BotaoOne(props: BotaoProp){
    return (
        <a href={props.link}><li className={`
            dark:hover:border-royalblue-600
            hover:border-royalblue-300
            hover:text-royalblue-300
            transition-colors
            border border-width-3
            px-4 py-2
            rounded-md
            lg:block
            sm:hidden
            ${props.checked ? 'dark:border-royalblue-600 border-royalblue-300 text-royalblue-300': 'dark:border-zinc-800 border-zinc-300 text-zinc-500'}
            `}>
        {props.texto}</li></a> 
    )
}