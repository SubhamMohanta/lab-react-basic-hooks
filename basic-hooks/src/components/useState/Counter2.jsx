import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../useContext/ParentContext";

export default function Counter2() {
    const [currAge, setAge] = useState(18);
    const [currSib, setSib] = useState(1);
    const { isDark } = useContext(AppContext);
    const handleAge = () => {
        setAge(currAge + 1);
    };

    const handleSib = () => {
        setSib(currSib + 1);
    };
    const handleSib2 = () => {
        if (currSib > 0) {
            setSib(currSib - 1);
        }
    };

    const { mainCount } = useContext(AppContext);

    useEffect(() => {
        console.log("Counter 2 mounted");
    }, []);
    return (
        <div
            id="main-1"
            style={{
                backgroundColor: `${isDark ? "black" : "white"}`,
                color: `${isDark ? "white" : "black"}`,
            }}
        >
            <h1>COUNTER - 2</h1>
            <h3>My Current Age is {currAge}</h3>
            <h3>My siblings : {currSib}</h3>
            <h5>Main Count (context) : {mainCount} </h5>
            <div id="buttons">
                <button onClick={handleAge}>Get Older</button>
                <button onClick={handleSib}>Get more Siblings</button>
                <button onClick={handleSib2}>Decrease Siblings</button>
            </div>
        </div>
    );
}