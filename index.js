const pointsInPolygon = new (require('./src/PointsInPolygon.js'))();

// Only thingy exported: singleton's process method
module.exports = pointsInPolygon.process.bind(pointsInPolygon);
