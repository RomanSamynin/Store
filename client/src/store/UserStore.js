import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        
        this._isAuth = false
        this._user = {}
        this._userID = 0;

        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setUserID(userID) {
        this._userID = userID.id
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get userID() {
        return this._userID
    }
}

