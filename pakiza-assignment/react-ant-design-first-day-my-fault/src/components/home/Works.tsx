import React from 'react';
import { Modal, Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

class AppWorks extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div id="works" className="block worksBlock">
                <div className="container-fluid">
                    <div className="contentHolder">
                        <Button onClick={this.showModal}><PlayCircleOutlined /></Button>
                    </div>
                    <Modal
                        title="React Fiber Tutorial"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={null}
                    >
                        <iframe title="React Fiber Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/ZCuYPiUIONs"></iframe>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default AppWorks;
