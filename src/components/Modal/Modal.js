import React from 'react';
// import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

// Podemos hacer que la duración de la animación de entrada y de salida sean diferentes
// Para ello creamos un objeto en el que los nombres de las keys tienen que ser 'enter' y
// 'exit' puesto que esos nombres son los que espera 'react-transition-group' sino no funciona.
// El timing que le pongamos aqui por ejemplo en el 'exit' tiene que ser igual al de la animación
// de salida en el css correspondiente, en este caso Modal.css
const animationTiming = {
  enter: 400,
  exit: 1000
};

const modal = (props) => {
  return (
    // <Transition
    //   in={props.show}
    //   timeout={animationTiming}
    //   mountOnEnter
    //   unmountOnExit>
    //   {state => {
    //     // 'entering' y 'exiting' hacen referencia a 2 de los estados que tenemos del state de <Transition />
    //     const cssClasses = ["Modal",
    //     state === 'entering'
    //      ? "ModalOpen"
    //      : state === 'exiting' ? "ModalClosed" : null
    //     ];
    //     return (
    //       <div className={cssClasses.join(" ")}>
    //           <h1>A Modal</h1>
    //           <button className="Button" onClick={props.closed}>Dismiss</button>
    //       </div>
    //     )
    //   }}
    // </Transition>

    // En vez de hacer las animaciones visulaes de esta manera con <Transition />, podemos hacerlas con CSSTransition
    // La ventaja de usar CSSTransition es que no tenemos que andar manejando clases de CSS con JS, de eso se encarga
    // todo <CSSTransition /> con las 'subclases' que hayamos creado en el .css

    /* Ponemos 'classNames', no className. classNames es de CSSTransition y va a pasar por las subclases
    fade-slide-enter, fade-slide-enter-active, fade-slide-exit, fade-slide-exit-active que hemos creado
    en CSS. fade-slide-enter y fade-slide-exit solo duran el primer fotograma de la animación, el resto de
    la animacíon va con fade-slide-enter-active y fade-slide-exit-active
    */

    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames="fade-slide">
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
      </div>
    </CSSTransition>

    /*
      También podemos personalizar los nombres que usará CSSTransition en classNames de la siguiente manera:
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed',
        appear: '',
        appearActive: ''
      }}
      Lo que antes haría referencia a 'fade-slide-enter-active' ahora haría referencia a 'ModalOpen', e igual con exit.
      'appear' y 'appearActive' hacen referencia a cuando un elemento/componente se carga en el DOM por primera vez,
      pero debido a que se cargue directamente al leer el código, no porque se cargue condicionalmente, como por
      ejemplo pulsar un botón.
    */
  );
};

export default modal;
