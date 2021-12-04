import React from "react";
import Header from "./Header";
import styled from "styled-components";

const TemplateBlock = styled.div`

`
const Template=(props:any)=>{
    return(
        <>
        <Header/>
        <TemplateBlock>
            <div className="container">
                {props.children}
            </div>
        </TemplateBlock>
        </>
    );
}

export default Template;