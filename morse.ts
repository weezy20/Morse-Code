export class Morse {
    private map: { [key: string]: string }

    constructor() {
        this.map = {
            a: ".-",
            b: "-...",
            c: "-.-.",
            d: "-..",
            e: ".",
            f: "..-.",
            g: "--.",
            h: "....",
            i: "..",
            j: ".---",
            k: "-.-",
            l: ".-..",
            m: "--",
            n: "-.",
            o: "---",
            p: ".--.",
            q: "--.-",
            r: ".-.",
            s: "...",
            t: "-",
            u: "..-",
            v: "...-",
            w: ".--",
            x: "-..-",
            y: "-.--",
            z: "--..",
            0: "-----",
            1: ".----",
            2: "..---",
            3: "...--",
            4: "....-",
            5: ".....",
            6: "-....",
            7: "--...",
            8: "---..",
            9: "----.",
            ".": ".-.-.-",
            ",": "--..--",
            "?": "..--..",
            "'": ".----.",
            "!": "-.-.--",
            "/": "-..-.",
            "(": "-.--.",
            ")": "-.--.-",
        }
    }

    /**
     * Encodes the given text.
     *
     * @param {string} text - The text to be encoded.
     * @return {string} The encoded text.
     */
    public encode(text: string): string {
        return text.split("").map((char) => this.map[char.toLowerCase()]).join(" ")
    }
    /**
     * Decodes a given text by mapping each character to its corresponding key in the map.
     *
     * @param {string} text - The text to decode.
     * @return {string} The decoded text.
     */
    public decode(text: string): string {
        return text
            .split(" ")
            .map((code) => Object.keys(this.map).find((key) => this.map[key] === code))
            .join("")
    }
}
