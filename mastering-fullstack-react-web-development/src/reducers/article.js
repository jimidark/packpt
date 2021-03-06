const articleMock = {
    '987654': {
        articleTitle: 'Lorem ipsum - article one',
        articleContent: 'Here goes the content of the article'
    },
    '123456': {
        articleTitle: 'Lorem ipsun - article two',
        articleContent: 'Sky is the limit, the content goes here'
    }
};

// const article = (state = articleMock, action) => {
const article = (state = {}, action) => {
    switch (action.type) {
        case 'RETURN_ALL_ARTICLES':
            return Object.assign({}, state);
        case 'ARTICLES_LIST_ADD':
            return Object.assign({}, action.payload.response);
        default:
            return state;
    }
}

export default article;