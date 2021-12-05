import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Template=(props:any)=>{
    return(
        <>
        <Header/>
            <div className="container">
                {props.children}
            </div>
        </>
    );
}

export default Template;