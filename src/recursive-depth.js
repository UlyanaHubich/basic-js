module.exports = class DepthCalculator {
    calculateDepth(arr) {

        let counter = 1;
        arr.forEach(item => {
            if (Array.isArray(item)) {
                counter = Math.max(counter, 1 + this.calculateDepth(item));
            }
        });
        return counter;
    }

};