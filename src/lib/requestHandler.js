import axios from 'axios';

const requestHandler = async (url, params, method, callback) => {
  let options = {
    'url': url,
    'params': params,
    'method': method
  }

  try {
    const response = await axios.request(options);
    callback(response);
  } catch (err) {
    console.log(method, url, 'Err', err);
  }
};

export default requestHandler;