import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../useContext/ParentContext";
export default function Task() {
    const { isDark } = useContext(AppContext);
    const [showContent, setShowContent] = useState(false);
    const [checkCount, setCheckCount] = useState(0);
    const [likes, setLikes] = useState(0);
    useEffect(() => {
        if (checkCount == 1) {
            alert("Content Triggered!");
        }
    }, [showContent]);
    return (
        <div
            id="task-main"
            style={{
                width: "90vw",
                display: "flex",
                flexDirection: "column",
                gap: "6vmin",
                alignItems: "center",
            }}
        >
            <div
                id="task-box"
                style={{
                    padding: "3vmin",
                    borderRadius: "10px",
                    width: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3vmin",
                    alignItems: "center",
                    backgroundColor: `${isDark ? "black" : "white"}`,
                    color: `${isDark ? "white" : "black"}`,
                }}
            >
                <div
                    id="content"
                    style={{ display: `${showContent ? "flex" : "none"}` }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                    quibusdam odit voluptatibus, quidem unde, nulla eveniet ipsum, illum a
                    sed commodi. Quas reiciendis dolore quasi nemo tenetur cumque aliquid
                    accusantium?
                </div>
                <button
                    onClick={() => {
                        setShowContent(!showContent);
                        setCheckCount(1);
                    }}
                    style={{
                        backgroundColor: "#f4f5f6",
                        padding: "1vmin",
                        borderRadius: "8px",
                        border: "none",
                        color: "black",
                    }}
                >
                    {showContent ? "Hide Content" : "Show Content"}
                </button>
                <div>{likes}</div>
                <button
                    onClick={() => {
                        setLikes(likes + 1);
                    }}
                    style={{
                        backgroundColor: "#f4f5f6",
                        padding: "1vmin",
                        borderRadius: "8px",
                        border: "none",
                        color: "black",
                    }}
                >
                    Like
                </button>
            </div>
        </div>
    );
}