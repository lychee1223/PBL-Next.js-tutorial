import '@/styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react' // import `ChakraProvider` component

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
