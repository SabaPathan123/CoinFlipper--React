function choice(arr){
    let randomIdx = Math.floor(Math.random()*2);
    return arr[randomIdx];
}

export { choice };