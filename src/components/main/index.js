import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from '../wrapper';

class Main extends Component {
    render() {
        const {isLoading} = this.props.utils;

        return (
            <Wrapper isLoading={isLoading}>
                Main page
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {utils: state.utils};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
