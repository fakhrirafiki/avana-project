import React from 'react'
import { SidebarWrapper, ImageWrapper, LogoImage, WrapperButtonStatus, TextButtonStatus, WrapperContentSidebar, WrapperItemMenu, IconMenuImage, TextItemMenu } from './styles/sidebar';



export default function Sidebar({ children, direction = 'row', ...restProps }) {
    return (
        <SidebarWrapper {...restProps}>{children}</SidebarWrapper>
    )
}

Sidebar.ImageWrapper = function SidebarImageWrapper({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
}

Sidebar.LogoImage = function SidebarLogoImage({ children, ...restProps }) {
    return <LogoImage {...restProps} />;
}

Sidebar.WrapperButtonStatus = function SidebarWrapperButtonStatus({ children, ...restProps }) {
    return <WrapperButtonStatus {...restProps}>{children}</WrapperButtonStatus>;
}

Sidebar.TextButtonStatus = function SidebarTextButtonStatus({ children, ...restProps }) {
    return <TextButtonStatus {...restProps}>{children}</TextButtonStatus>;
}

// RONDE 2
Sidebar.WrapperContentSidebar = function SidebarWrapperContentSidebar({ children, ...restProps }) {
    return <WrapperContentSidebar {...restProps}>{children}</WrapperContentSidebar>;
}

Sidebar.WrapperItemMenu = function SidebarWrapperItemMenu({ children, ...restProps }) {
    return <WrapperItemMenu {...restProps}>{children}</WrapperItemMenu>;
}

Sidebar.IconMenuImage = function SidebarIconMenuImage({ children, ...restProps }) {
    return <IconMenuImage {...restProps} />;
}

Sidebar.TextItemMenu = function SidebarTextItemMenu({ children, ...restProps }) {
    return <TextItemMenu {...restProps}>{children}</TextItemMenu>;
}


