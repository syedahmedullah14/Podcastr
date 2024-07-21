import { SignedIn } from '@clerk/nextjs'
import React from 'react'

const RightSidebar = () => {
  return (
    <section className='right_sidebar text-white-1'>
      <SignedIn>

      </SignedIn>
    </section>
  )
}

export default RightSidebar