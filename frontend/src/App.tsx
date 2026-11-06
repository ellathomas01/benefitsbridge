import { useEffect, useState } from 'react'

function App() {
  const [apiStatus, setApiStatus] = useState('Checking...')
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Backend returned an error')
        }
        return response.json()
      })
      .then((data) => {
        setApiStatus(`${data.status} — ${data.service}`)
      })
      .catch(() => {
        setApiStatus('Unavailable')
        setError('Could not connect to the BenefitsBridge API.')
      })
  }, [])

  return (
    <main>
      <h1>BenefitsBridge</h1>
      <p>AI-powered benefits navigation for Santa Clara County residents.</p>

      <section>
        <h2>Backend Connection</h2>
        <p>API Status: {apiStatus}</p>
        {error && <p role="alert">{error}</p>}
      </section>
    </main>
  )
}

export default App
