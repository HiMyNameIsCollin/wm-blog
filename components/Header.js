import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


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
		<Link href='/' as='/'>
			<a style={{height: '64px', width: '80px', borderRadius: '0'}}>
			<Image
				src='/logo.jpeg'
				height='64px'
				width='80px'
				alt="K-Pop and Cookies logo"
				className='logo'
				onClick={() => {
					if(router.route === '/'){
					  document.body.scrollTop = 0
					  document.documentElement.scrollTop = 0
					}else {
						setLoading(true)
					}
			    }}/>
			</a>
		</Link>

     		<a className='twitterIcon' href='https://twitter.com/whitneymayes' target='_blank'>
	     		<h3>Follow me!</h3>
	     		<Image 
	     			alt=""
	     			src='/twitter-square.png'		
	     			height='48px'
	     			width='48px'/> 			
     		</a>
		</header>
	)
}

export default Header