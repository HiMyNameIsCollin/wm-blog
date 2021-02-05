import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'
import Link from 'next/link'
import { useState } from 'react'

async function getPosts() {
  const res = await fetch(`${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,feature_image,published_at `)
  .then((res) => res.json())
  const posts = res.posts
  return posts
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts()
  return {
    props: {posts}
  }
}


const Posts = (props) => {

	const { posts } = props
	const [loading, setLoading] = useState(false)

	return(
		<div>
		<main>
		 	<Header setLoading={setLoading} />
	        {loading && (
	          <div className='loadingIcon'></div>
	        )}
			<section>
				<Background />
				<div className='postContainer'>
					{
						posts.map((post, i) => {
							return(
			                  <Link key={i} href='/post/[slug]' as={`/post/${post.slug}`}>
			                    <a className='postCard' onClick={() => setLoading(true)}>
			                      <h3> {post.title}</h3>
			                      <img
			                        src={post.feature_image}
			                        alt='Post thumbnail'/>
			                      <h5> {post.published_at.substr(0, 10)} </h5>
			                    </a>
			                  </Link>
							)
						})
					}
				</div>
			</section>		
		</main>
		<Footer />
		</div>
	)
}

export default Posts