export const Types = {
  TOGGLE_MODAL: 'user/TOGGLE_MODAL',
  CLOSE_MODAL: 'user/CLOSE_MODAL',
  REMOVE_USER: 'user/REMOVE_USER',
  ADD_USER_REQUEST: 'user/ADD_USER_REQUREST',
  ADD_USER_SUCCESS: 'user/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'user/ADD_USER_FAILURE',
};

const INITIAL_STATE = {
  users: [],
  modal: false,
  loading: false,
  err: null,
  success: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id),
      };
    case Types.TOGGLE_MODAL:
      return { ...state, modal: true };
    case Types.CLOSE_MODAL:
      return { ...state, modal: false };
    case Types.ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        err: false,
      };
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        err: null,
        loading: false,
        modal: false,
        success: true,
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
  removeUser: id => ({
    type: Types.REMOVE_USER,
    payload: { id },
  }),

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
