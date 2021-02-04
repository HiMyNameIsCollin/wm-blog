import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Background from '../../components/Background'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

async function getPost(slug) {
	const res = await fetch(`${process.env.BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,html,published_at`)
	.then((res) => res.json())
	.catch((err) => console.log(err))
	const posts = res.posts
	return posts[0]
}

export const getStaticProps = async ({ params }) => {
	const post = await getPost(params.slug)
	return {
		props: { post },
		revalidate: 10
	}
}

export const getStaticPaths = () => {
	return{
		paths: [],
		fallback: true
	}
}


const Post = (props) => {
	const router = useRouter()
	const { post } = props

	const [commentsEnabled, setCommentsEnabled] = useState(false)
	const [loading, setLoading] = useState(false)

	const loadComments = () => {
		setCommentsEnabled(true)
		window.disqus_config = function () {
	    this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
	    this.page.identifier = post.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
	    };
	    document.getElementById('commentSection').style.display = 'block'
	   	const script = document.createElement('script')
	   	script.src = 'https://blog3-3.disqus.com/embed.js';
	   	script.setAttribute('data-timestamp', Date.now().toString())
	   	document.body.appendChild(script)
	}

	if(router.isFallback){
		return (
          <div>
            <h2>Loading... </h2>
          </div>
		)
	}
	return(
		<div>
		<main>
			<Header setLoading={setLoading}/>
	        {loading && (
	          <div className='loadingIcon'></div>
	        )}
			<section className='openedPostSection'>
				<h2 className='pageLabel'>{post.published_at.substr(0, 10)}</h2>
				<h1> {post.title}</h1>
				<Background />
				<div className='blogPost' dangerouslySetInnerHTML={ { __html : post.html } }/>
				{!commentsEnabled && (
					<div className='morePosts' onClick={loadComments}>
						Load comments
					</div>
				)}
			</section>
			<section className='commentSection' id='commentSection'>
				<div id="disqus_thread"></div>
			</section>
		</main>
		<Footer />
		</div>
	)
}

export default Post