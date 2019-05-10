import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/user';
import { ModalStyled } from './style';

const Modal = ({ closeModal }) => (
  <ModalStyled>
    <form>
      <strong>Adicionar novo usuário</strong>
      <input type="text" placeholder="Usuário no Github" />
      <div className="buttons">
        <button className="cancelar" type="button" onClick={closeModal}>
          Cancelar
        </button>
        <button className="salvar" type="submit">
          Salvar
        </button>
      </div>
    </form>
  </ModalStyled>
);

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  () => ({}),
  mapDispatchToProps,
)(Modal);
