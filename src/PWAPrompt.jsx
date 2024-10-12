import React, { useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

function PWAPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose(true)
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  useEffect(() => {
    if (offlineReady || needRefresh) {
      setClose(false)
    }
  }, [offlineReady, needRefresh])

  if (close || (!offlineReady && !needRefresh)) return null

  return (
    <div className="fixed bottom-0 right-0 m-4 p-3 bg-white border rounded shadow-lg">
      <div className="mb-2">
        {offlineReady ? (
          <span>App ready to work offline</span>
        ) : (
          <span>New content available, click on reload button to update.</span>
        )}
      </div>
      {needRefresh && (
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => updateServiceWorker(true)}
        >
          Reload
        </button>
      )}
      <button
        className="px-4 py-2 bg-gray-300 rounded"
        onClick={() => handleClose()}
      >
        Close
      </button>
    </div>
  )
}

export default PWAPrompt