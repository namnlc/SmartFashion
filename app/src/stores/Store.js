import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

class Store {
  @observable value = 0;

  @action increment() {
    this.value++;
  }
  @action decrement() {
    this.value--;
  }
}
export default Store;
