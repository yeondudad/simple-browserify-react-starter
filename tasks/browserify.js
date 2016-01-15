const path = require('path');
const browserify = require('browserify');
const babelify = require('babelify');
const mold = require('mold-source-map');
const exorcist = require('exorcist');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const pkg = require('../package.json');

const isDevelopment = process.env.NODE_ENV !== 'production';
const srcPath = 'js/';
const buildPath = 'build/assets/js';
const filename = pkg.name + '-' + pkg.version;
const libs = [
    'react',
    'react-dom',
    'react-bootstrap',
    'react-mixin',
    'react-router',
    'flux',
    'flux/utils',
    'history/lib/createBrowserHistory',
    'classnames',
    'immutable',
    'core-js'
];

exports.vendor = function(gulp, plugins) {
    return function() {
        var browserified;
        var bundle;

        browserified = browserify().transform(babelify);

        // 라이브러리 목록을 순회하여 빌드 파일에 각 라이브러리를 삽입한다.
        // 삽입된 라이브러리는 require('xxx')로 사용할 수 있다.
        libs.forEach(function(lib) {
            browserified.require(lib);
        });

        bundle = browserified.bundle();

        if (isDevelopment) {
            bundle = bundle
                .pipe(source(filename + '.vendor.js'))
                .pipe(gulp.dest(buildPath));
        } else {
            bundle =  bundle
                .pipe(source(filename + '.vendor.min.js'))
                .pipe(buffer())
                .pipe(plugins.uglify())
                .pipe(gulp.dest(buildPath));
        }

        return bundle;
    };
};

exports.script = function(gulp, plugins) {
    return function() {
        var browserified;
        var bundle;

        // browserify 기본 옵션 값을 설정하고
        // transform으로 babelify를 지정한다.
        browserified = browserify(
            path.join(srcPath, 'app.js'),
            {debug: isDevelopment}
        ).transform(babelify.configure({
            presets: ['es2015', 'react']
        }));

        // 라이브러리 목록을 순회하여 외부 라이브러리는
        // 제품 코드 내에서 제거한다.
        libs.forEach(function(lib) {
            browserified.external(lib);
        });

        bundle = browserified.bundle();

        if (isDevelopment) {
            bundle = bundle
                .pipe(mold.transformSourcesRelativeTo(path.join(__dirname, '../')))
                .pipe(exorcist(path.join(buildPath, filename + '.js.map')))
                .pipe(source(filename + '.js'))
                .pipe(gulp.dest(buildPath));
        } else {
            bundle =  bundle
                .pipe(source(filename + '.min.js'))
                .pipe(buffer())
                .pipe(plugins.uglify())
                .pipe(gulp.dest(buildPath));
        }

        return bundle;
    };
};
