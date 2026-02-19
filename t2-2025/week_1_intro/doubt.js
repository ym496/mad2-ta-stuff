const obj = {
    firstName: 'Narendra',
    

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
