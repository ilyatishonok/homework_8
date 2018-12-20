interface Config {
    defaultUrlToImage: string;
    defaultErrorMessage: string;
    defaultQuery: string;
}

const config: Config = {
    defaultUrlToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    defaultErrorMessage: 'Error while fetching data. Please try again!',
    defaultQuery: 'people',
};

export default config;