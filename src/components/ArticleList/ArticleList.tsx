import React, { ReactNode } from 'react';
import Article from './Article';
import { ArticleInterface } from '../../types';
import config from '../../constants/config';

export interface ArticleListPropTypes {
    articles: ArticleInterface[];
}

const ArticleList: React.SFC<ArticleListPropTypes> = ({ articles }) => {
    return (
        <React.Fragment>
            {articles.map((article: ArticleInterface): ReactNode => ( 
                <Article
                    key={article.title}
                    title={article.title} 
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage || config.defaultUrlToImage}
                />
            ))}
        </React.Fragment>
    );
}

export default ArticleList;