import React, { useState, useEffect } from 'react'
import { Button, notification } from 'antd'
let appPromptEvent = null
let count = 0
const App = ({ Component, pageProps }) => {
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', function beforeInstallprompt (event) {
      console.log('触发事件：beforeinstallprompt');
      appPromptEvent = event
      if (count !== 0) return false
      count++
      pwaNotification()
      event.preventDefault();
      return false;
    })
    return function cleanup() {
      window.removeEventListener(beforeInstallprompt)
    }
  })
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

const pwaNotification = () => {
  const key = `open${Date.now()}`
  const openAppPrompt = () => {
    if (appPromptEvent !== null) {
      appPromptEvent.prompt();
      appPromptEvent.userChoice.then(function (result) {
        if (result.outcome === 'accepted') {
          notification.close(key)
        } else {
          notification.close(key)
        }
        appPromptEvent = null;
      })
    }
    notification.close(key)
  }
  const btn = (
    <Button type="primary" size="small" onClick={openAppPrompt}>
      造作呀
    </Button>
  )
  notification.open({
    message: '安装应用',
    duration: null,
    description:
      '安装一下也不会怎么样，戳一下右下角',
    btn,
    key
  })
}

export default App
