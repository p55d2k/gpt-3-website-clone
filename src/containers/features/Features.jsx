import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'AI Powered',
    text: 'GPT-3 is an AI-powered language model that uses deep learning to produce human-like text. It is the third iteration of OpenAI’s GPT model, which was first released in 2019. GPT-3 is the largest language model ever created, with 175 billion parameters and 175 trillion connections.'
  },
  {
    title: 'Natural Language Processing',
    text: 'GPT-3 uses a technique called Natural Language Processing (NLP) to understand the meaning of text. NLP is a branch of AI that focuses on the interaction between computers and humans using the natural language.'
  },
  {
    title: 'Machine Learning',
    text: 'Machine learning is a type of artificial intelligence (AI) that provides computers with the ability to learn without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.'
  },
  {
    title: 'Deep Learning',
    text: 'Deep learning is a subset of machine learning in artificial intelligence (AI) that has networks capable of learning unsupervised from data that is unstructured or unlabeled. Deep learning algorithms use multiple processing layers to progressively extract higher-level features from the raw input.'
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now. You just need to Realise. Step into the Future and Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((feature, index) => (
          <Feature title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  )
}

export default Features