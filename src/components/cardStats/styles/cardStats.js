import styled, { css } from 'styled-components/macro';

export const Card = styled.div`
        background-color: #FFFF;
        margin-right: 30px;
        margin-bottom: 30px;
        border-radius: 10px;
        padding: 20px;
`;

export const WrapperContent = styled.div`
        display: flex;
        flex-direction: row;
`;

export const ItemContent = styled.div`
        flex: 1;
        padding-left: 10px;
`;

export const ImgIcon = styled.img`
        flex: 1;
        padding-left: 10px;
`;

export const TextValue = styled.p`
        margin: 0px;
        font-size: 16px;
        font-weight: bold;
        color: #4a4a4a;
`;

export const TextDesc = styled.p`
        margin: 0px;
        font-size: 14px;
        color: #999;
`;

export const WrapperFooter = styled.div`
        display: flex;
        border-top: 2px solid #60d28d;
        justify-content: space-around;
        padding-top: 5px;
`;

export const TextFooter = styled.p`
        margin: 0px;
        font-size: 12px;
        color: #4a4a4a;
        font-weight: 500;
`;






