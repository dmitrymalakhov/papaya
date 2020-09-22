import React, { useState } from "react";
import styled from "styled-components";

const AppStyled = styled.div`
  padding: 10px;
`;

export default function App() {
  const [user, setUser] = useState(null);

  const handleClickLogin = () => {
    window.FB.login(function (response) {
      if (response.authResponse) {
        console.log("Welcome!  Fetching your information.... ");
        window.FB.api("/me", function (response) {
          console.log("Good to see you, " + response.name + ".");
          setUser(response);
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    });
  };

  return (
    <AppStyled>
      {user ? (
        <div>{user.name}</div>
      ) : (
        <button onClick={handleClickLogin}>LOGIN</button>
      )}
    </AppStyled>
  );
}
