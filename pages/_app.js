import React, { useEffect } from 'react'
import { Button, notification } from 'antd'
let appPromptEvent = null
const App = ({ Component, pageProps }) => {
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', function beforeInstallprompt (event) {
      console.log('触发事件：beforeinstallprompt');
      appPromptEvent = event
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
  const key = `open${Date.now()}`;
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
      安装应用
    </Button>
  );
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
