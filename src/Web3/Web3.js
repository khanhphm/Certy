const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || 'wss://ropsten.infura.io/ws/v3/605b49dec8f34e66ba2c1a11562a9bea');

const abi = []

const address = ''

const contract = new web3.eth.Contract(abi,address)

export{web3, contract}