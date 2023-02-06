import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({ supportedChainIds: [1, 5, 1337] });

const getLibrary = (provider) => new Web3(provider);

export { getLibrary, injected };
