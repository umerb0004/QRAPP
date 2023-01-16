import { Modal } from 'antd'

import { ModalProps } from '@src/typings'


export const ModalComponent = (propsValues: ModalProps) => {
  const {
    closable = true,
    onClose = () => {},
    closeModal = () => {},
    isVisible,
    width = 500,
    title,
    className = '',
    modalFooter,
    closeable = true,
    closeIcon = false,
    centered = true,
    children = {}
  } = propsValues

  const onModalClose = (isClose: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!closable) return
    if (isClose) {
      closeModal()
      onClose()
    }
  }

  return (
    <Modal
      open={isVisible}
      title={title}
      onCancel={onModalClose}
      footer={modalFooter ? modalFooter : null}
      width={width}
      className={className}
      closeIcon={closeIcon}
      closable={closeable}
      centered={centered}
    >
      <div className='modal-position'>
        {children}
      </div>
    </Modal>
  )
}

ModalComponent.displayName = 'Modal Component'
