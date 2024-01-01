import React from 'react';

const Alert = (props) => {
  if (!props.alert) {
    return null;
  }

  const alertStyle = {
    position: 'fixed',
    top: '66px',
    left: '0',
    right: '0',
    zIndex: '1000'
  };

  return (
    <div>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={alertStyle}>
          <strong>{props.alert.type}</strong> {props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </div>
  );
}

export default Alert;



