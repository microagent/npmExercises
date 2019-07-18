const axios = require("axios");
const download = require("download-file");
const wallpaper = require("wallpaper");

var downloadOptions = {
  directory: "/Users/aklein/Downloads",
  filename: "randomDog.jpg"
};

// Make a request for a user with a given ID
axios
  .get("https://dog.ceo/api/breed/dachshund/images/random")
  .then(function(response) {
    // handle success
    let dogURL = response.data.message;

    console.log(dogURL);

    download(dogURL, downloadOptions, function(err) {
      if (err) throw err;
      console.log("Successfully ownloaded File!");

      (async () => {
        await wallpaper.set("/Users/aklein/Downloads/randomDog.jpg");

        await wallpaper.get();
        //=> '/Users/sindresorhus/unicorn.jpg'
      })();
    });
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });
