import { useCallback, useEffect, useState } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { injected } from '../../config/web3';
import useTrimAddress from '../../hooks/useTrimAddress';

import './Connector.scss';

function Connector() {
    const [balance, setBalance] = useState(0);

    const { active, activate, deactivate, account, error, library } =
        useWeb3React();

    const isUnsupportedChain = error instanceof UnsupportedChainIdError;

    const connect = useCallback(() => {
        activate(injected);
        localStorage.setItem('isConnected', 'true');
    }, [activate]);

    const disconnect = () => {
        deactivate();
        localStorage.removeItem('isConnected');
    };

    const getBalance = useCallback(async () => {
        const toSet = await library.getBalance(account);
        setBalance((toSet / 1e18).toFixed(2));
    }, [library, account]);

    useEffect(() => {
        if (active) getBalance();
    }, [active, getBalance]);

    useEffect(() => {
        if (localStorage.getItem('isConnected') === 'true') connect();
    }, [connect]);

    const shortAddress = useTrimAddress(account);
    return (
        <div className="connector">
            {active ? (
                <div className="format connector-info">
                    {`${shortAddress} ${balance}`}
                    <button type="button" onClick={disconnect}>
                        <AiOutlineCloseCircle />
                    </button>
                </div>
            ) : (
                <button
                    type="button"
                    onClick={connect}
                    disabled={isUnsupportedChain}
                    className="format"
                >
                    {isUnsupportedChain ? 'Red no soportada' : 'Conectar'}
                </button>
            )}
        </div>
    );
}

export default Connector;
