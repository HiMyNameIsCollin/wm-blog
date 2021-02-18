import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'
import Link from 'next/link'

import { useEffect, useState } from 'react'

async function getPosts() {
  const res = await fetch(`${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,feature_image,published_at`)
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

export default function Home(props) {

  const [loading, setLoading] = useState(false)
  const { posts } = props


  return (
    <div className='home'>
      <Head>
        <title>K-Pop and Cookies </title>
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <main id='main'>
        {loading && (
          <div className='loadingIcon'></div>
        )}
        <Header setLoading={setLoading}/>
        <section className='introSection'>
          <Background />
          <div className='introFirst'>
            <h2> Hi my name is </h2>
            <div>
              <h2>Whitney</h2>
            </div>
            <img src="/whit.jpg" alt=""/>
          </div>

          <div className='introSecond'>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quod illum omnis autem labore corporis ex alias voluptatum quasi, ut adipisci qui, expedita modi hic.</p>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quod illum omnis autem labore corporis ex alias voluptatum quasi, ut adipisci qui, expedita modi hic.</p>
            <img src="/cookie1.jpg" alt="" />        
            <p> Check back often, for all things K-Pop, cookies, and stickers. </p>  
          </div>
        </section>

        <section className='postSection'>
          <Background />
          <h2 className='pageLabel'>Latest posts</h2>
          <div className='postContainer'>
          {
            posts.map((post, i) => {
              if(i < 6){
                return(
                  <Link href='/post/[slug]' as={`/post/${post.slug}`}>
                    <a key={i} onClick={() => setLoading(true)} className='postCard'>
                      <h3> {post.title}</h3>
                      <img
                        src={post.feature_image}
                        alt='Post thumbnail'/>
                      <h5> {post.published_at.substr(0, 10)} </h5>
                    </a>
                  </Link>
                 )   
              }
            })
          }
          </div>

          <Link href='/posts' as={`/posts`}> 
            <a  onClick={() => setLoading(true)} className='morePosts'> 
              More posts
            </a> 
          </Link>

        </section>
      </main>
      <Footer />
    </div>
  )
}
