// pages/fixed-page.jsx
'use client'

import { useState, useEffect } from 'react'

export default function FixedPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh'
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
    color: 'white'
  }

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  }

  const subtitleStyle = {
    fontSize: '1.2rem',
    opacity: 0.9
  }

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: '2rem'
  }

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }

  const cardStyle = {
    background: 'white',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  }

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#2d3748',
    borderBottom: '3px solid #667eea',
    paddingBottom: '0.5rem'
  }

  const textStyle = {
    color: '#4a5568',
    lineHeight: '1.6',
    marginBottom: '1rem'
  }

  const codeStyle = {
    background: '#2d3748',
    color: '#e2e8f0',
    padding: '1rem',
    borderRadius: '8px',
    fontFamily: 'Courier New, monospace',
    margin: '1rem 0',
    overflowX: 'auto'
  }

  const featureStyle = {
    background: '#f7fafc',
    padding: '1.5rem',
    borderRadius: '12px',
    marginBottom: '1rem',
    borderLeft: '4px solid #667eea'
  }

  const featureTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#2d3748'
  }

  const btnStyle = {
    display: 'inline-block',
    background: '#667eea',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'background 0.3s ease',
    marginTop: '1rem',
    border: 'none',
    cursor: 'pointer'
  }

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>SaaSfly</h1>
        <p style={subtitleStyle}>更轻松地将您的应用推向全球，尽在 SaaSfly</p>
      </header>

      <div style={contentStyle}>
        {/* 左侧内容 */}
        <div style={columnStyle}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>快速开始</h2>
            <p style={textStyle}>简单易上手，具备企业级品质的 Next.js 模板，打造 SaaS 服务的终极一体化解决方案，助力业务增长。</p>
            
            <h3 style={featureTitleStyle}>Monorepo</h3>
            <p style={textStyle}>平台应用以及大型项目。</p>
            
            <div style={codeStyle}>$ bun create saasfly</div>
            
            <button style={btnStyle}>立即开始</button>
          </div>
          
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>多语言支持</h2>
            <p style={textStyle}>更多 iOS 视频能够帮助用户实现"为用户提供语音服务"的场景。通过多种功能来解决不同场景的交互问题，提升品牌形象。</p>
          </div>
        </div>
        
        {/* 右侧内容 */}
        <div style={columnStyle}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>核心特性</h2>
            
            <div style={featureStyle}>
              <h3 style={featureTitleStyle}>部署到 Vercel</h3>
              <p style={textStyle}>轻松上手，快速看到场景。</p>
            </div>
            
            <div style={featureStyle}>
              <h3 style={featureTitleStyle}>Cloudflare 发布</h3>
              <p style={textStyle}>高效的交付解决方案，面向未来 5G 的版本升级。</p>
            </div>
            
            <div style={featureStyle}>
              <h3 style={featureTitleStyle}>NextAuth 最佳实践</h3>
              <p style={textStyle}>让用户体验得到更好的体验。</p>
            </div>
            
            <div style={featureStyle}>
              <h3 style={featureTitleStyle}>在线下载</h3>
              <p style={textStyle}>我们深受赞助者的喜爱。</p>
            </div>
          </div>
          
          <div style={{...cardStyle, textAlign: 'center'}}>
            <h2 style={cardTitleStyle}>在 1 小时内构建你的应用程序</h2>
            <p style={textStyle}>立即开始使用我们的模板，快速构建您的 SaaS 应用。</p>
            <button style={btnStyle}>下载模板</button>
          </div>
        </div>
      </div>
      
      <footer style={{textAlign: 'center', marginTop: '4rem', color: 'white', opacity: 0.8}}>
        <p>&copy; 2023 SaaSfly. 保留所有权利。</p>
      </footer>
    </div>
  )
}