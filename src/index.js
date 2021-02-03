module.exports = function toReadable (number) {
    let less20 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let dozen = [
        "zero",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    
    let d0 = number % 10;
    let d1 = (number % 100 -d0) / 10;
    let d2 = (number - number % 100) / 100;
    let s0 = (d0 == 0) ? '': ' '+less20[d0];
    let s1 = (d1 == 0) ? '': ' '+dozen[d1];
    let s2 = (d2 == 0) ? '': less20[d2] + ' hundred';
    if (number % 100 < 20) {
      s0 = less20[number % 100];
      s1 = '';
      s2 = (d2 == 0) ? '': less20[d2] + ' hundred ';
    };
    s=s2+s1+s0;
    s= s.trim();
    if (number == 0) {s='zero';}
    return s;
}
