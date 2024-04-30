import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../useContext/ParentContext";

export default function Counter4() {
    const [currAge, setAge] = useState(19);
    const [currSib, setSib] = useState(3);
    const { isDark } = useContext(AppContext);
    useEffect(() => {
        return () => {
            console.log("Counter 4 unmounted");
        };
    });
    // useEffect(()=>{
    //   alert(`something changed ${currAge}`)
    // },[currAge])

    const { setMainCount, mainCount } = useContext(AppContext);

    return (
        <div
            id="main-1"
            style={{
                backgroundColor: `${isDark ? "black" : "white"}`,
                color: `${isDark ? "white" : "black"}`,
            }}
        >
            <h1>COUNTER - 4</h1>
            <h2>Age : {currAge}</h2>
            <h2>Sibling(s) : {currSib}</h2>
            <div id="buttons">
                <button
                    onClick={() => {
                        setAge((prev) => prev + 1);
                    }}
                >
                    Get Older
                </button>
                <button
                    onClick={() => {
                        setSib((prev) => prev + 1);
                    }}
                >
                    More Siblings
                </button>
                <button
                    onClick={() => {
                        setAge(0);
                        setSib(0);
                    }}
                >
                    RESET
                </button>
                <button
                    onClick={() => {
                        setMainCount(mainCount + 1);
                    }}
                >
                    Increase Main Count
                </button>
            </div>
        </div>
    );
}