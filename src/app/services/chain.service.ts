import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

export interface Chain {
    name: string;
    identity: string;
    tooltip: string;
    port?: number;
    rpcPort?: number;
    apiPort?: number;
    wsPort?: number;
    network: string;
    mode?: string;
    genesisDate?: Date;
    path?: string;
    datafolder?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ChainService {

    static singletonInstance: ChainService;

    private availableChains: Array<Chain>;

    constructor(private log: Logger) {

        if (!ChainService.singletonInstance) {

            this.availableChains = [
                { name: 'Divergenti', identity: 'diver', tooltip: 'Divergenti Core', port: 3452, rpcPort: 3451, apiPort: 39320, wsPort: 39320, network: 'divergentimain', genesisDate: new Date(2020, 11, 21 )}
            ];

            ChainService.singletonInstance = this;
        }

        return ChainService.singletonInstance;
    }

    /** Retrieves a configuration for a blockchain, including the right network name and ports. */
    getChain(name: string = 'diver', network: string = 'divergentimain'): Chain {
        // Couldn't use .find with the current tsconfig setup.
        // const selectedChains = this.availableChains.filter(c => c.identity === name && c.network === network);
        const selectedChains = this.availableChains.filter(c => c.network === network);
        let selectedChain: Chain;

        if (selectedChains.length === 0) {
            this.log.error('The supplied coin parameter is invalid. First available chain selected as default. Argument value: ' + name);
            selectedChain = this.availableChains[0];
        } else {
            selectedChain = selectedChains[0];
        }

        this.log.info('Genesis*: ', selectedChain);

        return selectedChain;
    }
}
