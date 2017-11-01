import React, {Component} from 'react';
import { View, TouchableWithoutFeedback, NativeModules, requireNativeComponent} from 'react-native';

const { RNWalletModule } = NativeModules;
const AddPassButtonComponent = requireNativeComponent('RNAddPassButton', _AddPassButton);

/**
 * Check if you can add passes.
 * @param callback A callback which will receive a boolean
 */
function _canAddPasses(Module, callback) {
  if (!!Module) {
  	Module.canAddPasses(result => {
		  callback(result);
	  });
  }
}

/**
 * Show the pass controller for the provided URL.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param passURL URL to pkpass file
 * @return Promise Passing a boolean
 */
function _showAddPassController(Module, passURL) {
  return Module.showAddPassController(passURL);
}


class _AddPassButton extends Component {
   constructor (props) {
      super (props);
      this.onAddToWalletPress = this.onAddToWalletPress.bind(this);
   }
   onAddToWalletPress() {
      console.log('this.props!', this.props);
		_showAddPassController (RNWalletModule, this.props.passUrl);
   }
	render () {
		return (
			<TouchableWithoutFeedback onPress={this.onAddToWalletPress}>
				<AddPassButtonComponent {...this.props}></AddPassButtonComponent>
			</TouchableWithoutFeedback>
		)
	}
}

module.exports = {
  _canAddPasses,
  _showAddPassController,
	_AddPassButton
}
