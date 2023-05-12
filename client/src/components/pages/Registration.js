import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function App() {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5500/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate('/login')
		}
		else {
			alert(data.error)
		}
	}

	return (
		<>
			<section className='text-center'>
				<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

					<div class="mr-auto ml-auto place-self-center lg:col-span-7">
						<h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Registration Sample</h1>
						<div>
							<form onSubmit={registerUser} autocomplete="do-not-autofill">
								{/* <!-- Username input --> */}
								<div class="relative mb-6 flex" data-te-input-wrapper-init>
									<input
										class="peer block w-full border-2 rounded bg-white py-[0.32rem] px-3 col-span-7 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="usernameField"
										placeholder="Username" autocomplete="do-not-autofill"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										type="username"
									/>
									<label
										for="usernameField"
										class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
									>Username
									</label>
								</div>
								{/* <!-- Name input --> */}
								<div class="relative mb-6 flex" data-te-input-wrapper-init>
									<input
										class="peer block w-full border-2 rounded bg-white py-[0.32rem] px-3 col-span-7 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="nameField"
										placeholder="Name" 
										value={name}
										onChange={(e) => setName(e.target.value)}
										type="text"
									/>
									<label
										for="nameField"
										class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
									>Name
									</label>
								</div>
								{/* <!-- Email input --> */}
								<div class="relative mb-6 flex" data-te-input-wrapper-init>
									<input
										class="peer block w-full border-2 rounded bg-white py-[0.32rem] px-3 col-span-7 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="emailField"
										placeholder="Email" autocomplete="off"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										type="email"
									/>
									<label
										for="emailField"
										class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
									>Email
									</label>
								</div>
								{/* <!-- Password input --> */}
								<div class="relative mb-6" data-te-input-wrapper-init>
									<input
										type="password"
										class="peer block min-h-[auto] w-full rounded border-0 bg-white py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="passwordField"
										placeholder="Password" autocomplete="off"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<label
										for="passwordField"
										class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
									>Password
									</label>
								</div>

								{/* <!-- Submit button --> */}
								<div className='flex justify-between'>
									<button
										type="submit"
										class="inline-block w-full rounded bg-sky-500 px-7 mr-4 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
										data-te-ripple-init
										data-te-ripple-color="light">
										Register
									</button>
									<Link to='/'
										type="submit"
										class="inline-block rounded w-full text-center bg-red-500 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
										data-te-ripple-init
										data-te-ripple-color="light">
										Cancel
									</Link>
								</div>
							</form>
						</div>


					</div>
					<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
						<img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className='rounded-md' width={500} alt="ambulance_logo"></img>
					</div>
				</div>
			</section>
		</>
	);
}

export default App