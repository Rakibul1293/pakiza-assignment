import React, { useState } from 'react';
import { Anchor } from 'antd';
import { RadarChartOutlined } from '@ant-design/icons';

const { Link } = Anchor;

function AppHeader() {
    const [targetOffset] = useState(56);

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <RadarChartOutlined spin />
                    <a href="#">Rakibul</a>
                </div>

                <Anchor targetOffset={targetOffset}>
                    <Link href="#home" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#services" title="Services" />
                    <Link href="#works" title="Working Sample" />
                    <Link href="#faq" title="FAQ" />
                    <Link href="#pricing" title="Pricing" />
                    <Link href="#contact" title="Contact" />
                </Anchor>
            </div>
        </div>
    )
}

export default AppHeader;