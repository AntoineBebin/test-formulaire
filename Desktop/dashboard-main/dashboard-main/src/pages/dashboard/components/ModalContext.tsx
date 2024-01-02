import { createContext, useContext, useReducer, ReactNode } from 'react'

type ModalName = 'Acces' | 'Acces2' | 'Acces3' | 'Information' | 'Payment' | 'Payment2' | 'Suscribe' | ''

interface ModalState {
  showModal: boolean
  modalName: ModalName
}

interface ModalContextType {
  showModal: boolean
  modalName: ModalName
  openModal: (modalName: ModalName) => void
  closeModal: () => void
}

type ModalAction = { type: 'OPEN_MODAL'; modalName: ModalName } | { type: 'CLOSE_MODAL' }

const initialState: ModalState = {
  showModal: false,
  modalName: 'Information'
}

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, showModal: true, modalName: action.modalName }
    case 'CLOSE_MODAL':
      return { ...state, showModal: false, modalName: '' }
    default:
      return state
  }
}

const ModalContext = createContext<ModalContextType | any>(initialState)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState)

  const openModal = (modalName: ModalName) => {
    dispatch({ type: 'OPEN_MODAL', modalName })
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return <ModalContext.Provider value={{ ...state, openModal, closeModal }}>{children}</ModalContext.Provider>
}

export const useModal = () => {
  return useContext(ModalContext)
}
