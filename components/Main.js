import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Forest from './Forest'
import TreeViewer from './TreeViewer'

const testTrees =
  [ { id : 1,
      name: 'Oak',
      imageURL: 'https://www.fast-growing-trees.com/images/P/Live-Oak-Tree-450w.jpg',
      description: "I'm a big ol tree",
      location: 123
    },
    { id : 2,
      name: 'BrOak',
      imageURL: "http://www.irishtreesociety.com/wp-content/uploads/irish-tree-society-feature.jpg",
      description: "me too!",
      location: 456
    }
  ]

const Main = createSwitchNavigator({
  TreeViewer: {
    screen: TreeViewer
  },
  Forest: {
    screen: Forest
  }
},
{
  initialRouteName: 'TreeViewer'
})


export default createAppContainer(Main)
