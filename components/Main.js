import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Forest from './Forest'
import TreeViewer from './TreeViewer'

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
