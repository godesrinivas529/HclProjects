let wordCount = (string) => {
    let count = 1;
   let i = 1;
   console.log(string.length);
    for( ; i<=string.length; ){
        if(string[i] >= 'A' && string[i] <= 'Z'){
            count ++;
        }
        i++;
    }
    return `given string => ${string} 
            word count => ${count}`;
}
console.log(wordCount('welcomeToDailyCodingChallengeSrinivas'));