'use client'

import { createUser } from '@/app/lib/actions/user'
import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Link from "next/link";

export default function FormSigin() {
  // Init
  const initialState = {
    success: false,
    payload: null,
    message: null,
    errors: [],
    input: null,
  }

  // Router
  const { push: redirect } = useRouter()

  const [state, handleSubmit, isPending] = useActionState(
    createUser,
    initialState
  )

  useEffect(() => {
    if (state.success) {
      // Do toast
      toast.success('User created successfully! Redirecting to login...')

      //
      setTimeout(() => {
        redirect('/login')
      }, 1000)

      //
    }
  }, [state])

  return (
    <form
      data-loading={isPending}
      action={handleSubmit}
      className="flex flex-col gap-3"
      noValidate
    >
      <div className='text-start'>
        <label htmlFor="name" className='text-md'>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          defaultValue={state?.input?.name}
          className={`${
            state?.errors.find((error) => error.field === 'name')
              ? 'border-red-500! bg-red-50!'
              : 'rounded-md'
          }`}
        />
        {state?.errors.find((error) => error.field === 'name') && (
          <p className="form-error">
            {state?.errors.find((error) => error.field === 'name')?.message}
          </p>
        )}
      </div>
      <div className='text-start'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          defaultValue={state?.input?.email}
          className={`${
            state?.errors.find((error) => error.field === 'email')
              ? 'border-red-500! bg-red-50!'
              : ''
          }`}
        />
        {state?.errors.find((error) => error.field === 'email') && (
          <p className="form-error">
            {state?.errors.find((error) => error.field === 'email')?.message}
          </p>
        )}
      </div>
      <div className='text-start'>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className={`${
            state?.errors.find((error) => error.field === 'password')
              ? 'border-red-500! bg-red-50!'
              : ''
          }`}
        />
        {state?.errors.find((error) => error.field === 'password') && (
          <p className="form-error">
            {state?.errors.find((error) => error.field === 'password')?.message}
          </p>
        )}
      </div>
      <div className="flex justify-center ">
        <button type="submit" className="button button-default w-full">
          {isPending ? 'Please wait...' : 'Sign Up'}
        </button>
      </div>
      <div className='text-center gap-2 flex justify-center'>
        <p>Don't have an account yet?</p>
        <Link href="/signin" className='text-green-800 cursor-pointer hover:text-green-900 hover:underline'>Sign Up</Link>
      </div>
    </form>
  )
}