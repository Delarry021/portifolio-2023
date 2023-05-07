interface Botao2Prop {
    link:string
    texto:string
}

export default function BotaoTwo(props: Botao2Prop){
    return (
        <a className={`
        hover:scale-110
        transition-all
        text-zinc-50
        font-medium
        px-10 py-2
        sm:px-5 sm:py-1
        rounded-lg
        max-w-fit
        bg-gradient-to-r from-royalblue-400 to-royalblue-300 ...
        `} href={props.link}>{props.texto}</a> 
    )
}