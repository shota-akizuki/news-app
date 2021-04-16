const initialState = {
  clips: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CLIP':
      return {
        ...state,
        clips: [...state.clips, action.clip],
      };
    case 'DELETE_CLIP':
    default:
      return {
        ...state,
        clips: state.clips.filter((clip) => clip.url !== action.clip.url),
      };
      return state;
  }
};

export default reducer;
