import image1 from "../../assets/images/pozorumeni/pozorumeni1.jpg";
import square1 from "../../assets/images/pozorumeni/pozorumeni1-square.jpg";
import image2 from "../../assets/images/pozorumeni/pozorumeni2.jpg";
import square2 from "../../assets/images/pozorumeni/pozorumeni2-square.jpg";
import image3 from "../../assets/images/pozorumeni/pozorumeni3.jpg";
import square3 from "../../assets/images/pozorumeni/pozorumeni3-square.jpg";
import image4 from "../../assets/images/pozorumeni/pozorumeni4.png";
import square4 from "../../assets/images/pozorumeni/pozorumeni4-square.png";

import styles from './AtmoPhoto.module.css';

const PozorumeniPhoto = props => {
    const photos = [image1, image2, image3, image4];
    const squares = [square1, square2, square3, square4];
    const selector = Math.floor(Math.random() * 4);

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