function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  let driveSize = driveSizeGb;
  switch (fileUnit) {
    case "B":
      driveSize = 1_000_000_000 * driveSizeGb;
      break;
    case "KB":
      driveSize = 1_000_000 * driveSizeGb;
      break;
    case "MB":
      driveSize = 1_000 * driveSizeGb;
      break;
  }
  return Math.floor(driveSize / fileSize);
}

module.exports = numberOfFiles;
