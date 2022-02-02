import React from 'react';
import Article from './Article';

function ArticleList({ ...blogData }) {
    
const blogArt = blogData.posts.map(blog => {
    let emoji = ''
    if(blog.minutes <= 5) {
        emoji = '☕'
    } else if (blog.minutes > 5 && blog.minutes <= 10) {
        emoji = '☕'.repeat(2)
    } else if (blog.minutes > 10 && blog.minutes <= 15) {
        emoji = '☕'.repeat(3)
    } else if (blog.minutes > 15 && blog.minutes <= 20) {
        emoji = '☕'.repeat(4)
    } else if (blog.minutes > 20 && blog.minutes <= 25) {
        emoji = '☕'.repeat(5)
    } else if (blog.minutes > 25 && blog.minutes < 30) {
        emoji = '☕'.repeat(6)
    } else if (blog.minutes >= 30 && blog.minutes <= 40) {
        emoji = '🍱'.repeat(4)
    } else if (blog.minutes > 40 && blog.minutes <= 50) {
        emoji = '🍱'.repeat(5)
    } else if (blog.minutes > 50 && blog.minutes <= 60) {
        emoji = '🍱'.repeat(6)
    } else if (blog.minutes > 60 && blog.minutes <= 70) {
        emoji = '🍱'.repeat(7)
    } 
return (
<Article key={blog.id} title={blog.title} date={blog.date} preview={blog.preview} minutes={` • ${emoji} ${blog.minutes} min read`}/>
    )
})
  return (
  <main>
      {blogArt}
  </main>
  )
}

export default ArticleList;
