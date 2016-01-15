import React from 'react';
import {Container} from 'flux/utils';
import AppStore from '../store/app';
import Header from '../component/header';
import Greeting from '../component/greeting';

class Landing extends React.Component {

    /**
     * Landing에서 구독할 Store를 반환한다.
     * @returns {Array.<FluxStore>}
     */
    static getStores() {
        return [AppStore];
    }

    /**
     * Store를 이용해 Landing의 상태를 설정한다.
     * @returns {Object}
     */
    static calculateState() {
        return {};
    }

    /**
     * Landing을 렌더링한다.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <div>
                <Header/>
                <Greeting/>
            </div>
        );
    }
}

const LandingContainer = Container.create(Landing);
export default LandingContainer;
