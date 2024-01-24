 import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ModalComponentProps } from '@quillsql/react/src/components/UiComponents';

export function AntdModal({children, isOpen, onClose, title, setIsOpen, theme}: ModalComponentProps) {

  const handleCancel = () => {
    setIsOpen(false);
    if (isOpen == false && onClose) {
        onClose();
    }
  };

  return (
    <>
      <Modal title={title} open={isOpen} width={800} footer={null} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};
