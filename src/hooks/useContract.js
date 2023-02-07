import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';

const useContract = (artifact) => {
    const { address, abi } = artifact;
    const { active, library, chainId } = useWeb3React();

    const contract = useMemo(() => {
        if (active) return new library.eth.Contract(abi, address[chainId]);
        return null;
    }, [address, abi, active, chainId, library?.eth?.Contract]);

    return contract;
};

export default useContract;
