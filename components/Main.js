import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Forest from './Forest'
import TreeViewer from './TreeViewer'
import ImageCapture from './ImageCapture'

const Main = createSwitchNavigator({
  TreeViewer: {
    screen: TreeViewer
  },
  Forest: {
    screen: Forest
  },
  ImageCapture: {
    screen: ImageCapture
  }
},
{
  initialRouteName: 'TreeViewer'
})


export default createAppContainer(Main)
