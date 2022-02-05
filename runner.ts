// import { Worker } from "bullmq";
// const queueName = "foo";

// const worker = new Worker(queueName, async (job) => {
//   // Will print { foo: 'bar'} for the first job
//   // and { qux: 'baz' } for the second.
//   console.log(job.data);
// });

import axios from "axios";

axios.get("https://api.bukalapak.com/_exclusive/product-catalogs?term=iphone&offset=0&limit=6&category_id=&access_token=lIjMpyyYtzhT2oygezIhLS49STnIwQBfTMSIiPED5Z6CoA").then(response => {
  console.log({response});
});