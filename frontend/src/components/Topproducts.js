import React from 'react'
import {Container,Grid,Row,Col } from 'rsuite';
import Product from './Product';
const Topproducts = () => {
  return (
    <Container className='container topproduct'>

        <Grid>  
            <Row className="show-grid" gutter={30}>
                <Col xs={12}>
                    <h2 >Top Products</h2>
                </Col>
                <Col xs={12}>
                    <ul>
                        <li> <span></span> All</li>
                        <li> <span></span> Boys Collection</li>
                        <li> <span></span> Girl Collection</li>
                        <li> <span></span> Shose Collection</li>
                    </ul>
                </Col>
            </Row>
        </Grid>

        <Grid>  
            <Row className="show-grid" gutter={30}>
                <Col xs={6}>
                    <Product/>
                </Col>
                <Col xs={6}>
                <Product/>
                </Col>
                <Col xs={6}>
                <Product/>
                </Col>
                <Col xs={6}>
                <Product/>
                </Col>
                
            </Row>
        </Grid>
    </Container>
  )
}

export default Topproducts