import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

const getLibrary = (provider) => new Web3Provider(provider);

export { getLibrary, injected };
