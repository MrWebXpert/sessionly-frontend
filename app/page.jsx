"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import HoItWork from '@/components/Howitwork'
import ExpertBox from '@/components/Expertbox'
import PromptComponent from '@/components/Slide'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/Footer'
import Expertlisting from './Expertlisting/page'
import Testimonial from '@/components/testinomial'

const Page = () => {
  const [user, setUser] = useState(null)
  const [userImage, setUserImage] = useState('')
  const [userType, setUserType] = useState('')
  const [email, setEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const userId = localStorage.getItem('id')
    const userImageUrl = localStorage.getItem('userImage') || '/dummy-image.png' // Dummy image URL
    const userType = localStorage.getItem('userType')
    const userEmail = localStorage.getItem('email')
    if (userId) {
      setUser(userId)
      setUserImage(userImageUrl)
      setUserType(userType)
      setEmail(userEmail)
    }
    console.log(userId)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('id')
    localStorage.removeItem('userImage')
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    localStorage.removeItem('email')
    setUser(null)
    setUserImage('')
    setUserType('')
    setEmail('')
    router.push('/')
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-row items-center justify-between w-4/5 py-40 mx-auto md:px-6">
        <div className="">
          <h1 className="text-2xl font-bold md:text-6xl " style={{ lineHeight: '60px' }}>Become fluent in any language</h1>
          <ul className="grid text-[16px] font-medium list-none gap-y-1 mt-7">
            <li className="flex items-center">
              <div className="shrink-0 me-3">
                <img height="12" width="12" className="" src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png" alt="" />
              </div>
              <span>Take customizable 1-on-1 lessons trusted by millions of users</span>
            </li>
            <li className="flex items-center">
              <div className="shrink-0 me-3">
                <img height="12" width="12" className="" src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png" alt="" />
              </div>
              <span>Learn from certified teachers that fit your budget and schedule</span>
            </li>
            <li className="flex items-center">
              <div className="shrink-0 me-3">
                <img height="12" width="12" className="" src="https://scdn.italki.com/ng/static/image/asgardhp/redx2.png" alt="" />
              </div>
              <span>Connect with a global community of language learners</span>
            </li>
          </ul>
          <button type="button" className="mt-5 ant-btn w-50 sm:mt-7 sm:mx-auto bg-[#10b981] py-3 px-6 rounded">
            <span>Start now</span>
          </button>
        </div>
        <div className="flex items-center ">
          <picture>
            {/* <source srcSet="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w_1.5x.webp" type="image/webp" />
            <img height="360" width="560" className="" src="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w.png" alt="" /> */}
            <img src='/hero-image.jpg' alt='image' />
          </picture>
        </div>
      </div>
      {/* <ExpertBox /> */}
      <Expertlisting />
      <PromptComponent />
      <HoItWork />
      <Testimonial />
      <FooterSection />
    </>
  )
}

export default Page