import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ReactMapGL, { Marker } from 'react-map-gl';
import { Creators as LocalizationActions } from '../../store/ducks/localization';
import { Creators as UserActions } from '../../store/ducks/user';

import { token } from '../../config/map';

import { Container, User, MarkerImg } from './style';
import Modal from '../../components/Modal';

import 'mapbox-gl/dist/mapbox-gl.css';

const Main = ({
  localization,
  updateViewport,
  updateLocalization,
  updateSize,
  users,
  modal,
  toggleModal,
  closeModal,
}) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      updateLocalization(position.coords.latitude, position.coords.longitude);
    });
  });

  useEffect(() => {
    function handleWindowChange() {
      updateSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', handleWindowChange);
    return () => window.removeEventListener('resize', handleWindowChange);
  });

  const handleClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    console.log(longitude, latitude);
    toggleModal();
  };

  return (
    <>
      {modal && <Modal />}
      <Container>
        {users.map(user => (
          <User key={Math.random()}>
            <div className="user">
              <img src={user.avatar} alt="logo" />
              <div>
                <strong>{user.name}</strong>
                <small>{user.login}</small>
              </div>
            </div>
            <div className="icons">
              <i className="fa fa-times-circle close" />
              <i className="fa fa-chevron-right arrow" />
            </div>
          </User>
        ))}
      </Container>
      <ReactMapGL
        {...localization.viewport}
        onViewportChange={newViewport => updateViewport(newViewport)}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        onClick={handleClick}
      >
        {users.map(user => (
          <Marker key={Math.random()} latitude={user.latitude} longitude={user.longitude}>
            <MarkerImg src={user.avatar} alt="logo" />
          </Marker>
        ))}
      </ReactMapGL>
    </>
  );
};

const mapStateToProps = state => ({
  localization: state.localization,
  users: state.user.users,
  modal: state.user.modal,
  loading: state.user.loading,
  err: state.user.err,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...LocalizationActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
