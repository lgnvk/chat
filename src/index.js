import { sum } from './modules/sum';

const root = document.querySelector('#root');

root.textContent = sum(6, 2, 2).toString();