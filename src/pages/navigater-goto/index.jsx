import { Component } from 'react'
import { View, Navigator, Text } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
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

  componentDidShow () {
    console.log(JSON.stringify(getCurrentInstance().router))
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Navigator
          openType='navigateBack'
        >
          <Text>back</Text>
        </Navigator>
      </View>
    )
  }
}
