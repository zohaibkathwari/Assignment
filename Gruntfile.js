module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            src: {
                files: ['index.html', 'javascript/app.js', 'css/app.css','css/app.scss', 'Gruntfile.js'],
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'index.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './',
                    injectChanges: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync', 'watch']);
};
