import React, { useContext, useState } from "react";
import { AppContext } from "../useContext/ParentContext";

export default function Counter1() {
    const [currAge, setCurrAge] = useState(20);
    const { isDark } = useContext(AppContext);
    const getOlderTen = () => {
        // setCurrAge(currAge+10)
        for (let i = 0; i < 10; i++) {
            setCurrAge((prev) => prev + 1);
        }
    };
    return (
        <div
            id="main-1"
            style={{
                backgroundColor: `${isDark ? "black" : "white"}`,
                color: `${isDark ? "white" : "black"}`
            }}
        >
            <h1>COUNTER - 1</h1>
            <h4>Age : {currAge}</h4>
            <div id="buttons">
                <button
                    onClick={() => {
                        setCurrAge(currAge + 1);
                    }}
                >
                    Get Older
                </button>
                <button
                    onClick={() => {
                        if (currAge > 0) {
                            setCurrAge(currAge - 1);
                        }
                    }}
                >
                    Get Younger
                </button>
                <button onClick={getOlderTen}>Get Older by 10 Years</button>
            </div>
        </div>
    );
}