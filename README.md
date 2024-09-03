# Delimiter Counter

A simple tool to count the number of elements in a string, using a specified delimiter.

## Usage

- Input a string containing elements separated by a delimiter
- Specify the delimiter character
- The tool will return the count of elements

## Example

- Input: `//;\n1;2`
- Delimiter: `;`
- Output: `3`

## Rules

- Negative numbers are not allowed
- The delimiter character cannot be a whitespace or an empty string

## Notes

- The tool assumes that the input string is well-formed and does not contain any escaped delimiter characters.
- If the input string is empty or only contains the delimiter, the output will be 0.

## Supported Delimiters

- Any single character, except whitespace and empty string

## Error Handling

- If negative numbers are detected in the input string, an error message will be displayed.
- If the delimiter is not found in the input string, an error message will be displayed.

## Code

[delimiter-counter.js](delimiter-counter.js)

## Author

Naveen GS
