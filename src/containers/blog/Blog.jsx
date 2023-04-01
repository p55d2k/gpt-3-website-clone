import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const blogData = [
  {
    imgUrl: blog02,
    date: 'Jul 20, 2022',
    title: "OpenAI's GPT-3 is a game-changer",
  },
  {
    imgUrl: blog03,
    date: 'Sep 14, 2022',
    title: 'GPT-3 is the future of AI',
  },
  {
    imgUrl: blog04,
    date: 'Nov 02, 2022',
    title: 'What can GPT-3 really do?',
  },
  {
    imgUrl: blog05,
    date: 'Dec 30, 2022',
    title: 'A look at GPT-3 in 2022',
  },
]

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening. Read about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date='June 11, 2022' title='GPT-3 has been released' />
        </div>
        <div className="gpt3__blog-container_groupB">
          {blogData.map((data, index) => (
            <Article imgUrl={data.imgUrl} date={data.date} title={data.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog