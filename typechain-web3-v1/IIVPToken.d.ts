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

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;

export interface IIVPToken extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IIVPToken;
  clone(): IIVPToken;
  methods: {
    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    balanceOf(account: string): NonPayableTransactionObject<string>;

    balanceOfAt(
      _owner: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    batchVotePowerOfAt(
      _owners: string[],
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    cleanupBlockNumber(): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    delegate(
      _to: string,
      _bips: number | string | BN
    ): NonPayableTransactionObject<void>;

    delegateExplicit(
      _to: string,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    delegatesOf(_who: string): NonPayableTransactionObject<{
      _delegateAddresses: string[];
      _bips: string[];
      _count: string;
      _delegationMode: string;
      0: string[];
      1: string[];
      2: string;
      3: string;
    }>;

    delegatesOfAt(
      _who: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<{
      _delegateAddresses: string[];
      _bips: string[];
      _count: string;
      _delegationMode: string;
      0: string[];
      1: string[];
      2: string;
      3: string;
    }>;

    delegationModeOf(_who: string): NonPayableTransactionObject<string>;

    governanceVotePower(): NonPayableTransactionObject<string>;

    name(): NonPayableTransactionObject<string>;

    readVotePowerContract(): NonPayableTransactionObject<string>;

    revokeDelegationAt(
      _who: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<void>;

    setCleanerContract(
      _cleanerContract: string
    ): NonPayableTransactionObject<void>;

    setCleanupBlockNumber(
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<void>;

    setCleanupBlockNumberManager(
      _cleanupBlockNumberManager: string
    ): NonPayableTransactionObject<void>;

    setGovernanceVotePower(
      _governanceVotePower: string
    ): NonPayableTransactionObject<void>;

    symbol(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    totalSupplyAt(
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    totalVotePower(): NonPayableTransactionObject<string>;

    totalVotePowerAt(
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    totalVotePowerAtCached(
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    transfer(
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    undelegateAll(): NonPayableTransactionObject<void>;

    undelegateAllExplicit(
      _delegateAddresses: string[]
    ): NonPayableTransactionObject<string>;

    undelegatedVotePowerOf(_owner: string): NonPayableTransactionObject<string>;

    undelegatedVotePowerOfAt(
      _owner: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    votePowerFromTo(
      _from: string,
      _to: string
    ): NonPayableTransactionObject<string>;

    votePowerFromToAt(
      _from: string,
      _to: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    votePowerOf(_owner: string): NonPayableTransactionObject<string>;

    votePowerOfAt(
      _owner: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    votePowerOfAtCached(
      _owner: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    votePowerOfAtIgnoringRevocation(
      _owner: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    writeVotePowerContract(): NonPayableTransactionObject<string>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
