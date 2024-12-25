import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const changeTheme = ()=>{
    if(theme == 'light'){
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
      logoRef.current.innerHTML = '<h3><i class="ri-sun-line"></i></h3>'
    }else{
      localStorage.setItem('theme', 'light')
      setTheme('light')
      logoRef.current.innerHTML = '<h3><i class="ri-sun-fill"></i></h3>'
    }
  }

  const logoRef = useRef(null)
  const themeRef = useRef(null)

  useEffect(function(){
    themeRef.current.setAttribute('id', theme)
  },[theme])

  return (
      <div ref={themeRef} className='h-screen w-full flex items-center justify-center'>
      <h1 className='text-5xl font-bold'>NAMAN SHRIVASTAVA</h1>
        <div className='flex justify-between items-center p-12 fixed w-full top-0'>
          <h1 className='text-2xl font-semibold'>Naman Pvt Ltd</h1>
          <div className='flex items-center gap-8 text-lg font-medium'>
            <h4>About</h4>
            <h4>Contact Us</h4>
            <h4>Services</h4>
            <h3 className='text-2xl' ref={logoRef} onClick={changeTheme}><i class="ri-sun-line"></i></h3>
          </div>
        </div>
      </div>
  )
}

export default App