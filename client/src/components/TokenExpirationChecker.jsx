import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import decodeJwtToken from "../utils/decodeJwtToken";
import { useLogoutMutation } from "../redux/features/auth/authApi";

function TokenExpirationChecker() {
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const { accessToken } = useSelector((state) => state.auth);
  const token = decodeJwtToken(accessToken);
  const [logout] = useLogoutMutation();

  useEffect(() => {
    const tokenIssuedAtInSeconds = token.iat;
    const tokenExpirationInSeconds = token.exp;
    const currentTimeInSeconds = Math.floor(new Date().getTime() / 1000);

    const expiresIn = tokenExpirationInSeconds - currentTimeInSeconds;

    if (expiresIn <= 0) {
      setIsTokenExpired(true);
    } else {
      const timeoutId = setTimeout(() => {
        setIsTokenExpired(true);
      }, expiresIn * 1000); // Convert expiresIn to milliseconds

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [token]);

  return (
    <div>
      {isTokenExpired ? (
        <p>The token has expired.</p>
      ) : (
        <p>The token is still valid.</p>
      )}
    </div>
  );
}

export default TokenExpirationChecker;
