import React from 'react';

export default function mapDispatchToProps(dispatch) {
  return {
    connect: (userId) => {
      dispatch({type: 'CONNECTION_STARTED'});
      //add IO Connection here
    },
  }
}
