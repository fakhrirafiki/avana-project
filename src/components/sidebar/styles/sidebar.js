import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #fff;
        /* background-color: #eee; */
        min-height: 100vh;
        width: 270px;
        border-right: 1px solid #eee
`;

export const ImageWrapper = styled.div`
        display: flex;
        justify-content: center;
        padding-top: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid #ecf0f1;
`;

export const LogoImage = styled.img`
        width: 200px;
`;

export const WrapperButtonStatus = styled.div`
        background-color: #fdb816;
        padding: 7px 80px 7px 80px;
        text-align: center;
        align-self: center;
        border-radius: 15px;
        box-shadow: 1px 1px 5px 0px rgba(182,170,170,0.75);
        -webkit-box-shadow: 1px 1px 5px 0px rgba(182,170,170,0.75);
        -moz-box-shadow: 1px 1px 5px 0px rgba(182,170,170,0.75);
`;

export const TextButtonStatus = styled.p`
        margin: 0px;
        font-size: 14px;
        color: #4a4a4a;
`;

// RONDE 2

export const WrapperContentSidebar = styled.div`
        flex: 1;
        /* overflow: scroll; */
`;

export const WrapperItemMenu = styled.div`
        display: flex;
        flex-direction: row;
        padding: 15px 20px 15px 20px;
        align-items: center;
        cursor: pointer;

        ${({ isAllowed }) => !isAllowed && css`
                cursor: not-allowed;
                pointer-events: none;
                opacity: 0.3;
        `}

`;

export const IconMenuImage = styled.img`
        width: 23px;
        object-fit: contain;
`;



export const TextItemMenu = styled.p`
        margin: 0px;
        font-size: 16px;
        font-weight: 500;
        color: #999;
        flex: 1;
        padding: 15px 20px 15px 50px;

        ${({ isAllowed }) => !isAllowed && css`
                cursor: not-allowed;
                pointer-events: none;
                opacity: 0.3;
        `}
`;

// RONDE 3

export const WrapperItemSubmenu = styled.div`
        display: flex;
        flex-direction: column;
        cursor: pointer;
`;

export const IconButtonArrow = styled.img`
        width: 18px;
        object-fit: contain;
`;