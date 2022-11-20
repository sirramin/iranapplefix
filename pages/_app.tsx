import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/app.css'
import '../styles/ac-globalnav.built.css'
import '../styles/accs-offer.css'
import '../styles/globals.css'
import '../styles/inline.css'
import '../styles/repair.css'
import '../styles/Base.min.css'
import '../styles/apple-care.css'
// import '../styles/main.built.css'
// import '../styles/login.css'
// import '../styles/device.css'
import '../styles/order.css'
import '../styles/solutions.css'


import { Provider } from 'react-redux'
import store, { persistor } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
