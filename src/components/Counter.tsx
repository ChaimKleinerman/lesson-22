import { useRef } from "react";
export default function Counter() {
    //explein the type
    const buttonRef = useRef<HTMLDivElement>(null);
    let counter = 0;
    return (
        <div id="counter">
            <button
                onClick={() => {
                    counter++
                    if (buttonRef.current) {
                        buttonRef.current.textContent = String(counter);
                    }
                }}
            >
                counter
            </button>
            <div id="count" ref={buttonRef}>
                0
            </div>
            <button onClick={()=>{
                counter = 0
                if (buttonRef.current) {
                    buttonRef.current.textContent = String(counter)
                } 
            }}>reset</button>
        </div>
    );
}
