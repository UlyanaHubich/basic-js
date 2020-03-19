class VigenereCipheringMachine {

    constructor(mode) {
        
       this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

       this.reverse = mode === false ? false : true;
    }
   

    encrypt(message, key) {
        

        if(message && key) {

            let encrypted = [];
            for(let i = 0, j = 0; i < message.length; i++) {

                let messageIndex = this.alphabet.indexOf(message[i].toUpperCase());
                let keyIndex = this.alphabet.indexOf(key[j].toUpperCase());

                if(messageIndex >= 0) {

                   encrypted.push(this.alphabet[((messageIndex + keyIndex) % this.alphabet.length)]); 
                    j = ++j > key.length - 1 ? 0 : j++;
                } else {

                    encrypted.push(message[i]);
                }   
            }
            
            return this.reverse === true ? encrypted.join('') : encrypted.reverse().join('');
        }

        throw Error('Error');
    }

    decrypt(encryptedMessage, key) {

        if(encryptedMessage && key) {
        
            let decrypted = [];
            for(let i = 0, j = 0; i < encryptedMessage.length; i++) {
                
                let decMessageIndex = this.alphabet.indexOf(encryptedMessage[i].toUpperCase());
                let decKeyIndex = this.alphabet.indexOf(key[j].toUpperCase());

                if(decMessageIndex >= 0) {

                   decrypted.push(this.alphabet[((decMessageIndex + this.alphabet.length - decKeyIndex) % this.alphabet.length)]); 
                   j = ++j > key.length - 1 ? 0 : j++;
                } else {

                    decrypted.push(encryptedMessage[i]);
                }   
            }
            
            return this.reverse === true ? decrypted.join('') : decrypted.reverse().join('');
        }

        throw Error('Error');
    }
}

module.exports = VigenereCipheringMachine;