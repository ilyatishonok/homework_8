import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ArticlesContainer from '../ArticlesContainer';
import tabs from '../../data/tabs';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        margin: 0px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        font-family: fantasy;
    }

    #root {
        width: 100%;
    }
`;

const App: React.SFC<{}> = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <ArticlesContainer tabs={tabs} />
        </React.Fragment>
    );
}

export default App;