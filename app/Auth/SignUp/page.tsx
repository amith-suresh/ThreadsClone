'use client'

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SignupUser } from '@/store/Reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppDispatch, RootState } from '@/store/store'; // Adjust the import based on your store setup

// Define FormValues interface for TypeScript
export interface FormValues {
  name: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}

// Validation schema
const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(4, 'Name must contain at least 4 characters'),
  username: Yup.string().required('Username is required').min(4, 'Username must contain at least 4 characters'),
  email: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
  phoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]+$/, 'Phone number must be digits only'),
});

const SignUp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const signupError = useSelector((state: RootState) => state.auth.signupError);

  return (
    <div className='flex items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: `url('/assets/authbg.png')` }}>
      <div className='bg-black bg-opacity-50 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-lg w-11/12 md:w-1/3'>
        <Formik<FormValues>
          initialValues={{
            name: '',
            username: '',
            email: '',
            password: '',
            phoneNumber: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await dispatch(SignupUser(values)).unwrap();
              console.log('Sign up successful!');
              router.push('/Login'); // Redirect to a success page or dashboard
            } catch (error: any) {
              console.error('Error:', error);
              // Handle specific error messages or state updates here
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="flex flex-col">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-4">Sign Up</h3>

              {/* Name Field */}
              <label htmlFor="name" className="text-white">Name</label>
              <Field 
                id="name" 
                name="name"
                type="text" 
                placeholder="Name.." 
                className={`mb-4 p-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.name && touched.name ? 'border-red-500' : ''}`}
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />

              {/* Username Field */}
              <label htmlFor="username" className="text-white">Username</label>
              <Field 
                id="username" 
                name="username"
                type="text" 
                placeholder="Username.." 
                className={`mb-4 p-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.username && touched.username ? 'border-red-500' : ''}`}
              />
              <ErrorMessage name="username" component="div" className="text-red-500" />

              {/* Email Field */}
              <label htmlFor="email" className="text-white">Email</label>
              <Field 
                id="email" 
                name="email"
                type="email" 
                placeholder="Email.." 
                className={`mb-4 p-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email && touched.email ? 'border-red-500' : ''}`}
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />

              {/* Password Field */}
              <label htmlFor="password" className="text-white">Password</label>
              <Field 
                id="password" 
                name="password"
                type="password" 
                placeholder="Password.." 
                className={`mb-4 p-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.password && touched.password ? 'border-red-500' : ''}`}
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />

              {/* Phone Number Field */}
              <label htmlFor="phoneNumber" className="text-white">Phone Number</label>
              <Field 
                id="phoneNumber" 
                name="phoneNumber"
                type="text" 
                placeholder="Phone Number" 
                className={`mb-4 p-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.phoneNumber && touched.phoneNumber ? 'border-red-500' : ''}`}
              />
              <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />

              {/* Signup Error Display */}
              {signupError && <div className="text-red-500 mb-4">{signupError}</div>}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-black text-white p-2 rounded transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
