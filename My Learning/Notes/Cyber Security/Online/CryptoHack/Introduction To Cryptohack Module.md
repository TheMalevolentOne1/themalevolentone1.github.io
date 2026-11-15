---
tags:
  - CryptoHack
---

[[CryptoHack]]

>[!quote]
>This starter course gets you up and running with CryptoHack. You'll learn to encode and decode data types that are commonly used in cryptography. Then you'll get comfortable with the XOR operation which is at the centre of symmetric cryptography. Finally, the course ends with some fun XOR puzzles to test what you've learned.  
  >
>CryptoHack is free to play and browse. If you need help or want to find out more details about the site, please first read the [FAQ](https://cryptohack.org/faq). If you want to interact with the community, check out the Discord chat linked on the sidebar.

---
# Lesson 1 - Finding Flags
Every challenge is designed to introduce to a new piece of cryptography. Solving a challenge acquiring a flag.

>[!EXAMPLE] Example Flag
>crypto{y0ur_f1rst_fl4g}

---
# Lesson 2 - Great Snakes
## Challenge Files
```python
import sys

if sys.version_info.major == 2:
    print("You are running Python 2, which is no longer supported. Please update to Python 3.")

ords = [81, 64, 75, 66, 70, 93, 73, 72, 1, 92, 109, 2, 84, 109, 66, 75, 70, 90, 2, 92, 79]

print("Here is your flag:")
print("".join(chr(o ^ 0x32) for o in ords))

```
<sub>Great Snakes Python</sub>

>[!EXAMPLE] Example Flag
>crypto{z3n_0f_pyth0n}

---
# Lesson 3 - ASCII
Ascii is a 7-bit encoding standard uused in the representation of text using integers 0 - 127.

>[!todo] Below integer array, convert numbers to corresponding ASCII character for flag.
>```python
>[99, 114, 121, 112, 116, 111, 123, 65, 83, 67, 73, 73, 95, 112, 114, 49, 110, 116, 52, 98, 108, 51, 125]
>```
> >[!info] 
> >In Python, the `chr()` function can be used to convert an ASCII ordinal number to a character (the `ord()` function does the opposite).
## My Solution
```python
ascii = [99, 114, 121, 112, 116, 111, 123, 65, 83, 67, 73, 73, 95, 112, 114, 49, 110, 116, 52, 98, 108, 51, 125]

flag = ""

for i in ascii:
    flag += chr(i)

print(flag)
```
<sub>Convert Integer array to ASCII Text.</sub>

---
# Lesson 4 - Hexadecimal
When encrypting something the resulting ciphertext commonly has bytes which are not printable ASCII characters, therefore to share encrypted data it is common to encode it into something user-friendly and portable across different systems.

Hexadecimal is used as a way to present ASCII strings.
## ASCII Table (0 - 255 Extended)

| Dec | Hex | Binary   | Char | Description               |
| --- | --- | -------- | ---- | ------------------------- |
| 0   | 00  | 00000000 | NUL  | Null                      |
| 1   | 01  | 00000001 | SOH  | Start of Heading          |
| 2   | 02  | 00000010 | STX  | Start of Text             |
| 3   | 03  | 00000011 | ETX  | End of Text               |
| 4   | 04  | 00000100 | EOT  | End of Transmission       |
| 5   | 05  | 00000101 | ENQ  | Enquiry                   |
| 6   | 06  | 00000110 | ACK  | Acknowledge               |
| 7   | 07  | 00000111 | BEL  | Bell                      |
| 8   | 08  | 00001000 | BS   | Backspace                 |
| 9   | 09  | 00001001 | HT   | Horizontal Tab            |
| 10  | 0A  | 00001010 | LF   | Line Feed                 |
| 11  | 0B  | 00001011 | VT   | Vertical Tab              |
| 12  | 0C  | 00001100 | FF   | Form Feed                 |
| 13  | 0D  | 00001101 | CR   | Carriage Return           |
| 14  | 0E  | 00001110 | SO   | Shift Out                 |
| 15  | 0F  | 00001111 | SI   | Shift In                  |
| 16  | 10  | 00010000 | DLE  | Data Link Escape          |
| 17  | 11  | 00010001 | DC1  | Device Control 1          |
| 18  | 12  | 00010010 | DC2  | Device Control 2          |
| 19  | 13  | 00010011 | DC3  | Device Control 3          |
| 20  | 14  | 00010100 | DC4  | Device Control 4          |
| 21  | 15  | 00010101 | NAK  | Negative Acknowledge      |
| 22  | 16  | 00010110 | SYN  | Synchronize               |
| 23  | 17  | 00010111 | ETB  | End of Transmission Block |
| 24  | 18  | 00011000 | CAN  | Cancel                    |
| 25  | 19  | 00011001 | EM   | End of Medium             |
| 26  | 1A  | 00011010 | SUB  | Substitute                |
| 27  | 1B  | 00011011 | ESC  | Escape                    |
| 28  | 1C  | 00011100 | FS   | File Separator            |
| 29  | 1D  | 00011101 | GS   | Group Separator           |
| 30  | 1E  | 00011110 | RS   | Record Separator          |
| 31  | 1F  | 00011111 | US   | Unit Separator            |
| 32  | 20  | 00100000 |      | Space                     |
| 33  | 21  | 00100001 | !    | Exclamation mark          |
| 34  | 22  | 00100010 | "    | Double quote              |
| 35  | 23  | 00100011 | #    | Number sign               |
| 36  | 24  | 00100100 | $    | Dollar                    |
| 37  | 25  | 00100101 | %    | Percent                   |
| 38  | 26  | 00100110 | &    | Ampersand                 |
| 39  | 27  | 00100111 | '    | Single quote              |
| 40  | 28  | 00101000 | (    | Left parenthesis          |
| 41  | 29  | 00101001 | )    | Right parenthesis         |
| 42  | 2A  | 00101010 | *    | Asterisk                  |
| 43  | 2B  | 00101011 | +    | Plus                      |
| 44  | 2C  | 00101100 | ,    | Comma                     |
| 45  | 2D  | 00101101 | -    | Minus                     |
| 46  | 2E  | 00101110 | .    | Period                    |
| 47  | 2F  | 00101111 | /    | Slash                     |
| 48  | 30  | 00110000 | 0    | Digit 0                   |
| 49  | 31  | 00110001 | 1    | Digit 1                   |
| 50  | 32  | 00110010 | 2    | Digit 2                   |
| 51  | 33  | 00110011 | 3    | Digit 3                   |
| 52  | 34  | 00110100 | 4    | Digit 4                   |
| 53  | 35  | 00110101 | 5    | Digit 5                   |
| 54  | 36  | 00110110 | 6    | Digit 6                   |
| 55  | 37  | 00110111 | 7    | Digit 7                   |
| 56  | 38  | 00111000 | 8    | Digit 8                   |
| 57  | 39  | 00111001 | 9    | Digit 9                   |
| 58  | 3A  | 00111010 | :    | Colon                     |
| 59  | 3B  | 00111011 | ;    | Semicolon                 |
| 60  | 3C  | 00111100 | <    | Less than                 |
| 61  | 3D  | 00111101 | =    | Equals                    |
| 62  | 3E  | 00111110 | >    | Greater than              |
| 63  | 3F  | 00111111 | ?    | Question mark             |
| 64  | 40  | 01000000 | @    | At sign                   |
| 65  | 41  | 01000001 | A    | Uppercase A               |
| 66  | 42  | 01000010 | B    | Uppercase B               |
| 67  | 43  | 01000011 | C    | Uppercase C               |
| 68  | 44  | 01000100 | D    | Uppercase D               |
| 69  | 45  | 01000101 | E    | Uppercase E               |
| 70  | 46  | 01000110 | F    | Uppercase F               |
| 71  | 47  | 01000111 | G    | Uppercase G               |
| 72  | 48  | 01001000 | H    | Uppercase H               |
| 73  | 49  | 01001001 | I    | Uppercase I               |
| 74  | 4A  | 01001010 | J    | Uppercase J               |
| 75  | 4B  | 01001011 | K    | Uppercase K               |
| 76  | 4C  | 01001100 | L    | Uppercase L               |
| 77  | 4D  | 01001101 | M    | Uppercase M               |
| 78  | 4E  | 01001110 | N    | Uppercase N               |
| 79  | 4F  | 01001111 | O    | Uppercase O               |
| 80  | 50  | 01010000 | P    | Uppercase P               |
| 81  | 51  | 01010001 | Q    | Uppercase Q               |
| 82  | 52  | 01010010 | R    | Uppercase R               |
| 83  | 53  | 01010011 | S    | Uppercase S               |
| 84  | 54  | 01010100 | T    | Uppercase T               |
| 85  | 55  | 01010101 | U    | Uppercase U               |
| 86  | 56  | 01010110 | V    | Uppercase V               |
| 87  | 57  | 01010111 | W    | Uppercase W               |
| 88  | 58  | 01011000 | X    | Uppercase X               |
| 89  | 59  | 01011001 | Y    | Uppercase Y               |
| 90  | 5A  | 01011010 | Z    | Uppercase Z               |
| 91  | 5B  | 01011011 | [    | Left square bracket       |
| 92  | 5C  | 01011100 | \    | Backslash                 |
| 93  | 5D  | 01011101 | ]    | Right square bracket      |
| 94  | 5E  | 01011110 | ^    | Caret                     |
| 95  | 5F  | 01011111 | _    | Underscore                |
| 96  | 60  | 01100000 | `    | Grave accent              |
| 97  | 61  | 01100001 | a    | Lowercase a               |
| 98  | 62  | 01100010 | b    | Lowercase b               |
| 99  | 63  | 01100011 | c    | Lowercase c               |
| 100 | 64  | 01100100 | d    | Lowercase d               |
| 101 | 65  | 01100101 | e    | Lowercase e               |
| 102 | 66  | 01100110 | f    | Lowercase f               |
| 103 | 67  | 01100111 | g    | Lowercase g               |
| 104 | 68  | 01101000 | h    | Lowercase h               |
| 105 | 69  | 01101001 | i    | Lowercase i               |
| 106 | 6A  | 01101010 | j    | Lowercase j               |
| 107 | 6B  | 01101011 | k    | Lowercase k               |
| 108 | 6C  | 01101100 | l    | Lowercase l               |
| 109 | 6D  | 01101101 | m    | Lowercase m               |
| 110 | 6E  | 01101110 | n    | Lowercase n               |
| 111 | 6F  | 01101111 | o    | Lowercase o               |
| 112 | 70  | 01110000 | p    | Lowercase p               |
| 113 | 71  | 01110001 | q    | Lowercase q               |
| 114 | 72  | 01110010 | r    | Lowercase r               |
| 115 | 73  | 01110011 | s    | Lowercase s               |
| 116 | 74  | 01110100 | t    | Lowercase t               |
| 117 | 75  | 01110101 | u    | Lowercase u               |
| 118 | 76  | 01110110 | v    | Lowercase v               |
| 119 | 77  | 01110111 | w    | Lowercase w               |
| 120 | 78  | 01111000 | x    | Lowercase x               |
| 121 | 79  | 01111001 | y    | Lowercase y               |
| 122 | 7A  | 01111010 | z    | Lowercase z               |
| 123 | 7B  | 01111011 | {    | Left curly brace          |
| 124 | 7C  | 01111100 | \|   | Vertical bar              |
| 125 | 7D  | 01111101 | }    | Right curly brace         |
| 126 | 7E  | 01111110 | ~    | Tilde                     |
| 127 | 7F  | 01111111 | DEL  | Delete                    |
| 160 | A0  | 10100000 |      | Non-breaking space        |
| 161 | A1  | 10100001 | ¡    | Inverted exclamation      |
| 162 | A2  | 10100010 | ¢    | Cent                      |
| 163 | A3  | 10100011 | £    | Pound                     |
| 164 | A4  | 10100100 | ¤    | Currency                  |
| 165 | A5  | 10100101 | ¥    | Yen                       |
| 166 | A6  | 10100110 | ¦    | Broken bar                |
| 167 | A7  | 10100111 | §    | Section                   |
| 168 | A8  | 10101000 | ¨    | Diaeresis                 |
| 169 | A9  | 10101001 | ©    | Copyright                 |
| 170 | AA  | 10101010 | ª    | Feminine ordinal          |
| 171 | AB  | 10101011 | «    | Left angle quote          |
| 172 | AC  | 10101100 | ¬    | Not sign                  |
| 173 | AD  | 10101101 | ­    | Soft hyphen               |
| 174 | AE  | 10101110 | ®    | Registered                |
| 175 | AF  | 10101111 | ¯    | Macron                    |
| 176 | B0  | 10110000 | °    | Degree                    |
| 177 | B1  | 10110001 | ±    | Plus-minus                |
| 178 | B2  | 10110010 | ²    | Superscript 2             |
| 179 | B3  | 10110011 | ³    | Superscript 3             |
| 180 | B4  | 10110100 | ´    | Acute accent              |
| 181 | B5  | 10110101 | µ    | Micro                     |
| 182 | B6  | 10110110 | ¶    | Pilcrow                   |
| 183 | B7  | 10110111 | ·    | Middle dot                |
| 184 | B8  | 10111000 | ¸    | Cedilla                   |
| 185 | B9  | 10111001 | ¹    | Superscript 1             |
| 186 | BA  | 10111010 | º    | Masculine ordinal         |
| 187 | BB  | 10111011 | »    | Right angle quote         |
| 188 | BC  | 10111100 | ¼    | One quarter               |
| 189 | BD  | 10111101 | ½    | One half                  |
| 190 | BE  | 10111110 | ¾    | Three quarters            |
| 191 | BF  | 10111111 | ¿    | Inverted question         |
| 192 | C0  | 11000000 | À    | A grave                   |
| 193 | C1  | 11000001 | Á    | A acute                   |
| 194 | C2  | 11000010 | Â    | A circumflex              |
| 195 | C3  | 11000011 | Ã    | A tilde                   |
| 196 | C4  | 11000100 | Ä    | A umlaut                  |
| 197 | C5  | 11000101 | Å    | A ring                    |
| 198 | C6  | 11000110 | Æ    | AE                        |
| 199 | C7  | 11000111 | Ç    | C cedilla                 |
| 200 | C8  | 11001000 | È    | E grave                   |
| 201 | C9  | 11001001 | É    | E acute                   |
| 202 | CA  | 11001010 | Ê    | E circumflex              |
| 203 | CB  | 11001011 | Ë    | E umlaut                  |
| 204 | CC  | 11001100 | Ì    | I grave                   |
| 205 | CD  | 11001101 | Í    | I acute                   |
| 206 | CE  | 11001110 | Î    | I circumflex              |
| 207 | CF  | 11001111 | Ï    | I umlaut                  |
| 208 | D0  | 11010000 | Ð    | Eth                       |
| 209 | D1  | 11010001 | Ñ    | N tilde                   |
| 210 | D2  | 11010010 | Ò    | O grave                   |
| 211 | D3  | 11010011 | Ó    | O acute                   |
| 212 | D4  | 11010100 | Ô    | O circumflex              |
| 213 | D5  | 11010101 | Õ    | O tilde                   |
| 214 | D6  | 11010110 | Ö    | O umlaut                  |
| 215 | D7  | 11010111 | ×    | Multiply                  |
| 216 | D8  | 11011000 | Ø    | O slash                   |
| 217 | D9  | 11011001 | Ù    | U grave                   |
| 218 | DA  | 11011010 | Ú    | U acute                   |
| 219 | DB  | 11011011 | Û    | U circumflex              |
| 220 | DC  | 11011100 | Ü    | U umlaut                  |
| 221 | DD  | 11011101 | Ý    | Y acute                   |
| 222 | DE  | 11011110 | Þ    | Thorn                     |
| 223 | DF  | 11011111 | ß    | Sharp s                   |
| 224 | E0  | 11100000 | à    | a grave                   |
| 225 | E1  | 11100001 | á    | a acute                   |
| 226 | E2  | 11100010 | â    | a circumflex              |
| 227 | E3  | 11100011 | ã    | a tilde                   |
| 228 | E4  | 11100100 | ä    | a umlaut                  |
| 229 | E5  | 11100101 | å    | a ring                    |
| 230 | E6  | 11100110 | æ    | ae                        |
| 231 | E7  | 11100111 | ç    | c cedilla                 |
| 232 | E8  | 11101000 | è    | e grave                   |
| 233 | E9  | 11101001 | é    | e acute                   |
| 234 | EA  | 11101010 | ê    | e circumflex              |
| 235 | EB  | 11101011 | ë    | e umlaut                  |
| 236 | EC  | 11101100 | ì    | i grave                   |
| 237 | ED  | 11101101 | í    | i acute                   |
| 238 | EE  | 11101110 | î    | i circumflex              |
| 239 | EF  | 11101111 | ï    | i umlaut                  |
| 240 | F0  | 11110000 | ð    | eth                       |
| 241 | F1  | 11110001 | ñ    | n tilde                   |
| 242 | F2  | 11110010 | ò    | o grave                   |
| 243 | F3  | 11110011 | ó    | o acute                   |
| 244 | F4  | 11110100 | ô    | o circumflex              |
| 245 | F5  | 11110101 | õ    | o tilde                   |
| 246 | F6  | 11110110 | ö    | o umlaut                  |
| 247 | F7  | 11110111 | ÷    | Divide                    |
| 248 | F8  | 11111000 | ø    | o slash                   |
| 249 | F9  | 11111001 | ù    | u grave                   |
| 250 | FA  | 11111010 | ú    | u acute                   |
| 251 | FB  | 11111011 | û    | u circumflex              |
| 252 | FC  | 11111100 | ü    | u umlaut                  |
| 253 | FD  | 11111101 | ý    | y acute                   |
| 254 | FE  | 11111110 | þ    | thorn                     |
| 255 | FF  | 11111111 | ÿ    | y umlaut                  |

## Hex Process
1) Each letter is *converted* to an `ordinal number` according to the ASCII table. 
2) The decimal numbers are converted to base-16 numbers, otherwise known as hexadecimal.
3) The numbers can be combined together, into one long hex string.

>[!TODO] Decode Flag Encoded as Hex String
>```
>63727970746f7b596f755f77696c6c5f62655f776f726b696e675f776974685f6865785f737472696e67735f615f6c6f747d
>```
>
>
> >[!info] 
> >In Python, the `bytes.fromhex()` function can be used to convert hex to bytes. The `.hex()` instance method can be called on byte strings to get the hex representation.
>
## My Solution
```python
print(bytes.fromhex("63727970746f7b596f755f77696c6c5f62655f776f726b696e675f776974685f6865785f737472696e67735f615f6c6f747d"))
```

---
# Lesson 5 - Base64
Another common encoding scheme is Base64, which allows binary data to be represented as ASCII string using an alphabet of 64 characters.

One character of a Base64 string encodes 6 binary digits (bits), so 4 characters of Base64 encode three 8-bit bytes.

Base64 is most commonly used online, so binary data such as images can be easily included into HTML or CSS files.

>[!TODO] Take hex string, decode it into bytes, then encode into Base64
> ```
> 72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf
>```
>
>  >[!INFO]
>  >In Python, after importing the base64 module with `import base64`, you can use the `base64.b64encode()` function. Remember to decode the hex first as the challenge description states.
## My Solution
```python
from base64 import b64encode

print(b64encode(bytes.fromhex(HEX_CODE)))
```

---
# Lesson 6 - Bytes & Big Integers
Cryptosystems like RSA works on numbers, but messages are made up of characters. 

>[!QUESTION]
How should messages be converted into numbers so mathematical operations can be applied?

Most common way is to take the `ordinal bytes` of the message, *convert* them into hexadecimal and concatenate. This can be interpreted as `base-16/hexadecimal` number and also represented in `base-10/decimal`.

```example
message: HELLO  
ascii bytes: [72, 69, 76, 76, 79]  
hex bytes: [0x48, 0x45, 0x4c, 0x4c, 0x4f]  
base-16: 0x48454c4c4f  
base-10: 310400273487
```

>Python's PyCryptodome library implements this with the methods `bytes_to_long()` and `long_to_bytes()`. 

>You will first have to install pycryptodome and import it with `from Crypto.Util.number import *`.
## My Solution
```python
from Crypto.Util.number import *  
  
print(long_to_bytes(11515195063862318899931685488813747395775516287289682636499965282714637259206269))
```

---
# Lesson 7 - XOR Starter
XOR is a bitwise operator which returns *0* if the bits are the **same**, and 1 if otherwise.

In textbooks the XOR operator is denoted by ⊕ however in most challenges and programming languages it is used as the `caret` ^ instead.
## XOR Truth Table
|  A  |  B  | Output |
| :-: | :-: | :----: |
|  0  |  0  |   0    |
|  0  |  1  |   1    |
|  1  |  0  |   1    |
|  1  |  1  |   0    |
- For longer binary numbers they are XOR *bit by bit*: `0110 ^ 1010 = 1100`.
- Integers can be XOR by converting the first integer from decimal to binary.
- Strings can be XOR by converting each character to the integer representing the Unicode character.

>[!TODO] Convert string `label` XOR each character with integer `13` & convert integers back to string and submit flag in crypto{STRING}
>
> >[!INFO]
> > The Python `pwntools` library has a convenient `xor()` function that can XOR together data of different types and lengths. But first, you may want to implement your own function to solve this.
## My Solution
```python
import pwn  
  
strLab = str("label")  
integers = []  
newStr = ""  
  
def xor(a, b):  
    return a ^ b  
  
for i in range(len(strLab)):  
    newNum = ord(strLab[i])  
    xorNum = xor(newNum, 13)  
    print(newNum, xorNum)  
    integers.append(xorNum)  
  
for i in integers:  
    print(i)  
    newStr += chr(i)  
    print(newStr)  
  
print(newStr)
```
<sub> XOR Challenge</sub>

---
# Lesson 8 - XOR Properties
Last challenge revealed how XOR worked at the bit level. This one covers the properties of the XOR operation, which allows them to be used in a chain of operations that will reveal the encrypted flag.

>[!NOTE]
>Gaining intuition for how this works will help greatly in attacking real cryptosystems especially in the block ciphers category.



>[!TODO] XOR Multiple Keys to Find the Flag
>```
>KEY1 = a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313  
>KEY2 ^ KEY1 = 37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e  
>KEY2 ^ KEY3 = c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1  
>FLAG ^ KEY1 ^ KEY3 ^ KEY2 = 04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf
>```
>
> >[!info]
> > Before you XOR these objects, be sure to decode from hex to bytes.
>
## My Solution
```python
from pwn import xor  
KEY1 = bytes.fromhex("a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313")  
KEY2_XOR_KEY1 = bytes.fromhex("37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e")  
KEY2_XOR_KEY3 = bytes.fromhex("c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1")  
FLAG_XOR_KEY1_XOR_KEY3_XOR_KEY2 = bytes.fromhex("04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf")  

KEY2 = xor(KEY2_XOR_KEY1, KEY1)  
KEY3 = xor(KEY2, KEY2_XOR_KEY3)  

FLAG = xor(xor(xor(FLAG_XOR_KEY1_XOR_KEY3_XOR_KEY2, KEY1), KEY3), KEY2)  
  
print(FLAG.decode())
```

---
# Lesson 9 - Favourite Byte
For the next few challenges XOR will be used for more puzzles.

>[!TODO] Hidden XOR Message by a Single Unknown Byte.
>```
>73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d
>```
## My Solution
```python
from pwn import xor  
  
secret_message = bytes.fromhex("73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d")  
  
for i in range(256):  
    try:  
        flag = xor(secret_message, i)  
        flag = flag.decode()  
    except Exception as e:  
        continue  
  
    if flag.__contains__("crypto"):  
        print(flag)
```
---
# Lesson 10
>[!TODO] Encrypted Secret Key
>I've encrypted the flag with my secret key, you'll never be able to guess it.
>
> >[!info] 
> >Remember the flag format and how it might help you in this challenge!
## My Solution
```python
from pwn import *  
  
KEY = bytes.fromhex("0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104")  
  
# Encrypted Key = Cipher Text XOR Key  
# XOR is Associative therefore  
# Key = Ciphertext XOR Plaintext  
print(xor(KEY, b"crypto{").decode())  
  
key = "myXORkey"
  
print(xor(KEY, key).decode())
```

---
# All Lessons Complete
![[Cryptography - Completed Introduction Lessons.png]]

[[CryptoHack]]