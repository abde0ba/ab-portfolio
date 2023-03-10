import Layout from '@/components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import { Container } from 'react-bootstrap'
import NoSSR from 'react-no-ssr';

const Message = () => {
        return (
            <>
                <Head>
                <title>Abdelhakim Baraka</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/fav.ico" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                
        
                <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                  crossorigin="anonymous"
                />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
                
                  
              </Head>

              <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
                <Script src="https://code.jquery.com/jquery-3.6.3.min.js"></Script>

                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></Script>
                <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></Script>
        
                <Script
                  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                  crossorigin></Script>
        
                <Script
                  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                  crossorigin></Script>

                <Layout>
                <NoSSR>
                <Container>
                {  typeof window !== 'undefined' && localStorage.getItem('msg-direction') ?
                        <div className='message-section'>
                        <div className='message-container'>
                            
                            <h1>Thank you for contacting me, I will reach you out as soon as possible.</h1>
                            <Link href='/' onClick={() => localStorage.clear()}>Return to homepage</Link>
                            
                        </div>
                        </div>
                        :
                        <div className='page-404'>
                        <h1>Error 404</h1>
                        <h3>Page not found</h3>
                        </div>
}
                    </Container>
                    </NoSSR>
                    </Layout>
                    </>
                        )
}

export default Message
