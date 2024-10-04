'use client';

import React from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
});

export default function Login() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/authbg.png')` }}
    >
      <div className='bg-black bg-opacity-50 backdrop-blur-lg p-8 rounded-lg shadow-lg'>
        <h3 className="text-center text-xl font-bold mb-4 text-white">Login</h3>

        <Formik
          initialValues={{
             email: '',
            password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
            // Handle login logic here
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <div className="relative mb-4">
                <Field
                  id="email"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-3 top-2 transition-all duration-300 ${values.email ? "text-blue-600 text-xs" : "text-gray-400"} 
                              ${values.email ? "translate-y-[-10px]" : "translate-y-0"}`}
                >
                  Email
                </label>
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
              </div>

              <div className="relative mb-4">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
                <label
                  htmlFor="password"
                  className={`absolute left-3 top-2 transition-all duration-300 ${values.password ? "text-blue-600 text-xs" : "text-gray-400"} 
                              ${values.password ? "translate-y-[-10px]" : "translate-y-0"}`}
                >
                  Password
                </label>
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
              </div>

              <button type="submit" className="w-full bg-black text-white font-bold py-2 rounded">Login</button>

              <Link href={'../../Auth/SignUp'} className='text-white text-center block mt-4'>Sign Up</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
