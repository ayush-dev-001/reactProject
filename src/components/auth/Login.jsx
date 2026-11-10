import React from 'react'

const Login = () => {
    // Keep the form fields controlled so their values stay in sync with React state.
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-xl shadow w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={
                (e) => {
                    // Prevent a page reload and clear the fields after submission.
                    e.preventDefault()
                    setUsername('')
                    setPassword('')
                }
                }>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input 
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="shadow appearance-none border-2 rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="shadow appearance-none border-2 rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" required />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login