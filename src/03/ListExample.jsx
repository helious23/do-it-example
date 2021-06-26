import React, { PureComponent } from 'react';

export default class ListExample extends PureComponent {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price, index) => <div key={index}>가격: {price}원</div>);
    return (
      <div>
        <labe>가격 목록</labe>
        {prices}
      </div>
    );
  }
}
