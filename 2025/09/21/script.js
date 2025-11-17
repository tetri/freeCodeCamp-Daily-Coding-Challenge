function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const allowedVideoUnits = ["B", "KB", "MB", "GB"];
  if (!allowedVideoUnits.includes(videoUnit)) return "Invalid video unit";

  const allowedDriveUnits = ["GB", "TB"];
  if (!allowedDriveUnits.includes(driveUnit)) return "Invalid drive unit";

  let driveSizeInVideoUnit = driveSize;
  switch (driveUnit) {
    case "GB":
      switch (videoUnit) {
        case "B":
          driveSizeInVideoUnit = driveSize * 1_000_000_000;
          break;
        case "KB":
          driveSizeInVideoUnit = driveSize * 1_000_000;
          break;
        case "MB":
          driveSizeInVideoUnit = driveSize * 1_000;
          break;
        case "GB":
          driveSizeInVideoUnit = driveSize * 1;
          break;
      }
      break;
    case "TB":
      switch (videoUnit) {
        case "B":
          driveSizeInVideoUnit = driveSize * 1_000_000_000_000;
          break;
        case "KB":
          driveSizeInVideoUnit = driveSize * 1_000_000_000;
          break;
        case "MB":
          driveSizeInVideoUnit = driveSize * 1_000_000;
          break;
        case "GB":
          driveSizeInVideoUnit = driveSize * 1_000;
          break;
      }
      break;
  }

  return Math.floor(driveSizeInVideoUnit / videoSize);
}

module.exports = numberOfVideos;
