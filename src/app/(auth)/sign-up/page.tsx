'use client'
import { signIn, signUp } from "@/app/lib/auth-client"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useState, FormEvent } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-toastify"

function SignUp () {
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye(!eye)
    }

    const [passwordError, setPasswordError] = useState<string | null>(null)
    const handleForm = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget)
        const userInfo = Object.fromEntries(formdata)
        const password = userInfo.password as string

        if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            setPasswordError("Password must have at least 6 characters, including an uppercase and a lowercase letter.")
            return
        }
        setPasswordError(null)

        const {data, error} = await signUp.email({
            email: userInfo.email as string,
            password: password,
            name: userInfo.name as string,
            image: userInfo.image as string
        })

        if(data){
            redirect('/sign-in')
        }else{
            toast.error(error.message)
        }

    }
   const handleGoogle = async() => {
    const data = await signIn.social({
        provider: "google",
    })
    if(data){
        toast.success('Successfully Logged in')
    }
  }
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center h-200">
                <div className="border p-4 border-gray-200 rounded-2xl">
                    <form onSubmit={handleForm} className="flex flex-col min-w-100 space-y-2">
                        <label htmlFor="">Name</label>
                        <input className="border border-gray-200 p-2 rounded-2xl" type="text" name="name"/>
                        <label>Email</label>
                        <input className="border border-gray-200 p-2 rounded-2xl" type="email" name="email"/>
                        <label>Photo URL</label>
                        <input className="border border-gray-200 p-2 rounded-2xl" type="text" name="image"/>
                        <label>Password</label>
                        <div className="relative">
                            <input className="border border-gray-200 p-2 rounded-2xl w-full" type={eye? 'text': 'password'} name="password"/>
                            <div className="absolute right-3 top-3 cursor-pointer" onClick={handleEye}>
                                {
                                    eye? <AiFillEye className="text-xl "/>: <AiFillEyeInvisible className="text-xl "/>
                                }
                            </div>
                        </div>
                        {passwordError && <p className="text-red-500 text-sm max-w-100 text-center">{passwordError}</p>}
                        <button type="submit" className="bg-[#262f40] active:scale-97 my-2 rounded-2xl p-2 text-white font-semibold">Sign Up</button>
                        <div>
                           <div className="flex items-center gap-2">
                            <hr className="text-gray-300 flex-1"/>
                            <p>Or</p>
                            <hr className="text-gray-300 flex-1"/>
                           </div>
                            <button onClick={handleGoogle} type="button" className="flex justify-center items-center gap-2 border w-full p-2 border-gray-200 rounded-2xl active:scale-98"><FcGoogle className="text-2xl"/> Continue With Google</button>
                        </div>
                        <p className="text-gray-500">Have an account? <Link className="hover:underline" href={'/sign-in'}>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
