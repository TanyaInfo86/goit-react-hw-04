import './ImageCard.module.css';

function ImageCard({ image, onClick }) {
    return (
        <div className="image-card" onClick={onClick}>
            <img src={image?.urls?.small} alt={image?.alt_description || 'image'} />
        </div>
    );
}
export default ImageCard;