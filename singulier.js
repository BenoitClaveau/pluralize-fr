'use strict';

module.exports = (fullStr) => {
    const strings = fullStr.split(' ');
    const singuliers = [];
    for (let str of strings) {
        // http://grammaire.reverso.net/5_5_01_pluriel_des_noms_et_des_adjectifs.shtml
        // If pluriel is not initialized
        let singulier = '';

        const last_letter = str[str.length - 1], // Last letter of str
            last_2_letters = str.slice(-2), // Last 3 letters of str
            last_3_letters = str.slice(-3);

        if (["ananas"].some(e => e == str)) {
            singulier = str;
        }
        else if (["aus", "eus", "eux"].some(e => e == last_3_letters)) {
            singulier = str.substring(0, str.length - 1);
        }
        else if (["ous", "oux"].some(e => e == last_3_letters)) {
            singulier = str.substring(0, str.length - 1);
        }
        else if (last_3_letters === 'aux') {
            switch (str) {
                case 'baux':
                case 'coraux':
                case 'émaux':
                case 'gemmaux':
                case 'soupiraux':
                case 'travaux':
                case 'vantaux':
                case 'vitraux': {
                    const radical = str.substring(0, str.length - 3);
                    singulier = radical + 'ail';
                    break;
                }
                case 'aulx': {
                    const radical = str.substring(0, str.length - 4);
                    singulier = radical + 'ail';
                    break;
                }
                default: {
                    singulier = str.substring(0, str.length - 1);
                    break;
                }
            }

        }
        else if (last_2_letters === 'als') {
            switch (str) {
                case 'avals':
                case 'bals':
                case 'banals':
                case 'bancals':
                case 'cals':
                case 'carnavals':
                case 'cérémonials':
                case 'chorals':
                case 'étals':
                case 'fatals':
                case 'festivals':
                case 'natals':
                case 'navals':
                case 'pals':
                case 'récitals':
                case 'régals':
                case 'tonals':
                case 'vals':
                case 'virginals': {
                    singulier = str.substring(0, str.length - 1);
                    break;
                }
                default: {
                    const radical = str.substring(0, str.length - 3);
                    singulier = radical + 'al';
                    break;
                }
            }
        }
        else if (str === 'yeux') {
            singulier = 'oeil';
        }
        else if (last_letter == "s") {
            singulier = str.substring(0, str.length - 1);
        }
        else 
            singulier = str;
        singuliers.push(singulier);
    }
    return singuliers.join(' ');
};
