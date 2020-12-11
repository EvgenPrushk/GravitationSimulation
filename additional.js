function getRandomBetween(min, max) {
    // возвратм числа в диапазоне от max до min 
    return min + Math.floor(Math.random() * (max - min + 1));
}
// запоминание происходит только последнего вызова, если он не отличается от предыдущего
// function lastMemorize(callback) {
//     let lastKey = null;
//     let value = null;
    
//     return function (...args) {
     
//         const key = JSON.stringify(args);
//         if (key !== lastKey) {
//             value = callback(...args);
//         }
//     }

//     return value;
// }