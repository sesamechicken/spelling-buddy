import { calculateScore } from './';

describe('calculateScore method', () => {
  it('should show a score of 100% if all entries are correct', () => {
    const data = {
      words: ['milk', 'bread', 'sugar'],
      answers: ['milk', 'bread', 'sugar']
    };
    const results = calculateScore(data);
    // I hate this and will make it more clear by ripping out the score into
    // a different method from the right vs wrong words
    expect(results.props.children[0].props.children[1].props.children[0]).toEqual(100);
  });
  it('should show a score of 67% if 2 out of 3 are correct', () => {
    const data = {
      words: ['milk', 'bread', 'sugar'],
      answers: ['milk', 'bread', 'suuuuuugar']
    };
    const results = calculateScore(data);
    
    expect(results.props.children[0].props.children[1].props.children[0]).toEqual(67);
  });
  it('should show a score of 0% if 3 out of 3 are wrong', () => {
    const data = {
      words: ['milk', 'bread', 'sugar'],
      answers: ['cereal', 'toast', 'coffee']
    };
    const results = calculateScore(data);
    
    expect(results.props.children[0].props.children[1].props.children[0]).toEqual(0);
  });
});