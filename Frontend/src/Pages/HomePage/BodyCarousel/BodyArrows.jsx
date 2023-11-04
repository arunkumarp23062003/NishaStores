import React from "react";

export const NextBodyArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "rgba(0, 0, 0, 0.4)", cursor: "pointer", width: "20px", marginTop: "5px", position: "absolute", right: "0", zIndex: "1", borderRadius: "6px 6px 6px 6px", lineHeight: 2 }}
                onClick={props.onClick}
            />
        </>
    )
}

export const PrevBodyArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "rgba(0, 0, 0, 0.4)", cursor: "pointer", position: "absolute", left: "0", marginTop: "5px", width: "20px", zIndex: "1", borderRadius: "6px 6px 6px 6px", lineHeight: 2 }}
                onClick={props.onClick}
            />
        </>
    )
}