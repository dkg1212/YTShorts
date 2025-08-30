import React from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { Input } from '../ui/input'
import { ModeToggle } from '../mode-toggle'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-14 border-b'>
      {/** Logo */}
      <div>
        <h1 className=' font-bold'>YT<span className="text-red-500">Shorts</span></h1>
      </div>

          {/*Search Input field */}
          <div className='w-1/2'>
            <Input type="text" 
            placeholder="Search..." />
          </div> 

          {/** Account management */}
          <div className='flex items-center space-x-2'>
            <Link href="/upload">
              <Button><Plus/>Create</Button>
            </Link>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-[#6c47ff] 
                text-ceramic-white  font-medium cursor-pointer">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <ModeToggle/>
          </div>


    </div>

  )
}

export default Navbar
