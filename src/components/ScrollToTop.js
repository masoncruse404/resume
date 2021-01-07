import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { NavMenu } from './Navbar/NavbarElements'

export default function ScrollToTop(){
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
      
    }, [pathname])


    return null;
}