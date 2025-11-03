// apps/nexijs/src/app/[lang]/(dashboard)/dashboard/page.tsx
'use client'

import { useState, useEffect } from 'react'

export default function DashboardPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <>
      {/* 重置所有样式 */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          min-height: 100vh;
        }
        #saasfly-container * {
          all: unset;
        }
      `}</style>

      <div id="saasfly-container" style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>SaaSfly</h1>
          <p style={subtitleStyle}>更轻松地将您的应用推向全球，尽在 SaaSfly</p>
        </header>

        <div style={{...gridStyle, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'}}>
          {/* 左侧列 */}
          <div style={columnStyle}>
            <section style={cardStyle}>
              <h2 style={cardTitleStyle}>快速开始</h2>
              <p style={textStyle}>
                简单易上手，具备企业级品质的Next.js模板。打造SaaS服务的终极一体化解决方案，助力业务增长。
              </p>
              
              <h3 style={sectionTitleStyle}>Monorepo</h3>
              <p style={textStyle}>平台应用以及大型项目。</p>
              
              <div style={codeStyle}>$ bun create saasfly</div>
              
              <button style={buttonStyle}>立即开始</button>
            </section>
            
            <section style={cardStyle}>
              <h2 style={cardTitleStyle}>多语言支持</h2>
              <p style={textStyle}>
                9位网络终端助手提供支持，为用户提供语音服务，帮助用户实现语音交互、语音交互、语音交互等功能。
              </p>
            </section>
          </div>
          
          {/* 右侧列 */}
          <div style={columnStyle}>
            <section style={cardStyle}>
              <h2 style={cardTitleStyle}>核心特性</h2>
              
              <div style={featureStyle}>
                <h3 style={featureTitleStyle}>部署到 Vercel</h3>
                <p style={textStyle}>轻松上手，快速看到效果。</p>
              </div>
              
              <div style={featureStyle}>
                <h3 style={featureTitleStyle}>使用 Cloudflare 发布应用</h3>
                <p style={textStyle}>高效的交付解决方案，使得传统基于Cloudflare构建的定制化解决方案成为智能家居的核心。</p>
              </div>
              
              <div style={featureStyle}>
                <h3 style={featureTitleStyle}>NextAuth</h3>
                <p style={textStyle}>让你最佳实践，与您分享。用户发现能够帮助客户开发更多交付工具，提升客户体验和效率。</p>
              </div>
            </section>
            
            <section style={{...cardStyle, textAlign: 'center'}}>
              <h2 style={cardTitleStyle}>在 1 小时内构建你的应用程序</h2>
              <p style={textStyle}>立即开始使用我们的模板，快速构建您的 SaaS 应用。</p>
              <button style={buttonStyle}>下载模板</button>
            </section>

            <section style={{...cardStyle, background: 'rgba(255,255,255,0.9)'}}>
              <h2 style={cardTitleStyle}>加入我们</h2>
              <p style={textStyle}>访问我们的社区获取更多资源和支持</p>
              <a 
                href="https://diskcond.org/join/7d4b6" 
                style={{...buttonStyle, display: 'inline-block', textDecoration: 'none'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                立即加入
              </a>
            </section>
          </div>
        </div>
        
        <footer style={footerStyle}>
          <p>&copy; 2023 SaaSfly. 保留所有权利。</p>
        </footer>
      </div>
    </>
  )
}

// 样式定义
const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  minHeight: '100vh',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  position: 'relative',
  zIndex: 1
}

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '40px',
  color: 'white',
  padding: '20px 0'
}

const titleStyle: React.CSSProperties = {
  fontSize: '48px',
  fontWeight: 'bold',
  marginBottom: '16px',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
}

const subtitleStyle: React.CSSProperties = {
  fontSize: '20px',
  opacity: 0.9,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.5
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gap: '24px',
  width: '100%'
}

const columnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
}

const cardStyle: React.CSSProperties = {
  background: 'white',
  padding: '32px',
  borderRadius: '12px',
  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
  display: 'block',
  width: '100%',
  position: 'relative'
}

const cardTitleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
  color: '#1a202c',
  borderBottom: '3px solid #667eea',
  paddingBottom: '8px',
  display: 'block'
}

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: '600',
  margin: '16px 0 8px 0',
  color: '#2d3748',
  display: 'block'
}

const textStyle: React.CSSProperties = {
  color: '#4a5568',
  lineHeight: 1.6,
  marginBottom: '16px',
  fontSize: '16px',
  display: 'block'
}

const codeStyle: React.CSSProperties = {
  background: '#2d3748',
  color: '#e2e8f0',
  padding: '16px',
  borderRadius: '8px',
  fontFamily: 'Monaco, "Courier New", monospace',
  margin: '16px 0',
  overflowX: 'auto',
  fontSize: '14px',
  display: 'block'
}

const featureStyle: React.CSSProperties = {
  background: '#f7fafc',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '16px',
  borderLeft: '4px solid #667eea',
  display: 'block'
}

const featureTitleStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '8px',
  color: '#2d3748',
  display: 'block'
}

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  background: '#667eea',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '6px',
  fontWeight: '600',
  marginTop: '16px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  textAlign: 'center',
  transition: 'background-color 0.2s ease'
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '60px',
  color: 'white',
  opacity: 0.8,
  padding: '20px 0',
  display: 'block'
}