// src/stores/counter-store.tsx
import {observable, action, computed} from 'mobx';

export class SignStore {
  @observable count = 0;
  Email = 'nam@gmail.com';
  Password = '12345678';

  @action
  onSubmit() {
    this.Email = 'name@g.com';
    this.Password = '12345678';
  }
  @action
  increment() {
    this.count++;
  }
  @action
  decrement() {
    this.count--;
  }

  @computed
  get doubleCount() {
    return this.count * 2;
  }
}
