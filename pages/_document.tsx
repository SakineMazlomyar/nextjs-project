import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    
  
    render() {
      return (
        <Html style={{ margin:0, padding:0}}>
  
          <Head>
          <link rel="shortcut icon" href="../public/favicon.ico" />
          </Head>
              <body style={{backgroundColor:"#423c3c", margin:0, padding:0}}>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument