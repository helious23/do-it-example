import React, { PureComponent } from 'react';

export default class ScrollSpy extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }
  setRef(ref) {
    this.ref = ref;
  }
  checkPosition() {
    console.log(window.innerHeight);
    console.log(this.ref.getBoundingClientRect().top);
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition);
    this.checkPosition();
  }
  componentWillMount() {
    window.removeEventListener('scroll', this.checkPosition);
  }

  render() {
    return <div ref={this.setRef} style={{ height: '1000vh' }}></div>;
  }
}
