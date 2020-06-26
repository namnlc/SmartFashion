// src/stores/counter-store.tsx
import {observable, action} from 'mobx';
import {useLocalStore} from 'mobx-react';
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
