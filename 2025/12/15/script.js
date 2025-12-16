function speedCheck(speedMph, speedLimitKph) {
    const speedKph = speedMph * 1.60934;

    if (speedKph <= speedLimitKph) return "Not Speeding";

    if (speedKph > speedLimitKph + 5) return "Ticket";
    else return "Warning";
}

module.exports = speedCheck;
