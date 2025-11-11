function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  let hardDriveSizeMb = hardDriveSizeGb * 1000;
  let photos = Math.floor(hardDriveSizeMb / photoSizeMb);
  return photos;
}

module.exports = numberOfPhotos;
