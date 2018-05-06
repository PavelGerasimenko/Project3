export const actionNames = {
  changePage: 'CHANGE_PAGE',
  logout: 'LOGOUT',
  requestStarted: 'REQUEST_STARTED',
  requestComplete: 'REQUEST_COMPLETE',
  requestError: 'REQUEST_ERROR',
};

// export const actionNames = {
//   changeDate: 'CHANGE_DATE',
//   requestStarted: 'REQUEST_STARTED',
//   requestComplete: 'REQUEST_COMPLETE',
//   requestError: 'REQUEST_ERROR',
// };

export const changePageAction = (day) => ({
  type: actionNames.changePage,
  payload: {
    day: day,
  },
});

export const requestStarted = {
  type: actionNames.requestStarted,
};


export const changePage = (dispatch) => {
  dispatch(requestStarted);
  setTimeout(() => {
    dispatch({
      type: actionNames.requestComplete,
    });
  }, 1000);
  dispatch(makeRequest({ theSecret: 42 }));
};

export function logoutAction () {

};

// export const saveCal = (dispatch) => {
//   dispatch(requestStarted);
//   setTimeout(() => {
//     dispatch({
//       type: actionNames.requestComplete,
//     });
//   }, 1000);
//   dispatch(makeRequest({ theSecret: 42 }));
// };


export function makeRequest (requestBody) {
  return function (dispatch) {
    fetch('/hello')
      .then(() => {
        dispatch()
      })
      .catch(() => {
        dispatch()
      });
  }
}