import React from 'react';

class Greeting extends React.Component {

    /**
     * Greeting의 생성자
     * @constructs
     * @param {Greeting.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * Greeting을 렌더링한다.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <article className="greeting">
                <div className="greeting__inner container">
                    <h1>Simple browserify react starter</h1>
                    <p className="greeting__lead">
                        browserify와 react를 이용해 효율적이고 빠르게 프로젝트를 시작할 수 있습니다.
                    </p>
                </div>
            </article>
        );
    }
}

/**
 * Greeting의 Props 인터페이스 정의
 */
Greeting.propTypes = {};

/**
 * Greeting의 Props 기본값 정의
 */
Greeting.defaultProps = {};

export default Greeting;
