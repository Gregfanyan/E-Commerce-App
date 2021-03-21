import React from 'react'
import { Button } from 'semantic-ui-react'
import GoogleLogin from 'react-google-login'

import { googleLogin } from '../../redux/User/UserActions'
import { useDispatch } from 'react-redux'

export default function GoogleLogIn({ registerOpen }: any) {
  const dispatch = useDispatch()
  const clientID = `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`

  const responseSuccessGoogle = (response: any) => {
    dispatch(googleLogin(response))
  }

  const responseErrorGoogle = (res: any) => {}

  return (
    <div>
      <GoogleLogin
        clientId={clientID}
        buttonText="Login with Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
        render={(renderProps: any) => (
          <Button
            color="teal"
            fluid
            size="large"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <span>
              {registerOpen ? 'Register with Google' : 'Sign In with Google'}
            </span>
          </Button>
        )}
      />
    </div>
  )
}
