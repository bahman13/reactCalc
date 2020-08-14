import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';
import './style.css';

//функциональный компонент, который возвращает елемент
//function Test() {
 // return React.createElement('button', null, 'привет мир')
//}
// const Test = () => React.createElement('button', null, 'привет мир');

//то же, но на чистом JSX
/*  const Test2 = () => <button>Привет мир</button>  */
/* function Test2() {
  return <button>Привет мир</button>;
} */
/*
//функциональный компонент
const Header = ({ text }) => <h1 id='hi'>{text}</h1>;
 // React.createElement('h1', { id: 'hi' }, props.text);

const Element = <p>Параграф</p>;
 // React.createElement('p', null, 'Параграф');

class Main extends React.Component {
  render() {
 //   console.log(this.props);
    return (
      <div className="main">
        <Header text={'свойство текст'+this.props.count}/>
        {Element}
      </div>
    )  
  //  React.createElement('div', { className: 'main' },
 //   React.createElement(FunctionComponents, {text:'свойство текст'}), Element)
  }
}
*/

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
