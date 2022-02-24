class Snack { 
    
    number
    name
    price
    calories
    
    constructor(number, name, price, calories) {
        this.number = number
        this.name = name
        this.price = price
        this.calories = calories
    }
  
    itemDetails()
    {
        return "Item # " + this.number + 
                " - " + this.name +
                " currently costs " + this.price
    }
  }

  module.exports = Snack
