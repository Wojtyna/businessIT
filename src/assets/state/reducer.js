export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LANG': {
      if (typeof window !== 'undefined') {
        localStorage.setItem('@BROWSER_LANG', action.key);
      }

      return {
        ...state,
        lang: action.key,
      };
    }

    case 'TOGGLE_BODY_SCROLL': {
      return {
        ...state,
        disabledBodyScrolling: !state.disabledBodyScrolling,
      };
    }

    default:
      return { ...state };
  }
};

// dispatch({type: '', key: ''})
