import React from 'react';
import { List, Card, Button } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';

const data = [
    {
        title: 'Basic',
        content: [
            {
                price: '£21.99',
                space: '1 GB Memory',
                user: '3 user',
                support: '24/7 support',
                backup: 'Free Domain'
            }
        ]
    },
    {
        title: 'Premium',
        content: [
            {
                price: '£49.99',
                space: '5 GB Memory',
                user: '7 users',
                support: '24/7 support',
                backup: 'Free Domain'
            }
        ]
    },
    {
        title: 'Enterprise',
        content: [
            {
                price: '£89.99',
                space: 'Unlimited Memory',
                user: '17 users',
                support: '24/7 support',
                backup: 'Free Domain'
            }
        ]
    }
];

function AppPricing() {
    return (
        <div id="pricing" className="block pricingBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Our Pricing</h2>
                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 3,
                        lg: 3,
                        xl: 3,
                        xxl: 3
                    }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>
                                <p className="large">{item.content[0].price}</p>
                                <p>{item.content[0].space}</p>
                                <p>{item.content[0].user}</p>
                                <p>{item.content[0].support}</p>
                                <p>{item.content[0].backup}</p>
                                <Button type="primary" size="large"><TwitterOutlined />Order Now</Button>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default AppPricing;
