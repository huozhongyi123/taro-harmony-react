/* eslint-disable react/no-unused-state */
import { Component } from 'react'
import { View, Text, Textarea } from '@tarojs/components'
import './index.css'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valuec: '32323',
      value: 'defaultValue',
      textvalue: '11',
      textfocus: '',
      textblur: '',
      boardheight: '',
      success: '11'
    }
  }

  componentWillMount () { }

  componentDidMount () {
    
  }

  componentWillUnmount () { }

  componentDidShow () {
    setTimeout(() => {
      this.setState({ valuec: 'fsdfsdf' })
    }, 2000)
  }

  componentDidHide () { }

  getParameterError ({
    name = '',
    param,
    correct
  }) {
    const parameter = param ? `parameter.${param}` : 'parameter'
    return `${name}:fail parameter error: ${parameter} should be ${correct} instead of`
  }

  bindInput1 (e) {
    console.log("[Input] bindInput === e:" + JSON.stringify(e))
    this.setState({
      value: '111'
    })
  }

  bindInput (e) {
    console.log("[Input] bindInput === e:" + JSON.stringify(e))
    this.setState({
      textvalue: e.detail.value
    })
  }

  render () {
    const { textvalue, textfocus, textblur } = this.state
    return (
      <View className='index'>
        {/* 部分属性无法在虚拟键盘上验证 autoFocus autoHeight selectionStart selectionEnd menuoptions */}
        {/* 部分事件无法在虚拟键盘上验证 keyboardheightchange onTranslate onShare onOptionselect menuoptions onSelectchange */}

        {/* 属性正常 */}
        <View className='label'>
          <Text>基础</Text>
        </View>
        <View className='label'>
          <Textarea 
            className='textarea'
            value={this.state.valuec}
            disabled
          />
        </View>
        <View className='label'>
          <Text>placeholder</Text>
        </View>
        <View className='label'>
          <Textarea 
            value=''
            placeholder='3粉丝'
            disabled
          />
         </View>
        <View className='label'>
          <Text>showcounter</Text>
        </View>
        <View className='label'>
          <Textarea 
            value=''
            maxlength={4}
            placeholder='3粉丝'
            showcounter
          />
        </View>
        {/* <View className='label'>
          <Text>headericon</Text>
        </View>
        <View className='label'>
          <Textarea 
            value='3232323'
            placeholder='3粉丝'
            headericon='http://storage.360buyimg.com/cjj-pub-images/icon_left_arrow.png'
          />
        </View>

        <View className='label'>
          <Text>maxlength 4</Text>
        </View>
        <View className='label'>
          <Textarea 
            value=''
            maxlength={4}
            placeholder='3粉丝'
            autoFocus
          />
        </View>

        <View className='label'>
          <Text>softkeyboardenabled</Text>
        </View>
        <View className='label'>
          <Textarea 
            value='fsdfsdfsdf'
            maxlength={4}
            placeholder='3粉丝'
            softkeyboardenabled={false}
          />
        </View>

        {/* 属性模拟键盘无结果 */}

        {/* <View className='label'>
          <Text>autoFocus</Text>
        </View>
        <View className='label'>
          <Textarea
            value=''
            placeholder='3粉丝'
            autoFocus
          />
        </View>
        <View className='label'>
          <Text>autoHeight</Text>
        </View>
        <View className='label'>
          <Textarea
            value='fsdfsdfdfsafsadfsdfadfsdfsdfafgjgjkkhjkafaggag'
            autoHeight
            placeholder='3粉丝'
          />
        </View>
        <View className='label'>
          <Text>selectionStart selectionEnd</Text>
        </View>
        <View className='label'>
          <Textarea
            value='fsdfsdfsdf'
            placeholder='3粉丝'
            selectionStart={1}
            selectionEnd={4}
          />
        </View>
        <View className='label'>
          <Text>menuoptions</Text>
        </View>
        <View className='label'>
          <Textarea
            value='fsdfsdfsdf'
            maxlength={4}
            placeholder='3粉丝'
            menuoptions={[{ icon: 'http://storage.360buyimg.com/cjj-pub-images/icon_left_arrow.png', content: '2323' }]}
          />
        </View> */}

        {/* 事件正常 */}

        <View className='label'>
          <Text>onInput</Text>
        </View>
        <View className='label'>
          <Textarea
            value={textvalue}
            onInput={this.bindInput}
          />
        </View>
        <View className='label'>
          <Text>onFocus</Text>
        </View>
        <View className='label'>
          <Textarea
            value={textfocus}
            onFocus={(e) => {
              console.log(JSON.stringify(e))
              this.setState({ textfocus: e.detail.value })
            }}
          />
        </View>
        <View className='label'>
          <Text>onBlur</Text>
        </View>
        <View className='label'>
          <Textarea
            value={textblur}
            onBlur={(e) => {
              console.log(JSON.stringify(e))
              this.setState({ textblur: e.detail.value })
            }}
          />
        </View>

        {/* 事件模拟键盘无法验证 */}

        {/* <View className='label'>
          <Text>keyboardheightchange</Text>
        </View>
        <View className='label'>
          <Textarea
            value={this.state.boardheight}
            onKeyboardheightchange={(e) => {
              console.log(JSON.stringify(e))
              this.setState({ boardheight: e.height })
            }}
          />
        </View>

        <View className='label'>
          <Text>{this.state.boardheight}</Text>
        </View> */}

        {/* <Text>onTranslate</Text>
        <Textarea 
          value=''
          onTranslate={(e) => {
            console.log(JSON.stringify(e) + 'onTranslate')
          }}
        />
        <Text>onShare</Text>
        <Textarea 
          value=''
          onShare={(e) => {
            console.log(JSON.stringify(e))
          }}
        /> */}
        {/* <Text>onSearch</Text>
        <Textarea 
          value=''
          onSearch={(e) => {
            console.log(JSON.stringify(e))
          }}
        />
        <Text>onOptionselect</Text>
        <Textarea 
          value=''
          menuoptions={[{ icon: '/common/search.svg', content: '2323' }]}
          onOptionselect={(e) => {
            console.log(JSON.stringify(e))
          }}
        />
        <Text>onSelectchange</Text>
        <Textarea 
          value=''
          onSelectchange={(e) => {
            console.log(JSON.stringify(e))
          }}
        /> */}
      </View>
    )
  }
}
