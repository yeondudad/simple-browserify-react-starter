import React from 'react';
import {Container} from 'flux/utils';
import AppStore from '../store/app';
import Header from '../component/header';
import Introduce from '../component/introduce';

class About extends React.Component {

    /**
     * About에서 구독할 Store를 반환한다.
     * @returns {Array.<FluxStore>}
     */
    static getStores() {
        return [AppStore];
    }

    /**
     * Store를 이용해 About의 상태를 설정한다.
     * @returns {Object}
     */
    static calculateState() {
        return {};
    }

    /**
     * About을 렌더링한다.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <div>
                <Header/>
                <Introduce/>
            </div>
        );
    }
}

const AboutContainer = Container.create(About);
export default AboutContainer;
