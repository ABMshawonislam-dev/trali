import React from 'react'
import {Panel,Rate} from 'rsuite'

const Product = (props) => {
  return (
    <div>
      <Panel  bodyFill style={{ display: 'inline-block', width: "100%" }}>
        <img src={props.img} style={{ width: "100%" }}/>
        <Rate readOnly defaultValue={2.5} allowHalf />
        <Panel header={props.heading}>
          <p>
            <small>
              A suite of React components, sensible UI design, and a friendly development experience.
            </small>
          </p>
        </Panel>
      </Panel>
    </div>
  )
}

export default Product