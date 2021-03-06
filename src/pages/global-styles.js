import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 10px;
        margin: 0;
    }

    a{
        text-decoration: none;
        color:inherit;
    }

    th {
        font-size: 16px !important;
    }

    td {
        font-size: 14px !important;
    }

    /* width */
        ::-webkit-scrollbar {
        width: 7px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #fff; 
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #B5B5B5; 
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #B5B5B5; 
        }
`;