export default function Home() {
  return (
    <main className="bg-zinc-800 text-zinc-300 min-h-screen grid place-content-center">
      <h1 className="text-5xl mb-10 text-center">Next Login Page</h1>
      <div className="flex gap-10">
        <section className="w-[535px] h-full bg-zinc-600 rounded-md shadow-sm hover:shadow-xl shadow-zinc-950 transition-all">
          <h2 className="text-xl px-5 py-2 bg-zinc-700 rounded-t-md">Login</h2>
          <form className="flex flex-col text-xl p-5 space-y-5">
            <label className="flex items-center justify-between">
              E-mail
              <input className="text-black placeholder:text-zinc-800 rounded px-2 py-1 outline-none focus:outline-cyan-500 focus:outline-offset-4" type="email" placeholder="email@email.com"></input>
            </label>
            <label className="flex items-center justify-between">
              Password
              <input className="text-black placeholder:text-zinc-800 rounded px-2 py-1 outline-none focus:outline-cyan-500 focus:outline-offset-4" type="password" placeholder="**********"></input>
            </label>
            <a href="/forgot" className="w-fit ml-auto text-base text-cyan-600 px-3 py-2 rounded-md transition-all hover:brightness-125 outline-none focus:outline-cyan-600">forgot password</a>
            <button className="px-6 py-2 bg-cyan-600 w-fit h-fit rounded-md transition-all hover:brightness-110 outline-none focus:outline-cyan-500 focus:outline-offset-3" type="submit">Login</button>
          </form>
        </section>
        <section className="w-[535px] h-full bg-zinc-600 rounded-md shadow-sm hover:shadow-xl shadow-zinc-950 transition-all">
          <h2 className="text-xl px-5 py-2 bg-zinc-700 rounded-t-md">Register</h2>
          <form className="flex flex-col text-xl p-5 space-y-5">
            <label className="flex items-center justify-between">
              Name
              <input className="text-black placeholder:text-zinc-800 rounded px-2 py-1 outline-none focus:outline-cyan-500 focus:outline-offset-4" type="text" placeholder="name"></input>
            </label>
            <label className="flex items-center justify-between">
              E-mail
              <input className="text-black placeholder:text-zinc-800 rounded px-2 py-1 outline-none focus:outline-cyan-500 focus:outline-offset-4" type="email" placeholder="email@email.com"></input>
            </label>
            <label className="flex items-center justify-between">
              Password
              <input className="text-black placeholder:text-zinc-800 rounded px-2 py-1 outline-none focus:outline-cyan-500 focus:outline-offset-4" type="password" placeholder="**********"></input>
            </label>
            <button className="px-6 py-2 bg-cyan-600 w-fit h-fit rounded-md transition-all hover:brightness-110 outline-none focus:outline-cyan-500 focus:outline-offset-3" type="submit">Login</button>
          </form>
        </section>
      </div>
    </main>
  )
}
