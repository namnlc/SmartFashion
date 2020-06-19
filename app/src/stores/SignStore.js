// src/stores/counter-store.tsx
import {observable, action} from 'mobx';

export class SignStore {
  @observable isLoggedIn = false;

  @action
  onPressLogin() {
    this.isLoggedIn = true;
  }
  onPressLogout() {
    this.isLoggedIn = false;
  }
}
