import { useState } from "react";
import LoginPage from "../pages/LoginPage";


 function Login() {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleFormSubmit= (event) =>{
        event.preventDefault();
       // const formData = new FormData(event.target);
    //  const formProps = Object.fromEntries(formData);
        console.log({
            password: password, 
            name: name
        });
    }

  return (
    <>
          <section className="space-y-12">
              <form className="space-y-6" action="#" method="POST">
                  <div className="flex items-center gap-4 sm:mx-auto sm:w-full sm:max-w-sm">
                      <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                          Nombre
                      </label>
                      <input
                          onChange={(e) => setName(e.target.value)}
                          id="name"
                          name="name"
                          type="name"
                          placeholder="Tu nombre"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base
                   text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                   focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                  </div>
                  <div className="relative flex items-center gap-4 sm:mx-auto sm:w-full sm:max-w-sm">
                      <label
                          htmlFor="name"
                          className="block text-sm/6 font-medium text-gray-900">
                          Password
                      </label>
                      <input
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Jane Smith"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1
                            outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 
                            focus:outline-indigo-600 sm:text-sm/6"
                      />
                  </div>
                  <div className="relative flex items-center gap-4 sm:mx-auto sm:w-full sm:max-w-sm">
                      <button type="submit"
                          onClick={handleFormSubmit}
                          className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold cursor-pointer
                            text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Login
                      </button>
                  </div>
              </form>
          </section>
          
    </>
  
  )
}

export default Login;
 