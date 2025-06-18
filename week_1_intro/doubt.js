const obj = {
    firstName: 'Narendra',
    lastName: 'Mishra',

    get fName() {
        return this.firstName
    },

    get lName() {
        return this.lastName
    },

    set lName(name) {
        this.lastName = name
    },
}
console.log(obj.lName)
obj.lName = 'Mourya'
obj.lName = console.log(obj.lName)
console.log(obj.lName)
