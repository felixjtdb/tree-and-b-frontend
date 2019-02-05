import React, { Component } from 'react';
import App from '../App.js'
console.log('----- worked -----');
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
