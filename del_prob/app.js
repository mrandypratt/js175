function parseFormData(request) {
  let body = '';
  let data;
  console.log("RUNNING PARSED FORM DATA");
  request.on('data', (chunk) => body += chunk.toString());
  request.on('end', () => {
    data = QUERYSTRING.parse(body);      // <-- Trevor pointed out I was missing an assignment, though I never get an error thrown even without it (super weird)
    data.amount = Number(data.amount);
    data.duration = Number(data.duration);
  });

  console.log(data.amount);          //<--- Neither of these logging statements print anywhere.
  console.log(data.duration);        //<--- They don't print in the browser, and they don't print in the terminal.
  return data;
}