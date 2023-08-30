let array = []
let array2 = []
let array3 = []
let array4 = []
let array5 = []
let array6 = []
let obj = {
    name:'Ogromnuy Bobr',
    name2:'Ogromnuy ',
    name1:'Bobr',
    color1:'blue',
    color2:'brown',
    color:'green',
    gender1: 'men',
    gender2: 'men',
    gender3: 'women',
    active1:'bobr active',
    notactive:'ogromnuy notactive',
    notactive1:' Ogromnuy Bobr notactive',
    email:'men@gmail.com',
    email1:'women@gmail.com',
    agemin:18,
    agemax:73
}
let {name,email1,  agemax,agemin ,email, gender1, notactive,notactive1, gender2, gender3, name2, name1,color ,color2 , color1} = obj
array.push(name, name2, name1)
array3.push( gender1 , gender2, gender3)
array2.push(color ,color2 , color1)
array5.push(email1 ,email)
array6.push(agemax,agemin)
array4.push(notactive,notactive1)
console.log(array,array2,array3,array4, array5, array6);