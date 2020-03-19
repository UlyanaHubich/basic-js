module.exports = function repeater(str, options) {
    
    let newRepeatTimes = options.repeatTimes === undefined ? 0 : options.repeatTimes;
    let newSeparator = options.separator === undefined ? "+" : options.separator;
    let newAddition = options.addition === undefined ? "" : String(options.addition);
    let newAdditionRepeatTimes = options.additionRepeatTimes === undefined ? 0 : options.additionRepeatTimes;
    let newAdditionSeparator = options.additionSeparator === undefined ? "|" : options.additionSeparator;
    let repeatedAddition = "";
    
    if(newAdditionRepeatTimes > 1) {
       repeatedAddition = (newAddition + newAdditionSeparator).repeat(newAdditionRepeatTimes - 1) + newAddition; 
    } else repeatedAddition = newAddition;
    
        if (newRepeatTimes > 1) {
        return (String(str) + repeatedAddition + newSeparator).repeat(newRepeatTimes - 1) + String(str) + repeatedAddition; 
        } else return String(str) + repeatedAddition;
     
};
  