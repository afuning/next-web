import Head from 'next/head'

const CommonHead = ({ title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <style jsx global>{`
      @font-face {font-family: "iconfont";
        src: url('//at.alicdn.com/t/font_1238539_wq2dozcid8n.eot?t=1582621009647'); /* IE9 */
        src: url('//at.alicdn.com/t/font_1238539_wq2dozcid8n.eot?t=1582621009647#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAL4AAsAAAAABtgAAAKqAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBQIE5ATYCJAMMCwgABCAFhG0HNhv/BciegW1bOo5TES1RttvDupqsIh7+2+/3+8zMvagkSaIRsicSSUQaJYmVCCVByaz+tYT30/5qVmiXzhMXvibhzcdi9uOUxMyQwFBcz+k23WW5qX9Qq/HBBhwQRhBgaCvu81xObwIdyF31Lctp7f38qBdgHFCge2BUzwMukDQQbhi74AVeJ9BqhINiNb+0FukV9rxA3HFMF9IX0orCas1C3bC1iHeV5vSQziBv0efjP180k1SZvXT9Iq8XZf6KviuPNEbsBYQMAe6ukDELKcRBY3mLSjBOpdWs7m6tFSEtlWv8E6kNa33QP14ianZ3O5iEpvRQGk9O8KcfSiCDGgXzkLUFXoaQhwyt9X3D5ujBnKW2fmNub8RaV7s2sj9vb6hbnz8ctbUoTdGhLZ/Ug9IcrdrzZWc9I9SSupHItdKb5MWRyBnB1KiE5khFCTXwaT7s0QsOfyzE1rwj8ulcYbXVhUW9J/fm/JBEPDlXOTLZ2byoPP6r39H9/OhK/W5uK+DHVIWDje8yMIuQ5nNGgn+oQX3F0NmeXDS1p7ai2dD9BBOwpxUNdrzX7XTrwOAiobmgYUiaDCNrNkoWdhaVNnOoNVtAqxkFu9v0EalEacG0SYDQbRdJpy9k3c7Jwt6gMugZte7IaLURUUe2GY9rY44IXTL04u4hzPXQEHF9sjHurQamL9Al5nURXw+ixOWw1+Up1wogBOISK6R+xifLBBORBnE+uA0CAYrDIuWhR3axshxOdrtJ04NcPTSIjFaIQBcZ6IV1G4JxelAhJBguM1beXw0w+gR0ETtEdcV6QCThxse8XDwDyAJzaJDoUe6R9GP4yGQERoioICwfTAIBARQWbp7EAz1kLuyEYlgytzOIDDW7trcG/+8ItLLPy5EiR1GdBqgEapYGASEAAA==') format('woff2'),
        url('//at.alicdn.com/t/font_1238539_wq2dozcid8n.woff?t=1582621009647') format('woff'),
        url('//at.alicdn.com/t/font_1238539_wq2dozcid8n.ttf?t=1582621009647') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('//at.alicdn.com/t/font_1238539_wq2dozcid8n.svg?t=1582621009647#iconfont') format('svg'); /* iOS 4.1- */
      }
      
      .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .iconclose:before {
        content: "\e619";
      }
      
      .iconhome:before {
        content: "\e88b";
      }    
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
      input {
        outline-style: none ;
        outline-width: 0px ;
        text-shadow: none ;
        border: 1px solid #aaa;
        -webkit-appearance: none ;
        -webkit-user-select: text ;
        outline-color: transparent ;
        box-shadow: none;
      }
    `}</style>
  </div>
)

export default CommonHead