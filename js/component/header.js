import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router';

class Header extends React.Component {

    /**
     * Header의 생성자
     * @constructs
     * @param {Header.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * Header을 렌더링한다.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <header className="header">
                <Navbar className="header__navbar" inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Project name</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <li role="presentation"><Link to="/">Home</Link></li>
                            <li role="presentation"><Link to="/about">About</Link></li>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

/**
 * Header의 Props 인터페이스 정의
 */
Header.propTypes = {};

/**
 * Header의 Props 기본값 정의
 */
Header.defaultProps = {};

export default Header;
