import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login'; 
 
const responseGoogle = (response) => {
  console.log(response.profileObj.email);
  console.log(response.profileObj.googleId);
  console.log(response.profileObj.givenName, response.profileObj.familyName);
  console.log("tokenID: ", response.tokenId);
}
 

export default () => (
  <GoogleLogin
    clientId="882732018398-umlr401h2pk82i5g47au7000020f2400.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
);


// const Logout = () => (
//     <GoogleLogout
//       buttonText="Logout"
//       onLogoutSuccess={logout}
//     >
//     </GoogleLogout>
// );

// export default {Login, Logout};
