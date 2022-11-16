import generateRandomString from "./random";

/**
 * @param {String} url downloadable file URL
 * @param {String} filename Optional will be the downloaded file name
 * @return {Blob}
 */

const downloadFileFromURL = async (url = '', filename = '') => {
  const fileName = filename ? filename : generateRandomString();

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    })
    .catch(console.error);
};

export default downloadFileFromURL;