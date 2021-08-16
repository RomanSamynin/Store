import {makeAutoObservable} from 'mobx';

export default class BasketStore {
    constructor() {
        

        this._basket = []
        this._totalPrice = []
        this._like = []
        

        
        if (((JSON.parse(localStorage.getItem('Id')))) == undefined) {
            localStorage.setItem('Id', JSON.stringify([]))
        }
        
        if (((JSON.parse(localStorage.getItem('like')))) == undefined) {
            localStorage.setItem('like', JSON.stringify([]))
        }


        

        if (this._basket == false) {
            this._basket = ((JSON.parse(localStorage.getItem('Id'))))
        }
        
        if (this._like == false) {
            this._like = ((JSON.parse(localStorage.getItem('like'))))
        } 


        makeAutoObservable(this)
    }

    setBasket(id, count) {
        const itemIndex = this._basket.findIndex(item => item.id === id)
        if (itemIndex < 0) {
            this._basket.push({ id: id, count: count})
            localStorage.setItem('Id', JSON.stringify(this._basket))
        } else {
            this._basket[itemIndex].count = count
            localStorage.setItem('Id', JSON.stringify(this._basket))
        }
    }


    deleteBasket(Id) {
        this._basket = this._basket.filter((id) => {
            return id.id !== Id
        });
        localStorage.setItem('Id', JSON.stringify(this._basket))
    }

    setTotalPrice(id, price) {
        const itemIndex = this._totalPrice.findIndex(item => item.id === id)
        
        if (itemIndex < 0) {
            this._totalPrice.push({ id: id, price: price})
        } else {
            this._totalPrice[itemIndex].price = price
        }

    }

    setLike(like) {
        const itemIndex = this._like.findIndex(item => item == like)
        if (itemIndex < 0) {
            this._like.push(like)
            localStorage.setItem('like', JSON.stringify(this._like))
        } else {
            this._like[itemIndex] = like
            localStorage.setItem('like', JSON.stringify(this._like))
        }
    }

    deleteLike(like) {
        this._like = this._like.filter((id) => {
            return id !== like
        });
        localStorage.setItem('like', JSON.stringify(this._like))
    }

    get basket() {
        return this._basket
    }

    get totalPrice() {
        return this._totalPrice
    }

    get like() {
        return this._like
    }



}
