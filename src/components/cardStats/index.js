import React from 'react'
import { Card, WrapperContent, ItemContent, ImgIcon, TextValue, TextDesc, WrapperFooter, TextFooter } from './styles/cardStats';



export default function CardStats({ children, direction = 'row', ...restProps }) {
    return (
        <Card {...restProps}>{children}</Card>
    )
}

CardStats.WrapperContent = function CardStatsWrapperContent({ children, ...restProps }) {
    return <WrapperContent {...restProps}>{children}</WrapperContent>;
}

CardStats.ImgIcon = function CardStatsImgIcon({ children, ...restProps }) {
    return <ImgIcon {...restProps} />
}

CardStats.TextValue = function CardStatsTextValue({ children, ...restProps }) {
    return <TextValue {...restProps}>{children}</TextValue>;
}

CardStats.TextDesc = function CardStatsTextDesc({ children, ...restProps }) {
    return <TextDesc {...restProps}>{children}</TextDesc>;
}

CardStats.WrapperFooter = function CardStatsWrapperFooter({ children, ...restProps }) {
    return <WrapperFooter {...restProps}>{children}</WrapperFooter>;
}

CardStats.TextFooter = function CardStatsTextFooter({ children, ...restProps }) {
    return <TextFooter {...restProps}>{children}</TextFooter>;
}