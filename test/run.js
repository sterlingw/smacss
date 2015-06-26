module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['browserify', 'jasmine'],
        files: [
            'src/smacss.es6.js',
            'test/smacss.spec.js'
        ],
        preprocessors: {
            'src/smacss.es6.js': ['browserify'],
            'test/smacss.spec.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },
        browsers: ['PhantomJS'],
        plugins: [
            require('karma-browserify'),
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('babelify')
        ]
    });
};