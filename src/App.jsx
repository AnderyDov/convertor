import { useState } from 'react';
import './App.css';
import script from './script';
import Sun from './assets/sun.svg';
import Moon from './assets/moon.svg';

export default function App() {
    let [themes, setThemes] = useState(false);
    let [numbersInp, setNumbersInp] = useState('');
    let [show, setShow] = useState('');

    String.prototype.script = script;

    function handlerInput(e) {
        setNumbersInp(e.target.value);
        setShow(e.target.value.script());
    }

    let out = (
        <div
            className='app relative flex flex-col h-full items-center font-mono p-5'
            data-theme={themes ? 'autumn' : 'dark'}
            // data-theme='dark'
        >
            <button
                className='absolute right-[100px] top-[100px] btn btn-sm btn-circle glass text-neutral'
                onClick={() => setThemes(!themes)}
            >
                {themes ? <Sun className='icon' /> : <Moon className='icon' />}
            </button>
            <input
                type='number'
                placeholder='Введите число'
                className='input input-bordered w-full max-w-xs mt-[30vh] m-3'
                value={numbersInp}
                onInput={handlerInput}
            />
            <p>{show}</p>
        </div>
    );

    return out;
}
