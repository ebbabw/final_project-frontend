import React from 'react'

import { SignUpForm } from '../components/SignUpForm'
import { LogInForm } from '../components/LogInForm'

import { Header } from '../lib/Header'

export const MemberForm = () => {

return (
    
    <div>
        <Header /> 
        
        <SignUpForm />
        <LogInForm />
    </div>

    )
}
