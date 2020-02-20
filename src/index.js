import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { render } from '@testing-library/react';


ReactDom.render(


<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>,
document.getElementById("root")

)