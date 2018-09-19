import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render () {
        const listItems = this.state.items.map( (item, index) => (
            <CSSTransition key={index} classNames="fade" timeout={300}>
              <li
                className="ListItem"
                onClick={() => this.removeItemHandler(index)}>
                {item}
              </li>
            </CSSTransition>
        ) );

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <TransitionGroup
                  component="ul"
                  className="List">
                    {listItems}
                </TransitionGroup>
            </div>
        );
        /*
          Para manejar una lista de elementos a traves de las animaciones de 'react-transition-group' hay
          que poner esa lista de elementos dentro de un componente llamado <TransitionGroup /> indicando en
          sus atributos el tipo de elemento por el que queremos que se sustituya el propio <TransitionGroup />
          una vez lo rendericemos, en este caso queremos que sea un <ul></ul>.

          Cada elemento individual de esa lista que estamos wrapeando con <TransitionGroup /> tiene que wrapear
          a su propio elemento html, en este caso un <li></li>, con un <CSSTransition /> o un <Transition />.
          Este ultimo wrapper tiene que contener el atributo 'key' que indentifica a cada elemento de una lista y
          el resto de atributos del <CSSTransition /> como 'classNames' o 'timeout'.

          Con <TransitionGroup /> no nos hace falta poner el atributo 'in' en el <CSSTransition /> puesto que
          <TransitionGroup /> lo hace solo ya que detecta cuando queremos quitar o poner un elemento en el DOM.
          Más info en clase 398, minuto 4:00.
        */
    }
}

export default List;
