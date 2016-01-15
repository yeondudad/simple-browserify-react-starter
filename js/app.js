import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Landing from './container/landing';
import About from './container/about';

class App {

    /**
     * 애플리케이션의 메인 메서드
     */
    static main() {
        const wrapper = document.querySelector('.wrap');

        ReactDOM.render(
            <Router history={createBrowserHistory()}>
                <Route path="/" component={Landing}/>
                <Route path="/about" component={About}/>
            </Router>,
            wrapper
        );
    }
}

window.App = App;
