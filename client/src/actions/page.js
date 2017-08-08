export const setPage = (page) => {
  return(dispatch) => {
    dispatch({ type: 'PAGE', page})
  }
}
