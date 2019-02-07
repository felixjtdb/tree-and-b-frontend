import React, { Component } from 'react';
import Tree from '../components/Tree.js'
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Tree
      name={'test_tree'}
      description={'test_description'}
      imageURL={'test_imageURL'}
      location={'test_location'}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
