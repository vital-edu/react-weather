import React from 'react';

export default class ErrorModal extends React.Component {
  componentDidMount () {
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render () {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
};

ErrorModal.defaultProps = {
  title: 'Error',
};

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired,
};