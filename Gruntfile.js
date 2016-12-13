// Workaround for autoprefixer

var path = require('path');

var rootPath = path.resolve('');

module.exports = function (grunt) {
    'use strict';


    grunt.initConfig({
        copy: {
            images: {
                files: [{
                    cwd: 'src',
                    src: ['Images/**'],
                    dest: 'build',
                    filter: 'isFile'
                }]

            },
        },
        assemble: {
            options: {
                flatten: true,
                layoutdir: 'src/md/layout',
                partials: ['./*.md'],
                anchors: {
                    template: 'src/md/md-template.js'
                }
            },
            documentation: {
                options: {
                    layout: 'default.hbs'
                },
                files: {
                    'build/': ['src/md/pages/*.hbs']
                }
            }
        },
        clean: {
            build: {
                options: {force: true},
                src: rootPath + '/build/*'
            }
        },
    });


    require('load-grunt-tasks')(grunt, {
        pattern: [
            'grunt-*',
        ]
    });

    grunt.registerTask(
        'build',
        [
            'clean:build',
            'assemble',
            'copy:images',
        ]
    );
};
