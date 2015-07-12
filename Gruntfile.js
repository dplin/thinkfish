module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            lib:{
                src: [
                    'public/js/flexslider.js',
                    'public/js/foundation.js',
                    'public/js/main.js',
                    'public/js/angular.js',
                    'public/js/router.es5.js',
                    'public/js/angular-animate.js'
                ],
                dest: 'build/lib.js',
            },
            js:{
                src: [
                    'app/thinkfish-app.js',
                    'app/**/*.js'
                ],
                dest: 'build/app.js',
            },
            css:{
                src: [
                    'public/css/foundation.css',
                    'public/css/flexslider.css',
                    'public/css/styles.css'
                ],
                dest: 'build/styles.css',
            }
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! Author: Derek Lin; <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            lib:{
                files: {
                    'public/js/lib.min.js': ['build/lib.js']
                }
            },
            js:{
                files: {
                    'public/js/app.min.js': ['build/app.js']
                }
            }
        },
        cssmin: {
            css:{
                files: [{
                    dest: 'public/css/styles.min.css',
                    src: ['build/styles.css']
                }]
            }
        },
        compass: {
            scss:{
                options:{
                    sassDir: 'scss',
                    cssDir: 'public/css',
                    outputStyle: 'compressed',
                    cacheDir: '/temp/sass-cache'
                }
            }
        },
        watch: {
            compass:{
                options: { livereload: true },
                files: ['scss/**/*.{scss,sass}'],
                tasks: ['compass']
            },
            js:{
                files: ['app/**/*.js'],
                tasks: ['concat:js', 'uglify:js']
            },
            lib:{
                files: ['public/js/**/*.js'],
                tasks: ['concat:lib', 'uglify:lib']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Build all files.  Concat .js & .css -> minify js -> minify css
    grunt.registerTask('production', ['concat', 'uglify', 'cssmin']);
    // Default
    grunt.registerTask('default', ['watch']);
};
