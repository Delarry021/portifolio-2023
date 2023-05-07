interface linguagemProps{
    texto:string
}

export function Linguagem(props:linguagemProps) {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div className='w-[8px] h-[8px] rounded-full bg-royalblue-300'></div>
            <p className='dark:text-zinc-50 font-light text-zinc-700'>{props.texto}</p>
        </div>
    )
}