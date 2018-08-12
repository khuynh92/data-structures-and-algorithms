const repeatedWord = require('../../lib/repeated_word.js');

describe('repeated word', () => {

  it('should find a repeated word for a string', () => {
    let str = 'Once upon a time, there was a brave princess who...';

    expect(repeatedWord(str)).toBe('a');
  });

  it('should find a repeated word for a string (uppercase edgecase)', () => {
    let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

    expect(repeatedWord(str)).toBe('it');
  });

  it('should find a repeated word for a string (uppercase extra characters edgecase)', () => {
    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'

    expect(repeatedWord(str)).toBe('summer');
  });




});