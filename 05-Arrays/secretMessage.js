let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove last string of the array
secretMessage.pop();
console.log(secretMessage.length);

// add words to end of the array
secretMessage.push('to', 'Program');

// access the word and replace it
let easily = secretMessage.indexOf('easily');
easily = 'right';

// remove first element
secretMessage.shift();

// add new element to the beginning
secretMessage.unshift('Programming');

// remove string with certain indices and add new word
secretMessage.splice(6, 5, 'know')
console.log(secretMessage.join(' '));



