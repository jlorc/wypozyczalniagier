class FetchClass {
  postData(url, headers, body, fromState, clearState) {
    // const headersResult = new Headers();
    // let promise = Promise.resolve();
    // promise = promise.then(() => {
    //   return BootstrapService.loop(Object.keys(headers), key => {
    //     return headersResult.append(key, headers[key]);
    //   });
    // });
    // promise = promise.then(() => {
    //   return this.fetchData(url, fromState, clearState, {
    //     headers: headersResult, body, credentials: 'same-origin', method: 'POST',
    //   });
    // });
    // return promise;
  }

  fetchData(url) {
    return fetch(url).then(function(response) {
      return response.json()
    });
  }
}

const FetchService = new FetchClass();

export default FetchService;
