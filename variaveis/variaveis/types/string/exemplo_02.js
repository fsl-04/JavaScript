let host = 'localhost';
let port = 3000;
let resource = "users";

let url = "http://" + host + ":" + port + "/" + resource;
let url2 = `
http://
${host}:
${port}/
${resource}
`;


console.log(url2); 