'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('generator-zumean') + ' generator!'
    ));
    this.log('This generator will help you to scaffolding a great MEAN application. You just have to answer a few questions!');
      
    return this.prompt([{
      type    : 'input',
      name    : 'project_name',
      message : 'What is the name of your project?',
      default : this.appname // Default to current folder name
    },{
      type    : 'input',
      name    : 'company',
      message : 'Who are you?',
      default : 'Acme Company'
    },{
      type    : 'input',
      name    : 'desc',
      message : 'Describe your project in few words:',
      default : 'A great project'
    },{
      type: 'confirm',
      name: 'useAngularJS',
      message: 'Would you like to use AngularJS?',
      default: true
    },{
      type: 'confirm',
      name: 'useNode',
      message: 'Would you like to use Node.js and MongoDB?',
      default: true
    },{
        type    : 'input',
        name    : 'db_name',
        message : 'If you decided to have a back-end, enter the name of your DB: (otherwise press enter)',
        default : 'test'
    }]).then(function (answers) {
      this.project_name = answers.project_name;
      //this.log('app name', this.project_name);
      this.company = answers.company;
      //this.log('company', this.company);
      this.desc = answers.desc;
      //this.log('desc', this.desc);
      this.useAngular = answers.useAngularJS
      //this.log('useAngular', this.useAngular);
      this.useNode = answers.useNode
      //this.log('useNode', this.useNode);
      this.db_name = answers.db_name
      //this.log('db_name', this.db_name);
    }.bind(this));
  },

  writing: function () {
    if(this.useAngular){
        this.fs.copy(
          this.templatePath('FE/'),
          this.destinationPath('FE/')
        );
        this.fs.copy(
          this.templatePath('FE/.jshintrc'),
          this.destinationPath('FE/.jshintrc')
        );
        this.fs.copyTpl(
          this.templatePath('FE/package.json'),
          this.destinationPath('FE/package.json'),
          { project_name: this.project_name }
        );
        this.fs.copyTpl(
          this.templatePath('FE/bower.json'),
          this.destinationPath('FE/bower.json'),
          { project_name: this.project_name,
            desc: this.desc,
            company: this.company}
        );
        this.fs.copyTpl(
          this.templatePath('FE/app/index.html'),
          this.destinationPath('FE/app/index.html'),
          { project_name: this.project_name }
        );
    }
    if(this.useNode){
        this.fs.copy(
          this.templatePath('BE/'),
          this.destinationPath('BE/')
        );
        this.fs.copyTpl(
          this.templatePath('BE/app.js'),
          this.destinationPath('BE/app.js'),
          { db_name: this.db_name}
        );
        this.fs.copyTpl(
          this.templatePath('BE/package.json'),
          this.destinationPath('BE/package.json'),
          { project_name: this.project_name}
        );
        if(this.useAngular){
            this.fs.delete(
                'BE/routes/index_without_fe.js'
            );
            this.fs.move(
                'BE/routes/index_with_fe.js',
                'BE/routes/index.js'
            );
        }else{
            this.fs.delete(
                'BE/routes/index_with_fe.js'
            );
            this.fs.move(
                'BE/routes/index_without_fe.js',
                'BE/routes/index.js'
            );
        }
        
    }
  },

  install: function () {
    var npmdir = process.cwd() + '/FE';
    process.chdir(npmdir);
    this.installDependencies();
  }

});
