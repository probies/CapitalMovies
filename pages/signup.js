import Head from 'next/head'
import SignupComponent from '../components/auth/SignupComponent'
import Header from '../components/header'

export default function Login() {

  return (
    <div>
      
      <main>
        <Header />
        <div className="container-fluid p-4" style={{'color':'white','marginTop':'60px'}}>
        <div className="col-md-4 col-sm-6 offset-sm-3 offset-md-4 offset-lg-4" style={{'backgroundColor':'gray'}}>
                <h2 className="text-center pt-4">Signup</h2>
                <div className="row">
                        <SignupComponent />
                    </div>
                </div>
            </div>
      </main>

    </div>
  )
}
