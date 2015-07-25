module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            lib:{
                src: [
                    'public/js/angular.js',
                    'public/js/router.es5.js',
                    'public/js/angular-animate.js',
                    'public/js/animation.gsap.js',
                    'public/js/main.js',
                    'public/js/particles.js',
                    'public/js/scroll.js'
                ],
                dest: 'build/lib.js',
            },
            app:{
                src: [
                    'public/core.js',
                    'public/components/**/*.js',
                    'public/services/*.js',
                    'public/filters/*.js',
                    'public/directives/*.js'
                ],
                dest: 'build/app.js',
            },
            css:{
                src: [
                    'public/css/*.css'
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
                    'public/dist/lib.min.js': ['build/lib.js']
                }
            },
            app:{
                files: {
                    'public/dist/app.min.js': ['build/app.js']
                }
            }
        },
        cssmin: {
            css:{
                files: [{
                    dest: 'public/dist/styles.min.css',
                    src: ['build/styles.css']
                }]
            }
        },
        compass: {
            scss:{
                options:{
                    sassDir: 'public/scss',
                    cssDir: 'public/css',
                    outputStyle: 'compressed',
                    cacheDir: '/temp/sass-cache'
                }
            }
        },
        watch: {
            compass:{
                options: { livereload: true },
                files: ['public/scss/**/*.{scss,sass}'],
                tasks: ['compass']
            }
//            ,
//            js:{
//                files: ['public/**/*.js', 'public/*.js'],
//                tasks: ['concat:js', 'uglify:js']
//            }
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
