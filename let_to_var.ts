import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';

const code = `let a = 'let'; let b = 5;`
const ast = parse(code, {sourceType: 'module'})  //这一步会得到一个AST
console.log(ast);
