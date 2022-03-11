import image1 from "../../assets/images/pozorumeni/pozorumeni1.jpg";
import square1 from "../../assets/images/pozorumeni/pozorumeni1-square.jpg";
import image2 from "../../assets/images/pozorumeni/pozorumeni2.jpg";
import square2 from "../../assets/images/pozorumeni/pozorumeni2-square.jpg";

import styles from './AtmoPhoto.module.css';

const PozorumeniPhoto = props => {
    const photos = [image1, image2];
    const squares = [square1, square2];
    const selector = Math.floor(Math.random() * 2);

    const image = photos[selector];
    const square = squares[selector];
    
    return <>
    <div className={props.wideClass || styles.hidden}>
          <img src={image} alt="" />
        </div>
        <div className={props.squareClass}>
          <img src={square} alt="" />
        </div>
    </>
}

export default PozorumeniPhoto;