class FetchClass {
  postData(url, objectData) {
    const bodyData = new URLSearchParams(objectData);

    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: bodyData,
    });
  }

  fetchData(url) {
    return fetch(url).then(response => {
      return response.json()
    });
  }
}

const FetchService = new FetchClass();

export default FetchService;
