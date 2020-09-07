import React from 'react';
import { BackTop } from 'antd';
import { RadarChartOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined, GithubOutlined, InstagramOutlined, ArrowUpOutlined } from '@ant-design/icons';

function AppFooter() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <RadarChartOutlined spin />
                    <a href="#">Rakibul</a>
                </div>
                <ul className="socials">
                    <li><a href="https://www.facebook.com"><FacebookOutlined /></a></li>
                    <li><a href="https://www.facebook.com"><LinkedinOutlined /></a></li>
                    <li><a href="https://www.facebook.com"><GithubOutlined /></a></li>
                    <li><a href="https://www.facebook.com"><TwitterOutlined /></a></li>
                    <li><a href="https://www.facebook.com"><InstagramOutlined /></a></li>
                </ul>
                <div className="copyright">Copyright &copy; 2020 Rakibul</div>
                <BackTop>
                    <ArrowUpOutlined style={{ fontSize: '31px', color: '#f0f' }} />
                </BackTop>
            </div>
        </div>
    )
}

export default AppFooter;
