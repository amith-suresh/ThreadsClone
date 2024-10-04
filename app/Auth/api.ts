import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface SignupPayload {
  name: string;
  username: string;
  email: string;
  password: string;
  number: string; // Keep this as string if your form is submitting as a string
}

const signupUser = async (data: SignupPayload) => {
  const response = await axios.post("http://social-media-rest-apis.onrender.com/api/users/signup", data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      console.log('User signed up successfully:', data);
    },
    onError: (error) => {
      console.error('Error signing up:', error);
    },
  });
};
