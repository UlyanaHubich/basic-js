module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    const turnsSpeedSec = turnsSpeed / 3600;
    const counter = 2 ** disksNumber -1;
        return {
            turns: counter, seconds: counter / turnsSpeedSec
        };
}