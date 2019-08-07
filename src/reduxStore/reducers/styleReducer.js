const SET_STYLE = 'SET_STYLE';

const initialState = {
    style_s: {
        def: '',
        blackLime: {
            id: 1, name: 'blackLime',
            component: {
                background: '#282828',
                color: '#7e7e7e'
            },
            background: {
                background: '#202020'
            },
            button: {
                backgroundColor: '#003333',
                color: '#55ff55'
            },
            header: {
                background: '#00ff00',
                color: '#ffffff'
            },
            title: {
                color: '#ffff00'
            },
            error: {
                color: '#ff0000'
            }
        },
        blackRed: {
            id: 2, name: 'blackRed',
            component: {
                background: '#200000',
                color: '#7e7e7e'
            },
            background: {
                background: '#202020'
            },
            button: {
                backgroundColor: '#330000',
                color: '#ff0000'
            },
            header: {
                background: '#ff2233',
                color: '#ffffff'
            },
            title: {
                color: '#00ffff'
            },
            error: {
                color: '#ff0000'
            }
        },
        whiteRose: {
            id: 3, name: 'whiteRose',
            component: {
                background: '#ffccff',
                color: '#282828'
            },
            background: {
                background: '#ddffff'
            },
            button: {
                backgroundColor: '#00ff77',
                color: '#000000'
            },
            header: {
                background: '#ff00ff',
                color: '#ffffff'
            },
            title: {
                color: '#0055ff'
            },
            error: {
                color: '#ff0000'
            }
        },
        whiteBlue: {
            id: 4, name: 'whiteBlue',
            component: {
                background: '#aaaaff',
                color: '#282828'
            },
            background: {
                background: '#ccffff'
            },
            button: {
                backgroundColor: '#00ff77',
                color: '#000000'
            },
            header: {
                background: '#0055ff',
                color: '#ffffff'
            },
            title: {
                color: '#aa5500'
            },
            error: {
                color: '#ff0000'
            }
        },

    },
    selectedStyle: 'def'
};

initialState.style_s.def = initialState.style_s.blackLime;

const styleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STYLE:
            if (state.style_s[action.payload]) return {...state, selectedStyle: action.payload};
            return {...state, selectedStyle: 'def'};
        default:
            return state;
    }
};

export const setStyle = (style) => ({type: SET_STYLE, payload: style});

export default styleReducer;