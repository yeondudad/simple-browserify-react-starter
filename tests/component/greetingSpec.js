import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument, findAllInRenderedTree} from 'react-addons-test-utils';
import Greeting from '../../js/component/greeting';

describe('Greeting component...', function() {

    before(() => {
        this._greeting = renderIntoDocument(<Greeting/>);
    });

    describe('컴포넌트 렌더링 테스트', () => {
        it('인사말과 설명구를 제목을 출력할 수 있다.', done => {
            //Given
            //When
            const title = findAllInRenderedTree(this._greeting, c => c.tagName === 'H1')[0];
            const description = findAllInRenderedTree(this._greeting, c => c.tagName === 'P')[0];

            //Then
            assert(title.textContent === 'Simple browserify react starter');
            assert(description.textContent === 'browserify와 react를 이용해 효율적이고 빠르게 프로젝트를 시작할 수 있습니다.');

            done();
        });
    });
});
