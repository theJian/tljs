# tljs
Tiny template engine powered by es6 template literals

tljs is a tiny template engine (< 30 lines) that generates string with plain JavaScript.


## Install
```
npm install tljs
```

## Usage

```JavaScript
import tl from 'tljs';

(tl`
<div>
  ${'if (username) {'}
    <p>${'echo(username)'}</p>
  ${'}'}
</div>
`)({
    username: 'theJian'
  })
  
// output
<div>

  <p>theJian</p>
  
</div>
```

## License
MIT@theJian
