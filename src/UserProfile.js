import Button from './components/button'
import Block from './Block'
import compile from './Templator'

const template = `
<div>
    {{ userName }}
    {{ button }}
</div>
`

export default class UserProfile extends Block {
  constructor() {
    super('div', {
      userName: 'Login 1',
      button: '123',
    })
  }

  render() {
    // const button = new Button({
    //   child: 'Text 2',
    // })

    // console.log(button._element)
    return compile(template, this.props)
  }
}
