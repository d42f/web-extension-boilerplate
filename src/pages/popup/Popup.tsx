import logo from '@assets/logo.svg';
import './Popup.css';

export const Popup = (): JSX.Element => {
  return (
    <div className="wrapper">
      <header className="flex flex-col items-center justify-center text-white">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/pages/popup/Popup.jsx</code> and save to reload.
        </p>
        <a className="text-blue-400" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React!
        </a>
      </header>
    </div>
  );
};
