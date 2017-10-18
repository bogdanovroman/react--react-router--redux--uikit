import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (
            <div className="header uk-box-shadow-small uk-light bg-dark-transparent">
                <div className="uk-container uk-container-large uk-height-1-1">
                    <div className="uk-flex uk-flex-between	uk-width-1-1 uk-height-1-1 uk-flex-middle">
                        <div>
                            <Link to="/" className="uk-button uk-button-text">Home</Link>
                        </div>
                        <Link to="/login" className="">
                            <span is uk-icon="icon: user; ratio:1.2"></span>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
