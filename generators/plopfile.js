module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'application component logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [{
            type: 'add',
            path: '../components/{{pascalCase name}}/index.tsx',
            templateFile: 'templates/index.tsx.hbs'
        }]
    });
};