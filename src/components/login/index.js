import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from '../wrapper';

class Login extends Component {
    render() {
        const {utils} = this.props;

        return (
            <Wrapper isLoading={utils.isLoading}>
				<div className="login-form uk-margin-top uk-container uk-container-large uk-light">
					<fieldset className="uk-fieldset">
						<ul is class="uk-flex-center uk-child-width-1-2 uk-tab" uk-tab>
							<li className="uk-active">
								<a href="#">Регистрация</a>
							</li>
							<li>
								<a href="#">Вход</a>
							</li>
						</ul>
						<div is class="uk-switcher">
							<div className="uk-active uk-animation-slide-bottom-small">
								<div className="uk-margin">
									<div className="uk-inline uk-width-1-1">
										<span is class="uk-form-icon text-white" uk-icon="icon: mail"></span>
										<input className="uk-input" type="text"/>
									</div>
								</div>
								<div className="uk-margin">
									<div className="uk-inline uk-width-1-1">
										<span is class="uk-form-icon text-white" uk-icon="icon: lock"></span>
										<input className="uk-input " type="password"/>
									</div>
								</div>
								<div className="uk-margin ">
									<button className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">
										<span is uk-icon="icon: check; ratio: 1.5"></span>
									</button>
									<button className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">
										<span is uk-icon="icon: facebook; ratio: 1.5"></span>
									</button>
								</div>
							</div>
							<div className="uk-animation-slide-bottom-small">
								<div className="uk-margin">
									<div className="uk-inline uk-width-1-1">
										<span is class="uk-form-icon text-white" uk-icon="icon: mail"></span>
										<input className="uk-input" type="text"/>
									</div>
								</div>
								<div className="uk-margin">
									<div className="uk-inline uk-width-1-1">
										<span is class="uk-form-icon text-white" uk-icon="icon: lock"></span>
										<input className="uk-input " type="password"/>
									</div>
								</div>
								<div className="uk-margin ">
									<button className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">
										<span is uk-icon="icon: check; ratio: 1.5"></span>
									</button>
								</div>
							</div>
						</div>

					</fieldset>
				</div>
			</Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {utils: state.utils};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
