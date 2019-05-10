import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/user';
import { ModalStyled } from './style';

const Modal = ({
  closeModal, addUserRequest, latitude, longitude, loading,
}) => {
  const [userInput, setUserInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addUserRequest(latitude, longitude, userInput);
  };
  return (
    <ModalStyled>
      <form onSubmit={handleSubmit}>
        <strong>Adicionar novo usuário</strong>
        <input
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          type="text"
          placeholder="Usuário no Github"
        />
        <div className="buttons">
          <button className="cancelar" type="button" onClick={closeModal}>
            Cancelar
          </button>
          <button className="salvar" type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
          </button>
        </div>
      </form>
    </ModalStyled>
  );
};

const mapStateToProps = state => ({ loading: state.user.loading });
const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
