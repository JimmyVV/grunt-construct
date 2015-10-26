// Generated on 2015-10-01 using
// generator-webapp 1.1.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required grunt tasks
    //用来帮助手动加载npm包命令
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        postcss:'grunt-postcss'     
            // copy:''
    });

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,


        // Watches files for changes and runs tasks based on the changed files
        watch: {
            // bower: {
            //   files: ['bower.json'],
            //   tasks: ['wiredep']
            // },
            // babel: {
            //   files: ['<%= config.app %>/scripts/{,*/}*.js'],
            //   tasks: ['babel:dist']
            // },
            // babelTest: {
            //   files: ['test/spec/{,*/}*.js'],
            //   tasks: ['babel:test', 'test:watch']
            // },
            gruntfile: {
                files: ['Gruntfile.js']
            }
            // sass: {
            //   files: ['<%= config.app %>/sass/{,*/}*.{scss,sass}'],
            //   tasks: ['sass', 'postcss']
            // },
            ,styles: {
                files: ['<%= config.app %>/styles/{,*/}*.css'],
                tasks: ['postcss']
            }
            // ,copy: {
            //     files: ['<%= config.app%>/styles/{,*/}*.css',
            //         '<%= config.app%>/js/**/*.js',
            //         '<%= config.app%>/img/**/*.{jpg,png,jpeg,gif}'
            //     ],
            //     tasks: ['copy']
            // }
            // compass:{
            //   files:['<%=config.app%>/{,*/}*.{scss,sass}'],
            //   tasks:['compass:dist']
            // }
        },
        
        browserSync: {
            options: {
                notify: false,
                background: true,
                watchOptions: {
                    ignored: ''
                }
            },
            livereload: {
                options: {
                    files: [
                        '<%= config.app %>/{,*/}*.html',
                        '<%= config.app %>/styles/{,*/}*.css',
                        '<%= config.app %>/images/{,*/}*',
                        '<%= config.app %>/scripts/{,*/}*.js'
                    ],
                    port: 9000,
                    server: {
                        baseDir: ['.tmp', config.app],
                        routes: {
                            '/bower_components': './bower_components'
                        }
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    open: false,
                    logLevel: 'silent',
                    host: 'localhost',
                    server: {
                        baseDir: ['.tmp', './test', config.app],
                        routes: {
                            '/bower_components': './bower_components'
                        }
                    }
                }
            },
            dist: {
                options: {
                    background: false,
                    server: '<%= config.dist %>'
                }
            }
        },

        // Empties folders to start fresh


        // Mocha testing framework configuration options


        // Compiles ES6 with Babel

        // Compiles Sass to CSS and generates necessary files if requested


        postcss: {
            options: {
                map: true,
                processors: [
                    // Add vendor prefixed styles
                    require('autoprefixer')({
                        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
                    })
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%=config.app%>/styles/',
                    src: '{,*/}*.css',
                    dest: '<%=config.app%>/styles/'
                }]
            }
        },





        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: [
                    '<%= config.dist %>',
                    '<%= config.dist %>/images',
                    '<%= config.dist %>/styles'
                ]
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    // true would impact styles with attribute selectors
                    removeRedundantAttributes: false,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },


        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%=config.app%>/img/',
                    dest: '../img',
                    src: [
                        '**'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%=config.app%>/js/',
                    dest: '../js',
                    src: [
                        '**'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%=config.app%>/fonts/',
                    dest: '../fonts',
                    src: [
                        '**'
                    ]
                    },
                //  {
                //     expand: true,
                //     dot: true,
                //     cwd: '<%=config.app%>/',
                //     dest: '../application/views/',
                //     src: [
                //         '*.html'
                //     ],
                //     rename: function(dest, src) {
                //         return dest + src.replace('.html', '.php');
                //     }
                // }, 
                {
                    expand: true,
                    dot: true,
                    cwd: '<%=config.app%>/styles/',
                    dest: '../styles',
                    src: [
                        '**'
                    ]
                }]
            }
        }
    });
    



    grunt.registerTask('tool', [
        // 'compass',
        'browserSync:livereload',
        // 'copy:dist',
        'postcss',
        'watch'
    ]);
    grunt.registerTask('default',[
        // 'copy:dist',
        'postcss',
        'watch'])
    // grunt.registerTask('copy',['copy:dist']);
};
