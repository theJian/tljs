import tl from '../src';
import fixturesTest from '../fixtures';

describe('tl', () => {
  it('should return a string', () => {
    const t = tl`hello`;
    expect(t()).toBe('hello');
  });

  it('should escape new line', () => {
    const t = tl`hello\nworld`;
    expect(t()).toBe('hello\nworld');
  });

  it('should escape double quote', () => {
    const t = tl`"hello" \"world\"`;
    expect(t()).toBe('"hello" "world"');
  });

  it('should support embedded javascript', () => {
    const t = tl`
      <div>
      ${' if (title) { '}
        <h1>${' echo(title) '}</h1>
      ${' } '}
        <hr/>
      ${' posts.forEach(post => { '}
        <p>${' echo(post.content) '}</p>
      ${' }) '}
      </div>
    `;
    expect(t({
      title: 'title',
      posts: [
        { content: 'are' },
        { content: 'you' },
        { content: 'ok' }
      ]
    })).toMatchSnapshot();
  });

  it('should include another template', () => {
    expect(fixturesTest({
      valA: 'value_a',
      valB: 'value_b',
    })).toMatchSnapshot();
  });
});
