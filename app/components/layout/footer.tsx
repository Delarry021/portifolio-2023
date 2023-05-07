export default function Footer(){
    return(
        <footer className=
        {`
          flex justify-center items-center
          border-t
          dark:border-t-zinc-800 border-t-zinc-300
          py-16 sm:py-8
        `}>
        <p className={`
        dark:text-zinc-400
        text-zinc-700
        `}>© 2023 Direitos reservados.</p>
      </footer>
    )
}