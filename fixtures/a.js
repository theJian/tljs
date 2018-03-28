import tl from '../src';

export default tl`
  <div>
    <h1>A</h2>
    <p>${' echo(valA) '}</p>
    ${' include("./b.js", { val: valB }) '}
  </div>
`;
