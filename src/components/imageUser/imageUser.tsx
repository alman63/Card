import imgSrc from './img/1.jpg';
import './image.css';

export const ImageUser = () => {
    return <img src={imgSrc} alt="фото" className="card__image" />;
};
