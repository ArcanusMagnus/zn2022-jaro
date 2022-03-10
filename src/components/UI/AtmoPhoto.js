import yellow from "../../assets/images/atmo/yellow.jpg"
import yellow_square from "../../assets/images/atmo/yellow-square.jpg"
import blue from "../../assets/images/atmo/blue.jpg"
import blue_square from "../../assets/images/atmo/blue-square.jpg"
import red from "../../assets/images/atmo/red.jpg"
import red_square from "../../assets/images/atmo/red-square.jpg"
import violet from "../../assets/images/atmo/violet.jpg"
import violet_square from "../../assets/images/atmo/violet-square.jpg"

import styles from './AtmoPhoto.module.css';

const AtmoPhoto = props => {
    const photos = [yellow, blue, red, violet];
    const squares = [yellow_square, blue_square, red_square, violet_square];
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

export default AtmoPhoto;