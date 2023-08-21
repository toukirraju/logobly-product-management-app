import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useLoginMutation,
  useRegistrationMutation,
} from "../redux/features/auth/authApi";
import { clearError } from "../redux/features/errorSlice";

const useAuth = ({ isSignIn }) => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
    terms: false,
  });

  const resetForm = () => {
    setInitialValues({
      name: "",
      email: "",
      password: "",
      isAdmin: false,
    });
  };
  const dispatch = useDispatch();
  const error = useSelector((state) => state.serverError);
  const [
    login,
    {
      isSuccess: signinSuccess,
      isError: signinError,
      isLoading: signinLoading,
    },
  ] = useLoginMutation();
  const [
    registration,
    {
      isSuccess: registrationSucces,
      isError: registrationError,
      isLoading: regiserLoading,
    },
  ] = useRegistrationMutation();

  const isLoading = signinLoading || regiserLoading;
  const isSuccess = signinSuccess || registrationSucces;
  const isError = signinError || registrationError;

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInitialValues({
      ...initialValues,
      [name]: name === "isAdmin" ? value === "true" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearError());
    if (isSignIn) {
      // "signin"
      login({ email: initialValues.email, password: initialValues.password });
    } else {
      console.log("registration");
      registration(initialValues);
    }
  };

  useEffect(() => {
    dispatch(clearError());
    resetForm();
  }, [isSignIn]);

  useEffect(() => {
    if (signinSuccess) {
      alert("loggedin");
      resetForm();
    }
    if (registrationSucces) {
      alert("Successfully registred. Please Login.");
      resetForm();
    }
  }, [signinSuccess, registrationSucces]);
  return {
    initialValues,
    handleChange,
    isLoading,
    error,
    handleSubmit,
  };
};

export default useAuth;
