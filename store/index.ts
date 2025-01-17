import { makeAutoObservable } from 'mobx'

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  // state
  public isMobile = false
}

const store = new Store()
export default store
