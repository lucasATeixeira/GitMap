import React from 'react';
import { ModalStyled } from './style';

const Modal = () => (
  <ModalStyled>
    <form>
      <strong>Adicionar novo usuário</strong>
      <input type="text" placeholder="Usuário no Github" />
      <div className="buttons">
        <button className="cancelar" type="button" onClick={() => alert('Fechar')}>
          Cancelar
        </button>
        <button className="salvar" type="submit">
          Salvar
        </button>
      </div>
    </form>
  </ModalStyled>
);

export default Modal;
