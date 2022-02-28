

const calc = {
    total: 0,
    add(val){
        this.total = this.total + val
        return this
    },
    multiply(val){
        this.total = this.total * val
        return this
    },
    subtract(val){
        this.total = this.total - val
        return this
    }
}

const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total)
