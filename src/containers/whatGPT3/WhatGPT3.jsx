import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3?" text="GPT-3 is an autoregressive language model that uses deep learning to produce human-like text. It is the latest in a series of language models developed by OpenAI, a San Francisco-based artificial intelligence research lab. GPT-3 is the largest language model ever created, with over 175 billion parameters and 45GB of text data." showBorder='false' showAnim='false' />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="GPT-3 can be used to create chatbots that can answer questions, provide information, and even hold conversations. It can also be used to create chatbots that can answer questions, provide information, and even hold conversations." />
        <Feature title="Dataset" text="GPT-3 was trained on a dataset of 45GB of text data. This dataset was collected from a variety of sources, including Wikipedia, Reddit, and the Common Crawl. The dataset was then split into 10GB chunks, which were then used to train the model." />
        <Feature title="Turing Test" text="GPT-3 has passed the Turing Test, a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human. The test was conducted by OpenAI, and the results were published in a paper titled 'The Turing Test is Broken: Why Language Models are Not Yet Ready for Prime Time'." />
      </div>
    </div>
  )
}

export default WhatGPT3