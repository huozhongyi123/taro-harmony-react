import { Component } from 'react'
import { View, Navigator, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // textvalue: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Navigator
          openType='navigate'
          url='/pages/navigater-goto/index?id=12'
        >
          <Text>navigate</Text>
        </Navigator>
        <Navigator
          openType='redirect'
          url='/pages/navigater-goto/index?id=12'
        >
          <Text>redirect</Text>
        </Navigator>
        <Navigator
          openType='reLaunch'
          url='/pages/navigater-goto/index?id=12'
        >
          <Text>reLaunch</Text>
        </Navigator>
        <Navigator
          openType='navigate'
          url='/pages/navigater-goto/index?id=12'
          hoverClass='hoverNaviagter'
        >
          <Text>hoverClass</Text>
        </Navigator>
        <Navigator
          openType='navigate'
          url='/pages/navigater-goto/index?id=12'
          hoverStartTime={1000}
          hoverStayTime={3000}
        >
          <Text>StartTime StayTime</Text>
        </Navigator>
      </View>
    )
  }
}
