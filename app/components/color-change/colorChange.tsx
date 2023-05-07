import { useEffect, useState } from "react"
import { BsMoon } from "react-icons/bs";

export function ColorChange(){
      
      const [theme, setTheme] = useState("light");
    
      useEffect(() => {(window.matchMedia('(prefers-color-scheme:dark)').matches) ? setTheme('dark') : setTheme('light');
      },[])
    
      useEffect(() => { (theme === "dark") ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"); }, [theme]);
    
      const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
      }

      return (
          <button onClick={handleThemeSwitch} className=
          {`
            dark:text-zinc-400 text-zinc-500
            border border-width-3 dark:border-zinc-800 border-zinc-300
            px-4 py-2
            rounded-md
          `}
          ><BsMoon/></button>
      )

}