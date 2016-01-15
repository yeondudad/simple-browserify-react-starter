import '../js/app';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Simulate} from 'react-addons-test-utils';

const history = createBrowserHistory();
const {click} = Simulate;
const location = window.location;

describe.only('App Component...', function() {

    before(() => {
        document.body.innerHTML = '<div class="wrap"></div>';

        history.push({pathname: '/'});

        window.App.main();
    });

    describe('컴포넌트 라우팅 테스트', () => {
        it('소개 페이지로 라우팅할 수 있다.', done => {
            // Given
            var toAboutLink = document.querySelector('a[href="/about"]');

            // When
            click(toAboutLink, {button: 0});

            // Then
            assert(location.pathname === '/about');

            done();
        });

        it('메인 페이지로 라우팅할 수 있다.', done => {
            // Given
            var toMainLink = document.querySelector('a[href="/"]');

            // When
            click(toMainLink, {button: 0});

            // Then
            assert(location.pathname === '/');

            done();
        });
    });
});
