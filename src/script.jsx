/* eslint-disable no-inner-declarations */
export default function script() {
    let arr = this.split('');
    arr = arr.filter((item) => item !== ' ');
    let result = [];

    if (arr.every((item) => !isNaN(item))) {
        let did11 = [
            '',
            'один',
            'два',
            'три',
            'четыре',
            'пять',
            'шесть',
            'семь',
            'восемь',
            'девять',
        ];

        let did21 = [
            'десять',
            'одиннадцать',
            'двенадцать',
            'тринадцать',
            'четырнадцать',
            'пятнадцать',
            'шестнадцать',
            'семнадцать',
            'восемьнадцать',
            'девятнадцать',
        ];

        let did22 = [
            '',
            '',
            'двадцать',
            'тридцать',
            'сорок',
            'пятьдесят',
            'шесдесят',
            'семдесят',
            'восемдесят',
            'девяносто',
        ];

        let did3 = [
            '',
            'сто',
            'двести',
            'триста',
            'четыреста',
            'пятьсот',
            'шестьсот',
            'семьсот',
            'восемьсот',
            'девятьсот',
        ];

        let raz = [
            '',
            '',
            'тысяч',
            'милион',
            'милиард',
            'трилион',
            'квадрилион',
            'квинтилион',
            'сикстилион',
        ];
        let suf = ['', 'а', 'и', 'ов'];

        function getEnd(arr, mil) {
            let end = '';
            if (arr[arr.length - 2] == '1') {
                end += `${did21[arr[arr.length - 1]]}`;
            } else {
                if (mil) {
                    if (arr[arr.length - 1] == '1') {
                        end += `${did22[arr[arr.length - 2]]} одна`;
                    }
                    if (arr[arr.length - 1] == '2') {
                        end += `${did22[arr[arr.length - 2]]} две`;
                    } else {
                        end += `${did22[arr[arr.length - 2]]} ${
                            did11[arr[arr.length - 1]]
                        }`;
                    }
                } else {
                    end += `${did22[arr[arr.length - 2]]} ${
                        did11[arr[arr.length - 1]]
                    }`;
                }
            }

            return end;
        }

        function getDop(arr, len, i) {
            let dop = '';
            dop = raz[len - i];
            if (
                arr[arr.length - 1] == '0' &&
                arr[arr.length - 2] == '0' &&
                arr[arr.length - 3] == '0'
            ) {
                dop = '';
            }
            return dop;
        }

        function getSuf(arr, last, mil) {
            let result = '';
            if (!mil) {
                if (arr[arr.length - 2] == 1) {
                    result += suf[3];
                } else {
                    if (arr[arr.length - 1] == 1) result += suf[0];
                    if ([2, 3, 4].includes(+arr[arr.length - 1]))
                        result += suf[1];
                    if ([5, 6, 7, 8, 9, 0].includes(+arr[arr.length - 1]))
                        result += suf[3];
                }
            }
            if (mil) {
                if (arr[arr.length - 2] == 1) {
                    result += suf[0];
                } else {
                    if (arr[arr.length - 1] == 1) {
                        result += suf[1];
                    }
                    if ([0, 5, 6, 7, 8, 9].includes(+arr[arr.length - 1])) {
                        result += suf[0];
                    }
                    if ([2, 3, 4].includes(+arr[arr.length - 1])) {
                        result += suf[2];
                    }
                }
            }
            if (
                arr[arr.length - 1] == '0' &&
                arr[arr.length - 2] == '0' &&
                arr[arr.length - 3] == '0'
            ) {
                result = '';
            }

            if (last) result = '';
            return result;
        }

        function getStructure() {
            let result = [];
            let sub = [];
            let temp = arr.reverse();
            let k = 0;
            for (let i = 0; i < temp.length; i++) {
                if (temp[i]) sub.push(temp[i]);
                k++;
                if (k == 3) {
                    k = 0;
                    result.push(sub);
                    sub = [];
                } else if (i === temp.length - 1) {
                    result.push(sub);
                }
            }
            result.map((item) => item.reverse());

            return result.reverse();
        }

        function transform(arr, mil) {
            let result = '';
            // if (arr.length == 1 && arr[0] === "0") {
            //   result = "ноль";
            // }
            if (arr.length == 1) {
                if (arr[arr.length - 1] == 1) {
                    result += mil ? 'одна' : did11[arr[0]];
                } else if (arr[arr.length - 1] == 2) {
                    result += mil ? 'две' : did11[arr[0]];
                } else {
                    result += did11[arr[0]];
                }
            }
            if (arr.length == 2) {
                result = getEnd(arr, mil);
            }
            if (arr.length == 3) {
                result += `${did3[arr[0]]} ${getEnd(arr, mil)}`;
            }
            return result;
        }

        let temp = getStructure();

        temp = temp.map((item, index) => {
            let last = index === temp.length - 1;
            let mil = index === temp.length - 2;
            // return `${transform(item, mil)} ${raz[temp.length - index]}${getSuf(
            //   item,
            //   last,
            //   mil
            // )}`;
            return `${transform(item, mil)} ${getDop(
                item,
                temp.length,
                index,
            )}${getSuf(item, last, mil)}`;
        });
        temp.forEach((item) => {
            item.split(' ').forEach((i) => {
                result.push(i.trim());
            });
        });
        return result.join(' ').trim();
    }
}
