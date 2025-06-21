const obj = {
    x: 1,
    y: 1,
    set nums(xCommay) {
      numbers = xCommay.split(',') // numbers = ['2', '3']
      console.log(numbers)
      this.x = numbers[0]
      this.y = numbers[1]
      console.log('Inside set method', this.x, this.y)
    },
    get nums() {
      return this.x + ',' + this.y
    },
    xPowery: function () {
      let result = 1
      console.log(typeof(this.x))
      for (let i = 1; i <= this.y; i++) {
        
        
        result = result * this.x //result = 8
      }
      return result
    },
  }
  obj.nums = '2,3'
  console.log(obj.xPowery())