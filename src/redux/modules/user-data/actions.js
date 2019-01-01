export const ACTION_TYPES = {
  LOADING: "LOADING",
  FULFILLED: "FULFULLED",
  FAILURE: "FAILURE"
};

// MOCK ASYNC
const mockFetchUserData = userId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        return resolve({
          userName: "ABC"
        });
      } else {
        return reject({ error: "NOT FOUND!" });
      }
    }, 1000);
  });
};

export const fetchUserData = userId => {
  return function(dispatch, getState) {
    dispatch({
      type: ACTION_TYPES.LOADING
    });
    return mockFetchUserData(userId)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.FULFILLED,
          payload: response.userName
        });
      })
      .catch(err => {
        dispatch({
          type: ACTION_TYPES.FAILURE,
          payload: err.error
        });
      });
  };
};
