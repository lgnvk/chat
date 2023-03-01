import Button from "./components/button";
import { render } from "./utils/renderDOM";

const button = new Button({
    className: 'my-class',
    child: 'Click me'
});

render('#root', button);

setTimeout(() => {
    button.setProps({
      className: 'otherClass',
      child: 'Click me, please',
    });
  }, 1000);