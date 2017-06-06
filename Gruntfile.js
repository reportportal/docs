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
                        replacement: 'http://reportportal.io/documentation/Images/'
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
            md: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['md/*.md'],
                    dest:  'src/computeds',
                    filter: 'isFile'
                }]
            }
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
            images: {
                options: {force: true},
                src: rootPath + '/build/Images*'
            },
            build: {
                options: {force: true},
                src: rootPath + '/build/*'
            },
            md: {
                options: {force: true},
                src: rootPath + '/src/computeds/md/*'
            }
        },
        watch: {
            images: {
                files: [
                    'src/Images/**/*.*'
                ],
                tasks: [
                    'clean:images',
                    'copy:images'
                ]
            },
            md: {
                files: [
                    'src/md/**/*.*'
                ],
                tasks: [
                    'clean:md',
                    'copy:md',
                    'assemble'
                ]
            }
        }
    });


    require('load-grunt-tasks')(grunt, {
        pattern: [
            'grunt-*',
        ]
    });

    grunt.registerTask(
        'develop',
        [
            'clean:build',
            'clean:md',
            'copy:md',
            'assemble',
            'copy:images',
            'watch'
        ]
    );
    grunt.registerTask(
        'build',
        [
            'clean:build',
            'clean:md',
            'string-replace',
            'assemble',
            'copy:images',
        ]
    );
};
