import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
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
        <Text>Hello world!</Text>
        <Text className='button' onClick={() => {
          Taro.showToast({
            title: '1212',
            duration: 10000,
            bottom: '500px'
          }).then(res => {
            console.log(JSON.stringify(res) + 'show')
          })
        }}
        >show toast</Text>

        <Text className='button' onClick={() => {
          Taro.hideToast().then(res => {
            console.log(JSON.stringify(res) + 'hide')
          })
        }}
        >hide toast</Text>

        <Text className='button' onClick={() => {
          Taro.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            },
            cancel(e) {
              console.log(JSON.stringify(e))
            },
            complete: (res) => {
              console.log(JSON.stringify(res) + 'complete')
            }
          }).then(res => {
            console.log(JSON.stringify(res) + 'resolve')
            if (res.confirm) {
              console.log('用户点击确定resolve')
            } else if (res.cancel) {
              console.log('用户点击取消resolve')
            }
          })
        }}
        >modal</Text>

        <Text className='button' onClick={() => {
          Taro.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            confirmText: '11',
            confirmColor: '#FE6F02',
            cancelText: '22',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            },
            cancel(e) {
              console.log(JSON.stringify(e))
            },
            complete: (res) => {
              console.log(JSON.stringify(res) + 'complete')
            }
          }).then(res => {
            console.log(JSON.stringify(res) + 'resolve')
          })
        }}
        >modal custom text color</Text>

        <Text className='button' onClick={() => {
          Taro.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            confirmText: '11',
            confirmColor: '#FE6F02',
            cancelText: '22',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            },
            cancel(e) {
              console.log(JSON.stringify(e))
            },
            complete: (res) => {
              console.log(JSON.stringify(res) + 'complete')
            }
          }).then(res => {
            console.log(JSON.stringify(res) + 'resolve')
          })
        }}
        >modal showCancel false</Text>

        <Text className='button' onClick={() => {
          Taro.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success: function (res) {
              console.log(res.tapIndex)
            },
            fail: function (res) {
              console.log(res)
            },
            complete: (res) => {
              console.log(JSON.stringify(res) + 'complete')
            }
          }).then(res => {
            console.log(JSON.stringify(res) + 'resolve')
          })
        }}
        >showActionSheet</Text>

        <Text className='button' onClick={() => {
          Taro.showActionSheet({
            itemList: ['A', 'B', 'C'],
            itemColor: '#FE6F02',
            success: function (res) {
              console.log(res.tapIndex)
            },
            fail: function (res) {
              console.log(res)
            },
            complete: (res) => {
              console.log(JSON.stringify(res) + 'complete')
            }
          }).then(res => {
            console.log(JSON.stringify(res) + 'resolve')
          })
        }}
        >showActionSheet custom color</Text>

      </View>
    )
  }
}
