const INITIAL_STATE = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 0,
    longitude: 0,
    zoom: 15,
  },
};

export default function localization(state = INITIAL_STATE, action) {}
