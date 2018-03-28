const SECRET_VAR_NAME = '____';
const ECHO_FUN_NAME = 'echo';
const INCL_FUN_NAME = 'include';
const REQR_FUN_NAME = 'require';

export default function tljs(strs, ...codes) {
  return function(values = {}) {
    let args = Object.keys(values);
    let functionBody = [
      `var ${SECRET_VAR_NAME} = []`,
      `var ${ECHO_FUN_NAME} = Array.prototype.push.bind(${SECRET_VAR_NAME})`,
      `var ${INCL_FUN_NAME} = function(){${ECHO_FUN_NAME}(${REQR_FUN_NAME}(arguments[0])(arguments[1]))};`
    ];
    codes
      .concat(`return ${SECRET_VAR_NAME}.join('')`)
      .forEach(function(code, i) {
        let data = strs.raw[i].replace(/\n/g, '\\n').replace(/\\?"/g, '\\"');
        functionBody.push(`${ECHO_FUN_NAME}("${data}")`);
        functionBody.push(code)
      });
    functionBody = functionBody.join('\n');
    return (new Function(...args, functionBody))(...args.map(key => values[key]));
  }
}
