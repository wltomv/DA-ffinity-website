import { useMemo } from 'react';

const useTrimAddress = (address) => {
    const hide = useMemo(
        () => `${address?.substr(0, 6)}...${address?.substr(-2)}`,
        [address]
    );
    return hide;
};

export default useTrimAddress;
