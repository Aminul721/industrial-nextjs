"use client"
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

const DuplicateLayout = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>

            <Toaster position="top-right"
                containerStyle={{
                    top: 60,

                }}
            />
        </>
    )
}

export default DuplicateLayout