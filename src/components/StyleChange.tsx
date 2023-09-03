import { PropsSquare } from "./Type";
import { useState } from "react";

export default function StyleChange(squaresStyle: PropsSquare) {
    const [styleSquare, setSquare] = useState<PropsSquare>(squaresStyle);
    return (
        <>
        <div id="square">
            <div id="square1" style={styleSquare.square1}>
                I am blue square
            </div>
            <div id="square2" style={styleSquare.square2}>
                i am red square
            </div>
            </div>
            <button
                onClick={() => {
                    console.log(1);
                    
                    styleSquare.square1.backgroundColor = "wight";
                    console.log(styleSquare.square1);
                    
                    setSquare(styleSquare);
                }}
                id="buttonChange"
            >reset</button>
        
        </>
    );
}
