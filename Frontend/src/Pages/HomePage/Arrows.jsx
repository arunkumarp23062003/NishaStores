import React from "react";

export const PrevArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "rgba(0, 0, 0, 0.4)", cursor: "pointer", width: "40px", padding: "10px", position: "absolute", zIndex: "1", height: "40px", borderRadius: "0 6px 6px 0", lineHeight: 2 }}
                onClick={props.onClick}
            />
        </>
    )
}

export const NextArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "rgba(0, 0, 0, 0.4)", cursor: "pointer", width: "40px", padding: "10px", position: "absolute", zIndex: "1", height: "40px", borderRadius: "0 6px 6px 0", lineHeight: 2 }}
                onClick={props.onClick}
            />
        </>
    )
}

