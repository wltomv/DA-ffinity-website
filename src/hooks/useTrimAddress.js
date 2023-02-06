const { useMemo } = require('react');

const useTrimAddress = (address) => {
    const hide = useMemo(
        () => `${address.substr(0, 4)}...${address.substr(-4)}`,
        [address]
    );
    return hide;
};

export default useTrimAddress;
