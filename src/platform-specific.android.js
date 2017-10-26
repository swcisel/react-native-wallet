import React, { Component } from 'react';
/**
 * Android can't add passes
 * @param callback A callback which will receive false
 */
function _canAddPasses(Module, callback) {
  callback(false);
}

/**
 * Android can't add passes
 * @param passURL URL to pkpass file
 * @return Promise Always rejecting
 */
function _showAddPassController(Module, passURL) {
  return Promise.reject("Android can't add passes");
}

const _AddPassButton = Component;

module.exports = {
  _canAddPasses,
  _showAddPassController,
	_AddPassButton
}
