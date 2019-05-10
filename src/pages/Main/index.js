import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Container, User, MarkerImg } from './style';
import Modal from '../../components/Modal';
import { token } from '../../config/map';
import 'mapbox-gl/dist/mapbox-gl.css';

const Main = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 0,
    longitude: 0,
    zoom: 15,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, [viewport]);

  useEffect(() => {
    function handleWindowChange() {
      setViewport({ ...viewport, width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleWindowChange);
    return () => window.removeEventListener('resize', handleWindowChange);
  }, [viewport]);

  const handleClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    console.log(longitude, latitude);
  };

  return (
    <>
      <Modal />
      <Container>
        <User>
          <div className="user">
            <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="logo" />
            <div>
              <strong>Lucas Teixeira</strong>
              <small>lucasATeixeira</small>
            </div>
          </div>
          <div className="icons">
            <i className="fa fa-times-circle close" />
            <i className="fa fa-chevron-right arrow" />
          </div>
        </User>
        <User>
          <div className="user">
            <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="logo" />
            <div>
              <strong>Lucas Teixeira</strong>
              <small>lucasATeixeira</small>
            </div>
          </div>
          <div className="icons">
            <i className="fa fa-times-circle close" />
            <i className="fa fa-chevron-right arrow" />
          </div>
        </User>
        <User>
          <div className="user">
            <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="logo" />
            <div>
              <strong>Lucas Teixeira</strong>
              <small>lucasATeixeira</small>
            </div>
          </div>
          <div className="icons">
            <i className="fa fa-times-circle close" />
            <i className="fa fa-chevron-right arrow" />
          </div>
        </User>
      </Container>
      <ReactMapGL
        {...viewport}
        onViewportChange={newViewport => setViewport(newViewport)}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        onClick={handleClick}
      >
        <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
          <MarkerImg src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="logo" />
        </Marker>
      </ReactMapGL>
    </>
  );
};

export default Main;
