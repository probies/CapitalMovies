import Head from 'next/head'
import { useState, useEffect } from 'react'
import SigninComponent from '../components/auth/SigninComponent'
import SignupComponent from '../components/auth/SignupComponent'
import Header from '../components/header'

export default function Login() {

  return (
    <div>
      
      <Head>
        <title>Login | Capital Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="container-fluid p-4" style={{'color':'white','marginTop':'60px'}}>
        <div className="col-md-4 col-sm-6 offset-sm-3 offset-md-4 offset-lg-4" style={{'backgroundColor':'gray'}}>
                <h2 className="text-center pt-4">Signin</h2>
                <div className="row">
                        <SigninComponent />
                    </div>
                </div>
            </div>
      </main>

    </div>
  )
}
