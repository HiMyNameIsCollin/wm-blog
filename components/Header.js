import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Header = ({setLoading}) => {

	const router = useRouter()

	useEffect(() => {
		function fireOnScroll(){
		  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		  let scrolled = (winScroll / height) * -100;  
		  document.documentElement.style.setProperty('--scrollPercentage', scrolled + 'vh') 
		}
		window.addEventListener('scroll', fireOnScroll)
		return () => window.removeEventListener('scroll', fireOnScroll)
	},[])

	return(
		<header id='header'>
			<Image
				src='/logo.jpeg'
				height='64px'
				width='80px'
				alt="K-Pop and Cookies logo"
				className='logo'
				onClick={() => {
					setLoading(true)
			    	router.push('/')
			    }}/>
     		<a className='twitterIcon' href='' target='_blank'>
	     		<h3>Follow me!</h3>
	     		<FontAwesomeIcon icon={faTwitterSquare} size='3x' color='black' background='black'/>	     			
     		</a>
		</header>
	)
}

export default Header