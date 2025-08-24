interface Prop {
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, handleClose, children }: Prop) => {
  return (
    <>
      {isOpen ? (
        // Modal Wrapper to handle outside modal click
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-black/50"
          onClick={handleClose}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative mx-6 max-w-xs rounded-3xl bg-gradient-to-b from-black to-[#3468B2] px-6 md:max-w-sm md:rounded-xl md:px-6"
          >
            <button
              onClick={handleClose}
              className="absolute right-8 top-5 text-white duration-200 hover:scale-110"
            >
              X
            </button>
            {children}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
