/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type HashSubmitted = ContractEventLog<{
  submitter: string;
  epochId: string;
  hash: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type PricesRevealed = ContractEventLog<{
  voter: string;
  epochId: string;
  ftsos: string[];
  prices: string[];
  random: string;
  timestamp: string;
  0: string;
  1: string;
  2: string[];
  3: string[];
  4: string;
  5: string;
}>;

export interface MockPriceSubmitter extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): MockPriceSubmitter;
  clone(): MockPriceSubmitter;
  methods: {
    MINIMAL_RANDOM(): NonPayableTransactionObject<string>;

    RANDOM_EPOCH_CYCLIC_BUFFER_SIZE(): NonPayableTransactionObject<string>;

    getAddressUpdater(): NonPayableTransactionObject<string>;

    getCurrentRandom(): NonPayableTransactionObject<string>;

    getFtsoManager(): NonPayableTransactionObject<string>;

    getFtsoRegistry(): NonPayableTransactionObject<string>;

    getRandom(
      _epochId: number | string | BN
    ): NonPayableTransactionObject<string>;

    getVoterWhitelister(): NonPayableTransactionObject<string>;

    revealPrices(
      _epochId: number | string | BN,
      _ftsoIndices: (number | string | BN)[],
      _prices: (number | string | BN)[],
      _random: number | string | BN
    ): NonPayableTransactionObject<void>;

    setAddressUpdater(
      _addressUpdater: string
    ): NonPayableTransactionObject<void>;

    submitHash(
      _epochId: number | string | BN,
      _hash: string | number[]
    ): NonPayableTransactionObject<void>;

    updateContractAddresses(
      _contractNameHashes: (string | number[])[],
      _contractAddresses: string[]
    ): NonPayableTransactionObject<void>;

    voterWhitelistBitmap(_voter: string): NonPayableTransactionObject<string>;

    voterWhitelisted(
      _voter: string,
      _ftsoIndex: number | string | BN
    ): NonPayableTransactionObject<void>;

    votersRemovedFromWhitelist(
      _removedVoters: string[],
      _ftsoIndex: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    HashSubmitted(cb?: Callback<HashSubmitted>): EventEmitter;
    HashSubmitted(
      options?: EventOptions,
      cb?: Callback<HashSubmitted>
    ): EventEmitter;

    PricesRevealed(cb?: Callback<PricesRevealed>): EventEmitter;
    PricesRevealed(
      options?: EventOptions,
      cb?: Callback<PricesRevealed>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "HashSubmitted", cb: Callback<HashSubmitted>): void;
  once(
    event: "HashSubmitted",
    options: EventOptions,
    cb: Callback<HashSubmitted>
  ): void;

  once(event: "PricesRevealed", cb: Callback<PricesRevealed>): void;
  once(
    event: "PricesRevealed",
    options: EventOptions,
    cb: Callback<PricesRevealed>
  ): void;
}
