import Block from '../../Block';

import Templator from '../../test';
import { template } from './template';

export default class Button extends Block {
    constructor(props) {
        super('button', props);
    }

    render() {
        return new Templator(template).compile(this.props);
    }
}
