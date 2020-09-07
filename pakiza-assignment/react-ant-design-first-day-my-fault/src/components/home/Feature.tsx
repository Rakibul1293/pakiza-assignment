import React from 'react';

import image1 from '../../assets/images/services1.jpg';
import image2 from '../../assets/images/services2.jpg';
import image3 from '../../assets/images/services3.jpg';
import image4 from '../../assets/images/services4.jpg';
import image5 from '../../assets/images/services5.jpg';
import image6 from '../../assets/images/services6.jpg';

import { Row, Card, Col } from 'antd';
const { Meta } = Card;

function AppFeature() {
    return (
        <div id="services" className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Our Services</h2>
                    </div>
                </div>

                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Web Design" src={image1} />}
                        >
                            <Meta title="Web Design" />
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Web Development" src={image2} />}
                        >
                            <Meta title="Web Development" />
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Grapics Design" src={image3} />}
                        >
                            <Meta title="Grapics Design" />
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Wordpress Customization" src={image4} />}
                        >
                            <Meta title="Wordpress Theme Customization" />
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Wordpress Theme Development" src={image5} />}
                        >
                            <Meta title="Wordpress Theme Development" />
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                            hoverable
                            cover={<img alt="Cloud Solution" src={image6} />}
                        >
                            <Meta title="Cloud Solution" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default AppFeature;