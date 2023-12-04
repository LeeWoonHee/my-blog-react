'use client'
import { useEffect,useState } from "react"
import Link from "next/link"

const testPost = [
  {name :'post1', desc: 'asdasdasd'},
  {name :'post2', desc: 'asdasdasd'},
  {name :'post3', desc: 'asdasdasd'},
  {name :'post4', desc: 'asdasdasd'},
  {name :'post5', desc: 'asdasdasd'},
  {name :'post6', desc: 'asdasdasd'},
  {name :'post7', desc: 'asdasdasd'},
  {name :'post8', desc: 'asdasdasd'},
  {name :'post9', desc: 'asdasdasd'}
  ]
export default function Posts() {
  const [posts, setPosts ] = useState([])

    useEffect( () => {
      fetch('http://172.30.1.32:3000/posts/latest')
        .then(res => res.json())
        .then(result => {setPosts(result.data)} )
    }, [])



  return(
    <div className='bg-white'>
    <div className='post-wrapper'>
      <div className='w-9/10 blex-left text-5xl font-extrabold'>THE ELSE POST</div>
      <div className='post'>
        {console.log(posts)}
      {
        posts.map((item, index) => {
          return(
            <div
              key={index}
              className='post-box mx-20 blex mb-40  overflow-hidden hover:cursor-pointer '
              style={{width: 360, height: 450,border: '1px solid #cecece', borderRadius:20 }}>
              <Link className='w-full h-full blex-top' href={`/post/${item.id}`}>
                <div style={{width:'100%',height: '190px', overflow : 'hidden'}}><img src={`${item.thumbnail}`} alt='' style={{width:'100%'}}/></div>
                <div className='flex flex-wrap w-full mx-20 py-30' style={{height:'260px'}}>
                  <div className='post-desc'>
                    <div className='post-title '>{item.title || testPost[0].name}</div>
                    <div className='post-sub-title'>{item.sub_title || testPost[0].name}</div>
                  </div>
                  <div className='blex-left w-full mt-20'>
                    <div className='writer-image'><img src={`${item.writer.profile}`} alt='' style={{width:'100%'}}/></div>
                    <div>
                      <div className='text-xs font-medium text-dark-gray'>{item.writer.position || testPost[0].name}</div>
                      <div className='text-xs font-medium text-dark-gray'>{item.writer.nickname || testPost[0].name}</div>
                    </div>
                  </div>
                </div>

              </Link>

            </div>

          )
        })
      }
          <div className='more-posts-button'><Link href='/posts' className='button'>더 보기</Link></div>
      </div>
      {/*<div className='test w-full ql-snow ql-editor' dangerouslySetInnerHTML={{__html : test.content}}></div>*/}
      <style jsx>{`
        .post-wrapper{
          height:100vh;
          padding-top:5.729vw;
          max-width:1580px;
          display:flex;
          justify-content: center;
          flex-wrap:wrap;
          margin: 0 auto;
          
          .post{
            display:flex;
            flex-wrap:wrap;
            margin-right:70px;
            padding-top:3.125vw;
            width:100%;
            justify-content: center;
            .post-box{
              transition: all .3s;
              &:hover{
                box-shadow: 0 0 10px rgba(0, 0, 0, .3);
                transform:translateY(-10px);
              }
            .post-desc{
              width:100%;
              height:140px;
              padding-bottom:20px;
              position:relative;
              ::before{
                content:'';
                display:block;
                width:100%;
                height:1px;
                background: #e2e2e2e2;
                position:absolute;
                bottom:0;
              }
              
              .post-title{
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
                align-items: center;
                align-content: center;
                justify-content: flex-start;
                justify-items: flex-start;
                width:100%;
                font-size:24px;
                font-weight:700;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .post-sub-title{
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
                align-items: center;
                align-content: center;
                justify-content: flex-start;
                justify-items: flex-start;
                width:100%;
                margin-top:20px;
                color:#979797;
                font-weight:500;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
              .writer-image{
                width:40px;
                height:40px;
                border-radius:50%;
                border: 1px solid #d9d9d9;
                margin-right:8px;
                overflow: hidden;
              }
          }
            .more-posts-button{
              width:100%;
              display:flex;
              justify-content: center;
              align-items: center;
              padding-top:50px;
              padding-bottom:110px;
            }
          }
        }
      `}
      </style>
    </div>
    </div>
  )
}