function getRandomBetween(min, max) {
    // возвратм числа в диапазоне от max до min 
    return min + Math.floor(Math.random() * (max - min + 1));
}