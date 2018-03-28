# tljs
Tiny template engine powered by es6 template literals

- Super small (< 30 lines).
- Pure JavaScript syntax.
- Template includes


## Install
```
npm install tljs
```

## Usage

```JavaScript
import tl from 'tljs';

// template
const t = tl`
<div>
${' if (username) { '}
  <p>${' echo(username) '}</p>
${' } '}
</div>`;

// render
t({ username: 'theJian' });

  
// output
<div>

  <p>theJian</p>
  
</div>


/////////////////////////// Generate JSON ////////////////////////////////

const jsonTl = tl`
{
  username: ${' echo(username) '}
}`;

jsonTl({ username: 'theJian' });
```

## API

### Echo

Instead of defining some fancy syntax for inserting variables to the output, `echo`, a good old JavaScript function, has provided to handle this job.

```JavaScript
`Here is the ${' echo(username) '}`
```

### Include

To insert contents from another file.
```JavaScript
<div>
${' include("./header.js", { title: title }) '}
${' posts.forEach(post => { '}
  <p>
  ${ 'include("./post.js", { post: post }) '}
  </p>
${' } '}
</div>
```
To use this feature you have to pass a `require` function when rendering. [See Example](fixtures/index.js).
The first argument is the path of included file, the second is the values passed to it.


## License
MIT@theJian
