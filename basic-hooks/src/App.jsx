import React, { useContext, useState } from "react";
import "./App.css";
import Counter1 from "./components/useState/Counter1";
import Counter2 from "./components/useState/Counter2";
import Counter3 from "./components/useState/Counter3";
import Counter4 from "./components/useState/Counter4";
import Effect from "./components/useEffect/Effect";
import ParentContext, { AppContext } from "./components/useContext/ParentContext";
import Task from "./components/task/Task";

export default function App() {
    const [show, setShow] = useState(0);
    const { isDark, setIsDark } = useContext(AppContext)
    const render = () => {
        switch (show) {
            case 1:
                return (
                    <>
                        <Counter1 />
                        <Counter2 />
                        <Counter3 />
                        <Counter4 />
                    </>
                );
            case 2:
                return (
                    <>
                        <Effect />
                        {/* <ParentContext /> */}
                    </>
                );
            case 0:
                return (
                    <>
                        <Task />
                    </>
                );
            default:
                return null;
        }
    }
    return (
        <div id="main">
            <div id="buttons">
                <button
                    onClick={() => {
                        if (show < 2) {
                            setShow(show + 1)
                        } else if (show == 2) {
                            setShow(0)
                        }
                    }}
                >
                    CHANGE
                </button>
                <button onClick={() => {
                    setIsDark(!isDark)
                }}>{isDark ? "Light Theme" : "Dark Theme"}</button>
            </div>

            {render()}
        </div>
    );
}