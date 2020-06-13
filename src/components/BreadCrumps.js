import React from 'react'
import { Row } from "react-bootstrap";

const BreadCrumps = ({breadcrumbs, style}) => {

    if (breadcrumbs == undefined) {
        breadcrumbs = ["Name of Page", "Example", `Use "breadcrumps" props`]
    }

    return (
        <Row style={{marginBottom: "1rem", ...style}}>
        {
            breadcrumbs.map((breadcrumb, index) => {
                if (index === breadcrumbs.length - 1) {
                  return (
                    <div key={index}>
                    <span style={{marginRight: "0.5rem", color: "#909090", fontSize: "14px"}}>{breadcrumb}</span>
                    </div>
                  )
                } else {
                  return (
                    <div key={index}>
                    <span style={{marginRight: "0.5rem", color: "#909090", fontSize: "14px"}}>{breadcrumb}</span>
                    <span style={{marginRight: "0.5rem", color: "#909090", fontSize: "14px"}}>/</span>
                    </div>
                   )
                }
             
              })
        }
        </Row>
    )
}

export default BreadCrumps;