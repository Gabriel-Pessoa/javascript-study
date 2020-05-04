const number = {
    _value : 0,

    get soma() {
        return console.log(this._value)
    },

    set soma(number) {
       this._value = this._value + number
    }
    
}

