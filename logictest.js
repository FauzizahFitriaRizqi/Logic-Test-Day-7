function UniqCharacters(str){
    const seenCharacters = new Set();

    for (let char of str){
        if (seenCharacters.has(char)) {
            return false;
        }

        seenCharacters.add(char);
    }
        return true;
}

console.log(UniqCharacters("abcdefg")); // output true
console.log(UniqCharacters("hello")); // output false