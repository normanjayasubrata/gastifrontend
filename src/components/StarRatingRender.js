import React from 'react'
import { star } from "../assets/images";
import { Image, Row } from "react-bootstrap";

const StarRatingRender = ({stars, style, size, review, spacing}) => {
    if (stars == undefined) stars = 5;
    let additionalStyle = {}
    if (style) additionalStyle = style;
    console.log({...additionalStyle})

    let starArray = [];
    for (let index = 0; index < stars; index++) {
      starArray.push("star");
    }

    return (
        <Row style={style ? style : {marginBottom: "-0.5rem"}}>
        {
            starArray.map((stars, index) => {
            return (
              <Image key={index} src={star} width={size ? `${size}px` : "16px"} height={size ? `${size}px` : "16px"} style={{marginRight: spacing ? `${spacing}rem` : "0.5rem"}} />
            );
          })
        }
         { review ? <p style={{color: "#909090", fontSize: "14px"}}>{`( ${review.value} ${review.word} )`}</p> : null}
        </Row>
    )
    
}


export default StarRatingRender;