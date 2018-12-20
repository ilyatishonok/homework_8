import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';
import Tabs from '../Tabs';
import ArticleList from '../ArticleList';
import Loader from '../Loader';
import { ArticleInterface, TabInterface } from '../../types';
import config from '../../constants/config';
import api from '../../utils/api';

const ContentLayout = styled.div`
    margin-left: 200px;
    margin-right: 200px;
    padding-top: 54px;
    box-shadow: 0 0 20px black;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media(max-width: 1020px) {
        margin-left: 100px;
        margin-right: 100px;
    }
    
    @media(max-width: 750px) {
        margin-left: 50px;
        margin-right: 50px;
        padding-top: 108px;
    }
    
    @media(max-width: 520px) {
        margin: 0px;
        padding-top: 216px;
    }
`;

const Error = styled.div`
    color:red;
`;

const HighLight = styled.b`
    color: #491253;
`;

interface ArticlesContainerState {
    activeTab: string;
    articles: ArticleInterface[];
    isFetching: boolean;
    error: string;
}

interface ArticlesContainerProps {
    tabs: TabInterface[];
}

export default class ArticlesContainer extends Component<ArticlesContainerProps, ArticlesContainerState> {
    state = {
        activeTab: '',
        articles: [],
        isFetching: false,
        error: '',
    }

    public onTabChange = (tabId: string) : void => {
        const { tabs } = this.props;
        const { defaultErrorMessage } = config;

        this.setState({
            activeTab: tabId,
            error: '',
            isFetching: true,
        }); 

        const tab = tabs.find((tab: TabInterface) => tab.id === tabId);
        const query: string = tab ? tab.title : config.defaultQuery;
        const page = Math.floor((Math.random() * 50) + 1);

        const apiKey: string | undefined = process.env.REACT_APP_API_KEY;
        const apiSource: string | undefined = process.env.REACT_APP_API_URL;

        api<{ articles: ArticleInterface[]; }>(`${apiSource}?page=${page}&apiKey=${apiKey}&q=${query}`)
            .then((data): void => {
                this.setState({
                    isFetching: false,
                    articles: data.articles,
                });
            })
            .catch((): void => {
                this.setState({
                    isFetching: false,
                    error: defaultErrorMessage,
                });
            });
    }

    public renderContent(): ReactNode {
        const { activeTab, isFetching, error, articles } = this.state;

        if (error) {
            return <Error>{error}</Error>;
        }

        if (isFetching) {
            return <Loader />
        }

        if (!activeTab) {
            return (
                <div>
                    Please, select any Tab to display <HighLight>20</HighLight> random articles of chosen category
                </div>
            );
        }

        return <ArticleList articles={articles} />
    }

    public render(): ReactNode {
        const { tabs } = this.props;
        const { activeTab } = this.state;

        return (
            <React.Fragment>
                <Tabs activeTab={activeTab} onTabChange={this.onTabChange} tabs={tabs} />
                <ContentLayout>
                    {this.renderContent()}
                </ContentLayout>
            </React.Fragment>
        );
    }
}