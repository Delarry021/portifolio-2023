import { useState } from 'react';

export default function Ling(props: any) {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <li 
        className="flex flex-col items-center justify-center hover:text-royalblue-300 hover:scale-125 transition-all relative"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        {props.children}
        {showText && (
          <span className='transition-all text-md'>{props.linguagem}</span>
        )}
      </li>
    </div>
  );
}
