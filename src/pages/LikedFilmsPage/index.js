import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Modal from '../../components/PlayListComponents/PlaylistModal'
import { useParams } from 'react-router-dom'

function LikedFilmsPage() {
  const { create } = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [isGenerateMode, setGenerateMode] = useState(false)

  useEffect(() => {
    if (create) {
      setIsOpen(true)
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center h-full text-center">
        <p>
          В вас ще немає списку фільмів, створити новий?{' '}
          <span
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 text-indigo-500 bg-transparent rounded underline">
            Створити
          </span>
        </p>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="my-node"
        unmountOnExit>
        <Modal
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
          isGenerateMode={isGenerateMode}
          setGenerateMode={setGenerateMode}
        />
      </CSSTransition>
    </div>
  )
}

export default LikedFilmsPage
