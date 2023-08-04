import React from 'react';

const LoginPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Login form submitted');
  };

  return (
    <main className="flex flex-col sm:flex-row h-screen">
      {/* Left Section (Login Form) */}
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full py-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Welcome to ALPYN electronics client portal</h1>
            <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary-500">
              Login
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                  placeholder="E-mail address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="https://alpynelectronics.com/en/dashboard/register" className="font-medium text-primary-500 hover:underline">
              Register
            </a>
            .
          </p>
          <p className="mt-1 text-sm text-gray-600">
            <a href="https://alpynelectronics.com/en/dashboard/forgot-password" className="font-medium text-primary-500 hover:underline">
              Forgot Your Password?
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right Section (Logo and Image) */}
      <div className="flex-1 bg-gradient-to-r from-primary-500 to-primary-700 flex flex-col items-center justify-end bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
        <div className="max-w-sm w-full px-4 py-8 space-y-4 sm:px-6 lg:px-8">
          <img
            className="mx-auto h-24 w-auto"
            src="https://alpynelectronics.com/front-assets/alpyn/images/logo-2.webp"
            alt="ALPYN Electronics Logo"
          />
        </div>
        <img
          className="h-1/3 w-auto "
          src="https://alpynelectronics.com/front-assets/alpyn/images/team.webp"
          alt="Team Image"
        />
      </div>
    </main>
  );
};

export default LoginPage;
