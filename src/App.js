import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: true,
    showBlock: false
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br />
        {/*
          'in' dice si hay que mostrar el contenido que hay dentro de <Transition />
          'timeout' es el tiempo en milisegundos que debe durar cada state de <Transition />
          (entering, entered, exiting, exited). Clase 391.
          Lo que hacemos en este caso es quitar el <div> del DOM cuando su animación termine
        */}
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter /* If the 'in' prop is true add the element to the DOM */
          unmountOnExit /* If the 'in' prop is false remove the element from the DOM */
          onEnter={() => console.log("On enter")}
          onEntering={() => console.log("On entering")}
          onEntered={() => console.log("On entered")}
          onExit={() => console.log("On exit")}
          onExiting={() => console.log("On exiting")}
          onExited={() => console.log("On exited")}
          /* onEnter se ejecuta justo antes de que empiece la animación de entrada */
          /* onEntering se ejecuta cuando empieza la animación de entrada */
          /* onEntered se ejecuta justo cuando termina la animación de entrada */
          /* Lo mismo con onExit, onExiting, onExited */
          >
          {/* Aqui 'state' hace referencia al state actual de <Transition /> */}
          {/* state => <p>{state}</p> */}
          { state => (
            <div
              style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'exiting' ? 0 : 1
              }}
            />
          )}
        </Transition>
        {/*
          <Transition /> se puede poner dentro de cualquier componente, lo podríamos poner en el return
          del Modal.js o de Backdrop.js, etc...
        */}
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        { this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
