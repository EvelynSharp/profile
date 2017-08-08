export const setPage = (page) => {
  return(dispatch) => {
    console.log('called')
    dispatch({ type: 'PAGE', page})
  }
}
