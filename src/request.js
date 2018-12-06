var request = (method,url,params) => {
    let opts = {
        method: method,
		body: JSON.stringify(params),
        mode: "cors",
        headers: {
		  "Content-Type": "application/json",
        }
	  };
    return fetch(url, opts)
            .then(res => res.json())
            .catch(err => {
                console.error(err);
            })
}
export default request