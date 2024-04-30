import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../useContext/ParentContext";

export default function Effect() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(25);
    const { isDark } = useContext(AppContext);

    // useEffect(()=>{
    //   console.log("Component Re-renders")
    //   console.log(count)
    //   console.log(age)
    // })

    // useEffect(() => {
    //   console.log("Component Re-renders");
    //   console.log(count)
    //   console.log(age)
    // }, []);

    // useEffect(() => {
    //   console.log("Component Re-renders");
    //   console.log(count)
    //   console.log(age)
    // }, [count,age]);

    // useEffect(() => {
    //   console.log("Component Re-renders");
    //   console.log(count)
    //   console.log(age)
    // }, [count]);

    useEffect(() => {
        //code here
        console.log("Component Re-renders");
        console.log(count);
        console.log(age);

        return () => {
            console.log("effect unmounted");
        };
    }, []);

    return (
        <div
            id="main-1"
            style={{
                backgroundColor: `${isDark ? "black" : "white"}`,
                color: `${isDark ? "white" : "black"}`,
            }}
        >
            <h1>useEffect</h1>
            <h3>Count : {count}</h3>
            <h3>Age : {age}</h3>
            <div id="buttons">
                <button
                    style={{ fontSize: "2vmax" }}
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        setAge(age - 1);
                    }}
                >
                    Decrease Age
                </button>
            </div>
        </div>
    );
}