import { formatBalance } from '@polkadot/util';

export const formatTokenBalance = (value,unit,decimals) => {

    formatBalance.setDefaults({unit: unit,decimals: decimals});
    const formated = formatBalance(
        value,
        { 
            withSiFull: true, 
            withSi: true,
            forceUnit: unit
        }
    );
    return formated
}