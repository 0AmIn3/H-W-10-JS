let arr = [
    {
        name: 'morgen',
    },
    {
        name: 'klava koka'
    },
    {
        name: 'baskov'
    },
    {
        name: 'filip'
    },
    {
        name: 'yulduz'
    },
    {
        name: 'leps'
    },
    {
        name: 'skriptonit'
    }
]
for (let item of arr) {
    item.age = Math.floor(Math.random() * 50)
}
let sred = arr.reduce((a, b) => a + b.age , 0) / arr.length


console.log(arr)

console.log(Math.floor(sred))







