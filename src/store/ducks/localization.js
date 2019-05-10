export const Types = {
  UPDATE_LOCALIZATION: 'localization/UPDATE_LOCALIZATION',
  UPDATE_SIZE: 'localization/UPDATE_SIZE',
  UPDATE_VIEWPORT: 'localization/UPDATE_VIEWPORT',
};

const INITIAL_STATE = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 0,
    longitude: 0,
    zoom: 15,
  },
};

export default function localization(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_LOCALIZATION:
      return {
        ...state,
        viewport: {
          ...state.viewport,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    case Types.UPDATE_SIZE:
      return {
        ...state,
        viewport: {
          ...state.viewport,
          width: action.payload.width,
          height: action.payload.height,
        },
      };
    case Types.UPDATE_VIEWPORT:
      return {
        ...state,
        viewport: action.payload.viewport,
      };
    default:
      return state;
  }
}

export const Creators = {
  updateLocalization: (latitude, longitude) => ({
    type: Types.UPDATE_LOCALIZATION,
    payload: { latitude, longitude },
  }),

  updateSize: (width, height) => ({
    type: Types.UPDATE_SIZE,
    payload: { width, height },
  }),

  updateViewport: viewport => ({
    type: Types.UPDATE_VIEWPORT,
    payload: { viewport },
  }),
};
