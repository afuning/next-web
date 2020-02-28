import Head from 'next/head'

const CommonHead = ({ title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <style jsx global>{`
      @font-face {font-family: "iconfont";
        src: url('//at.alicdn.com/t/font_1238539_e65dtvbwu64.eot?t=1582786978302'); /* IE9 */
        src: url('//at.alicdn.com/t/font_1238539_e65dtvbwu64.eot?t=1582786978302#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQEAAsAAAAACWgAAAO1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDQAqFcIUHATYCJAMYCw4ABCAFhG0HShsnCBEVnA/JfhS4sTNosUKTnJhnHhlW1CT9/yN44HO696VZ8oOLtcNEUvAG0Qwxu4mfzFrw2yhmN9tccwRywkRNPslZ9OgLSZ/zl2aUAAFqF5fGaeMBq0s5C0gUS21Wq3VqzZoFKKC9UCZU/l/4g18FX8h/GLu8yNMQgKGQCkSLVh16YKPRJwlAjB01YhB2Qo2uwAtsmVWwUiPWEsKWK+QdYI33fPGRatkgCSn0s7oMbzmUJul5k4eU99/TV3l4wxkBtg4UUAFoEFMLzeNRgbcChZHP1zQDDDYSmZ73HUk/eej/fxT0Qf6GpMb4lwcaRQiBBGGhizMgXAdliKPjWAg0vAOBgqTPlC0kD0IEApKH1EgotwZMzgqSIOpBXIkZEomDQJUoUCJjBl0lHGP/Ao6x5sTNkyc9nj4NJxKp8UgQ7N+Y8ykZfDwemeWHN6VtC3qa2EZvk+tiE/w0IVxCNDBG9BzbSNcLhkbT3Iz+Jm+jyRALxmT2j0WPmkyxw96RcY7Yxfk9omdNNtuu+Je8i7HL4eDtp6Qei16OlekRORq76JUN9zjsXfLLp4aP+Fei5fpIV2TEVYMjw2QGYcigRgyMjJjUY3i56qZjkfB5/e2bPm8wHKbNjmYTLtyhdro1oHSBVh3U3mfP9kKBwhq1F31ox5YFJv8e2F+ZGDgXsl1wArd29Bs1eolzwYkITIeWBY3JlLVA1kwNGXfF6N9G3d3VxFSvZbRsdDOcR9hLxGXV6lWLJBLxRBFfKIk4kWFCDvwDHC6fd9PhBYc35e/+HTpScUvjQ08PNQ4OV731Iz/+GT4ZXqX5g+bMBOD/U3VMlYdUoHbL3dYm8tqf9TtEgrpZBmRu8Nt2NQAv5sX2QuP/q7qhGn4PCY05/xEH52mFp2ssLeW2xiAAi2Y4t1vKT5Px/9izeTOUNGdjNwjsBIeBJIWCoLApgdK4ChDCpQZY2DQGQ3mt17tkNxmF0A5QzhIAgixOgSQTV0CRxV2Uxr2GELl8BossKTBQXu123NpXbY6CRtGD/UPluCdTpxs/8Ybh3RqJ8zzCCyVWDsiTLB24Yo8yxJz4CYUqAQl3cAHnYdsyDMI1Ok1K1eGQplR0o8RxN9o4EshQyAPWH6g4rEdOe7XJvP8NCt5ahlTklGlfkIiqwUEukTVAXcV9o5xLuSb6CApKEUAE64ALMKLW8DIwFA+rIUclyg7uwUGKilFTcTK9tLvLfYCh72MlhRJahIQlUphemZl1SD+LLDp3LUecldzhaAQAAAA=') format('woff2'),
        url('//at.alicdn.com/t/font_1238539_e65dtvbwu64.woff?t=1582786978302') format('woff'),
        url('//at.alicdn.com/t/font_1238539_e65dtvbwu64.ttf?t=1582786978302') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('//at.alicdn.com/t/font_1238539_e65dtvbwu64.svg?t=1582786978302#iconfont') format('svg'); /* iOS 4.1- */
      }
      
      .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .iconjia:before {
        content: "\e8a6";
      }
      
      .iconjian:before {
        content: "\e8a7";
      }
      
      .iconsort:before {
        content: "\e700";
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
      button:-moz-focusring,
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
      }
      button,
      html [type="button"], /* 1 */
      [type="reset"],
      [type="submit"] {
        -webkit-appearance: button; /* 2 */
        outline:none;
      }
    `}</style>
  </div>
)

export default CommonHead