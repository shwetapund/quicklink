import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import copyImg from './copy.png'

function App() {
  const [url, setUrl] = useState('')
  const [slug, setSlug] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const generateLink = async () => {
    const response = await axios.post('/link', {
      url,
      slug
    })
    setShortUrl(response?.data?.data?.shortUrl)
  }

  const copyShortUrl = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Copied to clipboard!')
  }

  return (
    <div>
      <h1 className='app-title'>🔗🧬Quick Links✨🔗</h1>

      <div className='app-container'>
        <div className='link-generation-card'>
          <h2>Link Generation</h2>

          <input type='text'
            placeholder='URL'
            className='user-input'
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
            }}
          />

          <input
            type='text'
            placeholder='Slug(optional)'
            className='user-input'
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value)
            }}
          />

          <div className='short-url-container'>
            <input
              type='text'
              placeholder='Short url'
              className='input-short-url'
              value={shortUrl}
              disabled />
            <img
              src={copyImg}
              alt='copy'
              className='copy-img'
              onClick={copyShortUrl}
            />

          </div>

          <button
            type='button'
            className='btn-generate-link'
            onClick={generateLink}>
            Do Magic✨
          </button>
        </div>
        <div>
          <h2>All Links</h2>
        </div>
      </div>
    </div>
  )
}

export default App

