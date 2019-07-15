import { Modal } from 'antd';
import React from 'react';
class CommonModal extends React.Component {
  state = {
    modalVisible: false,
  }
  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  handleSure () {
    this.setState({ modalVisible:false });
    this.props.handleNextEvent()
  }

  render() {
    return (
      <div className="modal-wrapper">
        <Modal
          title={this.props.title}
          okText={this.props.okText}
          cancelText={this.props.cancelText}
          width={this.props.width}
          centered
          visible={this.state.modalVisible}
          onOk={() => this.handleSure()}
          onCancel={() => this.setModalVisible(false)}
        >
        {
            React.Children.map(this.props.children, function (child) {
             return <div>{child}</div>;
            })
        }
        </Modal>
      </div>
    );
  }
}

 export default CommonModal