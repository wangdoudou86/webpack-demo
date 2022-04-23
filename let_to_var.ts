import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';

const code = `let a = 'let'; let b = 5;`
const ast = parse(code, {sourceType: 'module'})  //这一步会得到一个AST

traverse(ast, {
    enter: item => {
        if(item.node.type === 'VariableDeclaration'){
            if(item.node.kind === 'let'){
                item.node.kind = 'var'
            }
        }
    }
})

const result = generate(ast, {}, code)
console.log(result.code);
