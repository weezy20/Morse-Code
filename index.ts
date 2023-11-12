/**
 * It provides functions to convert text to Morse code and vice versa. 
 */

import { Morse } from "./morse"

const morse = new Morse;
const log = console.log;
// fetch user input
const input = process.argv.slice(2).join(" ");
// encode the input
const encoded = morse.encode(input);
log(`Encoded morse => ${encoded}`)
// decode the input
const decoded = morse.decode(encoded);
log(`Dencoded morse => ${decoded}`)

