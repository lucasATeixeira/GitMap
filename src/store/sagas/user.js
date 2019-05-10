import { call, put, select } from 'redux-saga/effects';
import { Creators as UserActions } from '../ducks/user';
import api from '../../services/api';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `users/${action.payload.login}`);
    const isDuplicated = yield select(state => state.user.users.find(user => user.id === data.id));
    if (isDuplicated) {
      yield put(UserActions.addUserFailure('Usuário duplicado'));
    } else {
      const user = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
      yield put(UserActions.addUserSuccess(user));
    }
  } catch (err) {
    yield put(UserActions.addUserFailure(`Erro ao adicionar o repositório ${err}`));
  }
}
