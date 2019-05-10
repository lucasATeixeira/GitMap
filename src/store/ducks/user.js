export const Types = {
  TOGGLE_MODAL: 'user/TOGGLE_MODAL',
  CLOSE_MODAL: 'user/CLOSE_MODAL',
  ADD_USER_REQUEST: 'user/ADD_USER_REQUREST',
  ADD_USER_SUCCESS: 'user/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'user/ADD_USER_FAILURE',
};

const INITIAL_STATE = {
  users: [
    {
      name: 'Lucas Teixeira',
      login: 'LucasATeixeira',
      avatar: 'https://avatars3.githubusercontent.com/u/69631?v=4',
      latitude: -16.707807198721373,
      longitude: -49.25617857138211,
    },
    {
      name: 'Marina Gabriela',
      login: 'MarinaGabriela',
      avatar: 'https://avatars3.githubusercontent.com/u/139426?v=4',
      latitude: -16.70287470284281,
      longitude: -49.24997730412947,
    },
  ],
  modal: false,
  loading: false,
  err: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_MODAL:
      return { ...state, modal: true };
    case Types.CLOSE_MODAL:
      return { ...state, modal: false };
    case Types.ADD_USER_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        err: null,
        loading: false,
        modal: false,
        users: [...state.users, action.payload.user],
      };
    case Types.ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload.err,
      };
    default:
      return state;
  }
}

export const Creators = {
  toggleModal: () => ({
    type: Types.TOGGLE_MODAL,
  }),

  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),

  addUserRequest: (latitude, longitude, login) => ({
    type: Types.ADD_USER_REQUEST,
    payload: { latitude, longitude, login },
  }),

  addUserSuccess: user => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { user },
  }),

  addUserFailure: err => ({
    type: Types.ADD_USER_FAILURE,
    payload: { err },
  }),
};
