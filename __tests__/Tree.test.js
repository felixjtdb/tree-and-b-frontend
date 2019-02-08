import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tree from '../components/Tree.js'

import renderer from 'react-test-renderer';

const tree = renderer.create(
  <Tree
    name={'test_tree'}
    description={'test_description'}
    imageURL={'test_imageURL'}
    location={'test_location'}
  />
).toJSON();

test('render matches snapshot', () => {
  expect(tree).toMatchSnapshot();
})
