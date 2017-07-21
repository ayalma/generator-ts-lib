/**
 * Created by ali on 7/21/17.
 */
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // note: arguments and options should be defined in the constructor.
    constructor(args, opts) {
        super(args, opts);

        // This method adds support for a `--coffee` flag
        this.option('coffee');


    }
};

module.exports = Generator.extend({

    initializing() {
        this.scriptSuffix = (this.options.coffee ? ".coffee": ".js");
       console.log(this.options.coffee);

    },

    prompting() {
       return this.prompt([
           {
               type: 'input',
               name: 'name',
               message: 'pls enter your lib name',
               default: this.appname
           }
       ]).then(answers=>{
           this.appname =  answers.name;
       });
    },

    writing(){

        this.fs.copyTpl(this.templatePath('_package.json'),this.destinationPath('package.json'),{name:this.appname});
        this.fs.copyTpl(this.templatePath('_tsconfig.json'),this.destinationPath('tsconfig.json'));
        this.fs.copyTpl(this.templatePath('_webpack.config.js'),this.destinationPath('webpack.config.js'),{libName:this.appname});
        this.fs.copyTpl(this.templatePath('_index.ts'),this.destinationPath('./src/index.ts'));
        this.fs.copyTpl(this.templatePath('.npmignore'),this.destinationPath('.npmignore'));
        this.fs.copyTpl(this.templatePath('.gitignore'),this.destinationPath('.gitignore'));
    }

});
