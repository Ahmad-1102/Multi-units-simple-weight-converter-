document.querySelector('.convert-btn').addEventListener('click', convertWeight);
            let kgTo = {
                'G':1000,
                'DG':10000,
                'CG':100000,
                'MG':1000000,
                'MIC-G':1000000000,
                'LB':2.20462,
                'OZ':35.274,
                'T-OZ':32.1507,
                'T':1/1000,
                'SH-T':1/907.185,
                'LO-T':1/1016.05,
                'STONE':0.157473,
                'GR':15432.4,
                'DRAM':564.383,
                'JIN':2,
                'TAEL':26.7173,
                'AR-LB':2.04082,
                'MAUND':0.0408163,
                'MITHQAL':216.667
            }
            let toKg = {
                'G':1/1000,
                'DG':1/10000,
                'CG':1/100000,
                'MG':1/1000000,
                'MIC-G':1/1000000000,
                'LB':1/2.20462,
                'OZ':1/35.274,
                'T-OZ': 1/32.1507,
                'T':1000,
                'SH-T':907.185,
                'LO-T':1016.05,
                'STONE':1/0.157473,
                'GR':1/15432.4,
                'DRAM':1/564.383,
                'JIN':1/2,
                'TAEL':1/26.7173,
                'AR-LB':1/2.04082,
                'MAUND':1/0.0408163,
                'MITHQAL':1/216.667
            }
            let supportedUnits = ['G', 'DG', 'CG', 'MG', 'MIC-G', 'LB', 'OZ', 'T-OZ', 'T', 'SH-T', 'LO-T', 'STONE', 'GR', 'DRAM', 'JIN', 'TAEL', 'AR-LB', 'MAUND', 'MITHQAL']
            function convertWeight() {
                    let result;
                    let showResult= document.querySelector('.js-result');
                    let weight = Number(document.querySelector('.js-weight-input').value);
                    let unit = String(document.querySelector('.js-unit-from-select').value);
                    let unitTo = String(document.querySelector('.js-unit-to-select').value);
                    showResult.textContent = '';
                    if (unit === unitTo) {
                        result = weight;
                        showResult.textContent = `${result} ${unitTo}`;
                    } else if (unit === 'KG' && supportedUnits.includes(unitTo)) {
                        result = weight*kgTo[unitTo];
                        result = result < 0.01 ? result.toExponential(4): result.toFixed(4);
                        showResult.textContent = `${result} ${unitTo}`;
                    } else if (unitTo === 'KG' && supportedUnits.includes(unit)) {
                        result = weight*toKg[unit];
                        result = result < 0.01 ? result.toExponential(4): result.toFixed(4);
                        showResult.textContent = `${result} ${unitTo}`;
                    } else if (supportedUnits.includes(unit) && supportedUnits.includes(unitTo)) {
                        result = (weight*toKg[unit])*kgTo[unitTo];
                        result = result < 0.01 ? result.toExponential(4): result.toFixed(4);
                        showResult.textContent = `${result} ${unitTo}`;
                    }
                    return result;
            }