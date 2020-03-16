import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { render } from '@testing-library/react';
import App from "./App"


ReactDom.render(<App/>,document.getElementById("root"))

