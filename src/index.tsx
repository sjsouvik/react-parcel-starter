import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

// Creating React elements without using JSX
const heading = React.createElement('section', { className: 'item' }, [
    React.createElement('h1', {}, 'Heading for the section'),
    React.createElement('p', {}, 'Description'),
]);

// Creating React element using JSX
const headingJSX = (
    <section className="item">
        <h1>Heading for the section</h1>
        <p>Description</p>
    </section>
);

const HeadingComponent = () => (
    <>
        {heading}
        <h1>React functional component</h1>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
