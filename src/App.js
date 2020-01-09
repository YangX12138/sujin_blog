import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.scss';

function App() {
    const [show, setShow] = useState(true)

    function onToggle() {
        console.log(show);
        setShow(false);
    }

    return (
        <div className="container">
            <div className="square-wrapper">
                <CSSTransition
                    in={show}
                    timeout={500}
                    classNames={"fade"}
                    unmountOnExit={true}
                >
                    <div className={'square'} />
                </CSSTransition>
                <button onClick={onToggle}>点击</button>
            </div>
        </div>
    )
}

export default App;
