import _ from 'lodash';
import './style.css';
import './images/image.png';
import bar from './bar';

const obj = {a: 'LOL'};

const {a = ''} = {...obj};

console.log(a);

bar('This is index Page');
console.log(_.join(['Hello', 'webpack'], ' '));
