const images = {
    1 : require('./1.png'),
    2 : require('./2.png'),
    3 : require('./3.png'),
    4 : require('./4.png'),
    5 : require('./loginBg2.png'),
}

export default function RandomImagePicker(){
    let min = 1;
    let max = 5;
    let random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return images[random]
}
   
