import React from 'react'
import { WrapperHome, WrapperContent, WrapperItemContent, TextHomeTitle, TextHomeDesc, TitleWidget } from './styles/wrapper';



export default function Wrapper({ children, direction = 'row', ...restProps }) {
    return (
        <WrapperHome {...restProps}>{children}</WrapperHome>
    )
}

Wrapper.WrapperContent = function WrapperWrapperContent({ children, ...restProps }) {
    return <WrapperContent {...restProps}>{children}</WrapperContent>;
}

Wrapper.WrapperItemContent = function WrapperWrapperItemContent({ children, ...restProps }) {
    return <WrapperItemContent {...restProps}>{children}</WrapperItemContent>;
}


Wrapper.TextHomeTitle = function WrapperTextHomeTitle({ children, ...restProps }) {
    return <TextHomeTitle {...restProps}>{children}</TextHomeTitle>;
}

Wrapper.TextHomeDesc = function WrapperTextHomeDesc({ children, ...restProps }) {
    return <TextHomeDesc {...restProps}>{children}</TextHomeDesc>;
}

Wrapper.TitleWidget = function WrapperTitleWidget({ children, ...restProps }) {
    return <TitleWidget {...restProps}>{children}</TitleWidget>;
}
