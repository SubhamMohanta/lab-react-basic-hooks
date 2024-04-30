import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const ParentContext = ({ children }) => {

    const [isDark, setIsDark] = useState(true)

    const [mainCount, setMainCount] = useState(5000)

    const decreaseCount = () => {
        setMainCount(mainCount - 1000)
    }

    return <AppContext.Provider value={{ mainCount, setMainCount, decreaseCount, isDark, setIsDark }}>
        {children}
    </AppContext.Provider>
}

export default ParentContext