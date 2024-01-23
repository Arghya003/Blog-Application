import React from 'react'

const Post = () => {
  return (
      <div className=" post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2024/01/loandepot-cyber-incident-breach-ransomware.jpg?w=1390&crop=1"
            alt="image"
          />
        </div>
        <div className="text">
          <h2>This Week in AI: OpenAI finds a partner in higher ed</h2>
          <p className="info">
            <a className="author">David Arthur</a>
            <time> 2024 02-06 14:43</time>
            </p>
             <p className='summary'>
            About 16.6 million LoanDepot customers had their “sensitive
            personal” information” stolen in a cyberattack earlier this month,
            which the loan and mortgage giant has described as ransomware.
          </p>
        </div>
      </div>
  )
}

export default Post
