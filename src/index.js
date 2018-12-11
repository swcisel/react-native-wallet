import React, { Component } from 'react';
import {
  NativeModules,
  requireNativeComponent,
  TouchableHighlight,
  View
} from 'react-native';
const { RNWalletModule } = NativeModules;
import {
  _canAddPasses,
  _showAddPassController,
  _AddPassButton
} from './platform-specific';

/**
 * Check if you can add passes.
 * @param callback A callback which will receive a boolean
 */
function canAddPasses(callback) {
  _canAddPasses(RNWalletModule, callback);
}

/**
 * Show the pass controller for the provided URL.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param passURL URL to pkpass file
 * @return Promise Passing a boolean
 */
function showAddPassController(passURL) {
  return _showAddPassController(RNWalletModule, passURL);
}

const AddPassButton = _AddPassButton;
module.exports = {
  canAddPasses,
  showAddPassController,
  AddPassButton
};
