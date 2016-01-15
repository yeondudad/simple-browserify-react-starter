import Immutable from 'immutable';
import {MapStore} from 'flux/utils';
import Dispatcher from '../dispatcher';

class App extends MapStore {

    /**
     * App의 초기 상태를 반환한다.
     * @returns {Immutable.Map<K, V>}
     */
    getInitialState() {
        return Immutable.Map();
    }

    /**
     * Action에 해당하는 작업을 수행한다.
     * @param {Immutable.Map<K, V>} state
     * @param {Object} action
     * @returns {Immutable.Map<K, V>}
     */
    reduce(state, action) {
        switch (action.type) {
            default:
                return state;
        }
    }
}

const app = new App(Dispatcher);
export default app;
