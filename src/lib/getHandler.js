import axios from 'axios';

const getHandler = async (url, params, callback) => {
  let options = {
    'url': url,
    'params': params,
    'method': 'get'
  }

  try {
    const response = await axios.request(options);
    callback(response);
  } catch (err) {
    console.log('get' + url + 'Err', err);
  }
};

export default getHandler;