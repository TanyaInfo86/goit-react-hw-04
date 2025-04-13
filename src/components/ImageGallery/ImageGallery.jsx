import ImageCard from '../ImageCard/ImageCard';
import './ImageGallery.module.css';

function ImageGallery({ images = [], onImageClick }) {
    if (!images || !Array.isArray(images) || !images.length) return null;

    return (
        <ul className="image-gallery">
            {images.map(img => (
                <li key={img.id}>
                    <ImageCard image={img} onClick={() => onImageClick(img)} />
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;