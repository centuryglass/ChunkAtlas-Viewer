/**
 * @file Point.js
 *
 * Defines a simple 2D point class, holding an immutable value.
 */

class Point {
    /**
     * Constructs a 2D point object.
     *
     * @param x  The point's x-coordinate.
     *
     * @param y  The point's y-coordinate.
     */
    constructor(x, y) {
        assert(isNumeric(x) && isNumeric(y), "Invalid point coordinates (" + x
                + ", " + y + ")");
        setConstProperty(this, "x", x);
        setConstProperty(this, "y", y);
    }

    /**
     * Calculates the distance between this point an another point.
     *
     * @param otherPt  Another point to compare with this point.
     *
     * @return         The distance between the two points.
     */
    distance(otherPt) {
        assertIsClass(otherPt, Point, "Point.distance");
        const xOffset = otherPt.x - this.x;
        const yOffset = otherPt.y - this.y;
        return Math.sqrt(Math.pow(xOffset, 2) + Math.pow(yOffset, 2));
    }

    /**
     * Checks if this point holds the same value as another point.
     *
     * @param otherPt  Another point to compare with this point.
     *
     * @return         Whether both points hold the same x and y coordinates.
     */
    equals(otherPt) {
        assertIsClass(otherPt, Point, "Point.equals");
        return this.x === otherPt.x && this.y === otherPt.y;
    }

    /**
     * Finds the sum of this point and another point.
     *
     * @param otherPt  The point to add to this point.
     *
     * @return         A new point representing the sum of the two points.
     */
    add(otherPt) {
        assertIsClass(otherPt, Point, "Point.add");
        return new Point(this.x + otherPt.x, this.y + otherPt.y);
    }

    /**
     * Finds the difference between this point and another point.
     *
     * @param otherPt  The point to subtract from this point.
     *
     * @return         A new point representing the difference between the two
     *                 points.
     */
    subtract(otherPt) {
        assertIsClass(otherPt, Point, "Point.subtract");
        return new Point(this.x - otherPt.x, this.y - otherPt.y);
    }

    /**
     * Finds the value of this point multiplied by a scalar value.
     *
     * @param scalar  A numeric multiplier.
     *
     * @return        A new point representing the updated value.
     */
    multiply(scalar) {
        assert(isNumeric(scalar), "Tried to multiply " + this.toString()
                + " by invalid value " + scalar);
        return new Point(this.x * scalar, this.y * scalar);
    }

    /**
     * Gets a string representation of this point.
     *
     * @return  The point as an (x, y) coordinate string.
     */
    toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}
