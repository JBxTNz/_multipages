import React, { useState, useEffect } from 'react';
import './Animation.css';
import basketball from '../../../public/img/basketball.png';
import football from '../../../public/img/football.png';
import volleyball from '../../../public/img/volleyball.png';
import human from '../../../public/img/WorathepTara.png';
import cartoon from '../../../public/img/amogus-fun.jpg';
import logo from '../../../public/img/Iboss.png';


const Ball = () => {
    const fieldWidth = 600;
    const fieldHeight = 400;
    const diameter = 80;
    const maxLeft = fieldWidth - diameter - 2;
    const maxTop = fieldHeight - diameter - 2;
    const vx = 5;
    const vy = 5;
    const rotationSpeed = 5;

    const [running, setRunning] = useState(false);
    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [selectedButton, setSelectedButton] = useState('None');

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case ' ':
                    runClick();
                    break;
                case '0':
                    setNone();
                    break;
                case '1':
                    setBasketball();
                    break;
                case '2':
                    setFootball();
                    break;
                case '3':
                    setVolleyball();
                    break;
                case '4':
                    setHuman();
                    break;
                case '5':
                    setCartoon();
                    break;
                case '6':
                    setLogo();
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (running) {
                calculate();
            }
        }, 25);
        return () => clearInterval(interval);
    }, [running, x, y, goRight, goDown]);

    const runClick = () => setRunning(!running);

    const calculate = () => {
        let newX = x;
        let newY = y;
        let newGoRight = goRight;
        let newGoDown = goDown;

        if (goRight) {
            newX += vx;
            if (newX >= maxLeft) newGoRight = false;
        } else {
            newX -= vx;
            if (newX <= 0) newGoRight = true;
        }

        if (goDown) {
            newY += vy;
            if (newY >= maxTop) newGoDown = false;
        } else {
            newY -= vy;
            if (newY <= 0) newGoDown = true;
        }

        setX(newX);
        setY(newY);
        setGoRight(newGoRight);
        setGoDown(newGoDown);
        setRotation(rotation + rotationSpeed);
    };

    const updateButtonHighlight = (buttonName) => setSelectedButton(buttonName);

    const setNone = () => updateButtonHighlight('None');
    const setBasketball = () => updateButtonHighlight('Basketball');
    const setFootball = () => updateButtonHighlight('Football');
    const setVolleyball = () => updateButtonHighlight('Volleyball');
    const setHuman = () => updateButtonHighlight('Human');
    const setCartoon = () => updateButtonHighlight('Cartoon');
    const setLogo = () => updateButtonHighlight('Logo');

    const getBackground = () => {
        switch (selectedButton) {
            case 'Basketball':
                return "url('basketball.png')";
            case 'Football':
                return "url('../../../img/football.png')";
            case 'Volleyball':
                return "url('../../../img/volleyball.png')";
            case 'Human':
                return "url('/img/WorathepTara.png')";
            case 'Cartoon':
                return "url('/img/amogus-fun.jpg')";
            case 'Logo':
                return "url('/img/Iboss.png')";
            case 'None':
                return "url('/img/red.png')";
            default:
                return "url('/img/red.png')";
        }
    };
    
    return (
        <div id="animation-container">
            <div id="animation-field" style={{ width: fieldWidth, height: fieldHeight }}>
                <div
                    id="ball"
                    style={{
                        width: diameter,
                        height: diameter,
                        backgroundImage: getBackground(),
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        left: x,
                        top: y,
                        transform: `rotate(${rotation}deg)`,
                    }}
                ></div>
            </div>
            <div id="control">
                <button id="run" className={`btn ${running ? 'btn-warning' : 'btn-success'}`} onClick={runClick}>
                    {running ? 'Pause' : 'Run'}
                </button>
                <button className={selectedButton === 'None' ? 'button-selected' : 'button-not-selected'} onClick={setNone}>None</button>
                <button className={selectedButton === 'Basketball' ? 'button-selected' : 'button-not-selected'} onClick={setBasketball}>Basketball</button>
                <button className={selectedButton === 'Football' ? 'button-selected' : 'button-not-selected'} onClick={setFootball}>Football</button>
                <button className={selectedButton === 'Volleyball' ? 'button-selected' : 'button-not-selected'} onClick={setVolleyball}>Volleyball</button>
                <button className={selectedButton === 'Human' ? 'button-selected' : 'button-not-selected'} onClick={setHuman}>Human</button>
                <button className={selectedButton === 'Cartoon' ? 'button-selected' : 'button-not-selected'} onClick={setCartoon}>Cartoon</button>
                <button className={selectedButton === 'Logo' ? 'button-selected' : 'button-not-selected'} onClick={setLogo}>Logo</button>
            </div>
        </div>
    );
};

export default Ball;
