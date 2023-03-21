export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LANG': {
      return {
        ...state,
        lang: action.key,
      };
    }

    case 'TOGGLE_BODY_SCROLL': {
      return {
        ...state,
        navMobileVisible: !state.navMobileVisible,
      };
    }

    default:
      return { ...state };
  }
};

// dispatch({type: '', key: ''})
