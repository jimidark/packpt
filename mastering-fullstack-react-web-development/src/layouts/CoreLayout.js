import React from 'react';
import { Link } from 'react-router';

class CoreLayout extends React.Component {
    static propTypes = {
        children: React.PropTypes.element
    }

    render() {
        return (
            <div>
                <span>
                    Links: 
                    <Link to="/login">Login</Link> |
                    <Link to="/">Home page</Link>
                </span>
                <br />
                {this.props.children}
            </div>
        )
    }
}

export default CoreLayout;