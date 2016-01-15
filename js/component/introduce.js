import React from 'react';

class Introduce extends React.Component {

    /**
     * Introduce의 생성자
     * @constructs
     * @param {Introduce.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * Introduce을 렌더링한다.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <article className="introduce">
                <div className="introduce__inner container">
                    <h1>About Me</h1>
                    <ul className="introduce__socials">
                        <li className="introduce__social facebook">
                            <a href="#"><span className="blind">페이스북</span></a>
                        </li>
                        <li className="introduce__social twitter">
                            <a href="#"><span className="blind">트위터</span></a>
                        </li>
                        <li className="introduce__social github">
                            <a href="#"><span className="blind">깃허브</span></a>
                        </li>
                    </ul>
                </div>
            </article>
        );
    }
}

/**
 * Introduce의 Props 인터페이스 정의
 */
Introduce.propTypes = {};

/**
 * Introduce의 Props 기본값 정의
 */
Introduce.defaultProps = {};

export default Introduce;
