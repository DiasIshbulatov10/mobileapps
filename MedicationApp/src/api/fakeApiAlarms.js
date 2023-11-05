//example api request: replace with your API request here in folder API


export const getAlarms = () => {
  try {
    return Promise.resolve({
      status: 'success',
      data: [
        { id: 1, name: 'Fira' },
        { id: 2, name: 'Nadia' },
        { id: 3, name: 'Handy' },
        { id: 4, name: 'Fakara' }
      ]
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

export const Login = () => {
  console.log("api")
}


module.exports = {
  getAlarms,
  Login
}
