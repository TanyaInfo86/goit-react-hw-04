import Modal from 'react-modal';
import { useEffect } from 'react';
import './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ image, onClose }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <Modal
            isOpen
            onRequestClose={onClose}
            onClick={handleOverlayClick}
            className="modal"
            overlayClassName="overlay"
        >
            <img src={image.urls.regular} alt={image.alt_description} />
            <p>Автор: {image.user.name}</p>
            <p>Лайки: {image.likes}</p>
            {image.description && <p>Опис: {image.description}</p>}
        </Modal>
    );
}
