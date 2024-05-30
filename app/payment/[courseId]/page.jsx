"use client"
import CheckOut from '@/components/checkoutPayment/CheckOut'
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const StripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY)

const page = () => {
    return (
        <Elements stripe={StripePromise}>
            <CheckOut />
        </Elements>
    )
}

export default page