'use strict';

module.exports = {
    
    'browserPort': 9000,
    'UIPort': 9001,
    'serverPort': 9002,

    'lib': {
        'src': 'app/lib/**/*.js',
        'dest': 'build/lib'
    },

    'styles': {
        'src': 'app/styles/**/*.scss',
        'dest': 'build/css'
    },

    'scripts': {
        'src': ['app/scripts/**/*.js'],
        'dest': 'build/js',
        'main': 'app/scripts/main.js'
    },

    'views': {
        'src': 'app/**/*.jade',
        'dest': 'build'
    },

    'images': {
        'src': 'app/images/**/*',
        'dest': 'build/images'
    },

    'fonts': {
        'src': 'app/fonts/**/*',
        'dest': 'build/fonts'

    },

    'dist': {
        'root': 'build'
    },

    'icons': {
        'src': 'app/icons/*',
        'dest': 'build/icons'
    },

    'src': 'app/',

    extras: ['app/robots.txt', 'app/favicon.ico', 'app/icons/*']
};