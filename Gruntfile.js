// Workaround for autoprefixer

var path = require('path');

var rootPath = path.resolve('');

module.exports = function (grunt) {
    'use strict';


    grunt.initConfig({
        'string-replace': {
            image: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['md/*.md'],
                    dest:  'src/computeds',
                    filter: 'isFile'
                }],
                options: {
                    replacements: [{
                        pattern: /Images\//g,
                        replacement: 'http://reportportal.github.io/documentation/Images/'
                    }]
                }
            }
        },
        copy: {
            images: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['Images/**'],
                    dest: 'build/'
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
            'string-replace',
            'assemble',
            'copy:images',
        ]
    );
};
