import React, { useContext, useState } from "react";
import { AppContext } from "../useContext/ParentContext";

export default function Counter3() {
    const [data, setData] = useState({ age: 18, sibling: 3 });
    const { isDark } = useContext(AppContext);
    const handleState = (param) => {
        setData({
            ...data,
            [param]: data[param] + 1,
        });
    };

    const { decreaseCount } = useContext(AppContext);

    return (
        <div
            id="main-1"
            style={{
                backgroundColor: `${isDark ? "black" : "white"}`,
                color: `${isDark ? "white" : "black"}`,
            }}
        >
            <h1>COUNTER - 3</h1>
            <h2>My Age : {data.age}</h2>
            <h2>Sibling(s) : {data.sibling}</h2>
            <div id="buttons">
                <button
                    onClick={() => {
                        handleState("age");
                    }}
                >
                    Get Older
                </button>
                <button
                    onClick={() => {
                        handleState("sibling");
                    }}
                >
                    More Siblings
                </button>
                <button onClick={decreaseCount}>Decrease Main Count</button>
            </div>
        </div>
    );
}