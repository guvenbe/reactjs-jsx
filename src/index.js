//import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component

// function getButtonText() {
//     return 'Click on me!';
// }

const App  =  () => {
    const buttonText = { text :'Click Me!'};
    const style = {backgroundColor:'blue', color: 'white'}
    const labelText= 'Enter name: ';
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}:</label>
            <input id="name type=" text />
            <button style={style}>
                {/*{buttonText}*/}
                {buttonText.text}
            </button>
        </div>
    );
};

//Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
