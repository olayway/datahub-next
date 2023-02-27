/*

    This script downloads the md files on datasets/awesome-data
    and puts it on /content/collections/

*/

import fetch from "node-fetch";
import fs from "fs";
import https from "https";

const contentsRes = await fetch(
  "https://api.github.com/repositories/7587291/contents/"
);

let contents = await contentsRes.json();
contents = contents.filter((f) => f.type == "file");
contents = contents.filter((f) => /^(?!README).*\.md$/.test(f.name));

const download = (url, dest) => {
  var file = fs.createWriteStream(dest);
  https
    .get(url, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
      });
    })
    .on("error", (err) => {
      fs.unlink(dest);
    });
};

contents.forEach((f) => {
  download(f.download_url, `../content/collections/${f.name}`);
});
