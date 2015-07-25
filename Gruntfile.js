module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc', // Defined options and globals.
            },
            init: [
                './Gruntfile.js',
                './public/components/**/*.js',
                './public/js/**/*.js'
            ],
        },
        concat: {
            lib:{
                src: [
                    'public/js/angular.js',
                    'public/js/router.es5.js',
                    'public/js/angular-animate.js',
                    'public/js/angular-resource.js',
                    'public/js/animation.gsap.js',
                    'public/js/main.js',
                    'public/js/particles.js',
                    'public/js/scroll.js',
                    'public/core.js',
                    'public/components/**/*.js',
                    'public/services/*.js',
                    'public/filters/*.js',
                    'public/directives/*.js'
                ],
                dest: 'build/lib.js',
            },
/*            app:{
                src: [

                ],
                dest: 'build/app.js',
            },*/
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
            prod:{
                files: {
                    'public/dist/lib.min.js': ['build/lib.js']
                }
            }
/*            app:{
                files: {
                    'public/dist/app.min.js': ['build/app.js']
                }
            }*/
        },
        cssmin: {
            prod:{
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

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default
    grunt.registerTask('default', ['watch', 'jshint']);

    // Development
    grunt.registerTask('dev', ['uglify', 'cssmin']);

    // Production
    grunt.registerTask('prod', ['concat', 'uglify:prod', 'cssmin:prod']);
};
