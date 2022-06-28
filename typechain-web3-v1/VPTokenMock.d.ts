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
export type CreatedTotalSupplyCache = ContractEventLog<{
  _blockNumber: string;
  0: string;
}>;
export type GovernanceProposed = ContractEventLog<{
  proposedGovernance: string;
  0: string;
}>;
export type GovernanceUpdated = ContractEventLog<{
  oldGovernance: string;
  newGoveranance: string;
  0: string;
  1: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type VotePowerContractChanged = ContractEventLog<{
  _contractType: string;
  _oldContractAddress: string;
  _newContractAddress: string;
  0: string;
  1: string;
  2: string;
}>;

export interface VPTokenMock extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VPTokenMock;
  clone(): VPTokenMock;
  methods: {
    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    balanceHistoryCleanup(
      _owner: string,
      _count: number | string | BN
    ): NonPayableTransactionObject<string>;

    balanceOf(account: string): NonPayableTransactionObject<string>;

    balanceOfAt(
      _owner: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    batchVotePowerOfAt(
      _owners: string[],
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    burn(_amount: number | string | BN): NonPayableTransactionObject<void>;

    claimGovernance(): NonPayableTransactionObject<void>;

    cleanupBlockNumber(): NonPayableTransactionObject<string>;

    decimals(): NonPayableTransactionObject<string>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    delegate(
      _to: string,
      _bips: number | string | BN
    ): NonPayableTransactionObject<void>;

    delegateExplicit(
      _to: string,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    delegatesOf(_owner: string): NonPayableTransactionObject<{
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
      _owner: string,
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

    getReadVpContract(): NonPayableTransactionObject<string>;

    getWriteVpContract(): NonPayableTransactionObject<string>;

    governance(): NonPayableTransactionObject<string>;

    governanceVotePower(): NonPayableTransactionObject<string>;

    increaseAllowance(
      spender: string,
      addedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    initialise(_governance: string): NonPayableTransactionObject<void>;

    mint(
      _to: string,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    name(): NonPayableTransactionObject<string>;

    proposeGovernance(_governance: string): NonPayableTransactionObject<void>;

    proposedGovernance(): NonPayableTransactionObject<string>;

    readVotePowerContract(): NonPayableTransactionObject<string>;

    revokeDelegationAt(
      _who: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<void>;

    revokeDelegationAtNow(_to: string): NonPayableTransactionObject<void>;

    setCleanerContract(
      _cleanerContract: string
    ): NonPayableTransactionObject<void>;

    setCleanupBlockNumber(
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<void>;

    setCleanupBlockNumberManager(
      _cleanupBlockNumberManager: string
    ): NonPayableTransactionObject<void>;

    setDecimals(
      _decimals: number | string | BN
    ): NonPayableTransactionObject<void>;

    setGovernanceVotePower(
      _governanceVotePower: string
    ): NonPayableTransactionObject<void>;

    setReadVpContract(_vpContract: string): NonPayableTransactionObject<void>;

    setWriteVpContract(_vpContract: string): NonPayableTransactionObject<void>;

    symbol(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    totalSupplyAt(
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    totalSupplyCacheCleanup(
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    totalSupplyHistoryCleanup(
      _count: number | string | BN
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

    transferGovernance(_governance: string): NonPayableTransactionObject<void>;

    undelegateAll(): NonPayableTransactionObject<void>;

    undelegateAllExplicit(
      _delegateAddresses: string[]
    ): NonPayableTransactionObject<string>;

    undelegatedVotePowerOf(_owner: string): NonPayableTransactionObject<string>;

    undelegatedVotePowerOfAt(
      _owner: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    votePowerAtNowCached(): NonPayableTransactionObject<string>;

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

    votePowerOfAtNowCached(_who: string): NonPayableTransactionObject<string>;

    vpContractInitialized(): NonPayableTransactionObject<boolean>;

    writeVotePowerContract(): NonPayableTransactionObject<string>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    CreatedTotalSupplyCache(
      cb?: Callback<CreatedTotalSupplyCache>
    ): EventEmitter;
    CreatedTotalSupplyCache(
      options?: EventOptions,
      cb?: Callback<CreatedTotalSupplyCache>
    ): EventEmitter;

    GovernanceProposed(cb?: Callback<GovernanceProposed>): EventEmitter;
    GovernanceProposed(
      options?: EventOptions,
      cb?: Callback<GovernanceProposed>
    ): EventEmitter;

    GovernanceUpdated(cb?: Callback<GovernanceUpdated>): EventEmitter;
    GovernanceUpdated(
      options?: EventOptions,
      cb?: Callback<GovernanceUpdated>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    VotePowerContractChanged(
      cb?: Callback<VotePowerContractChanged>
    ): EventEmitter;
    VotePowerContractChanged(
      options?: EventOptions,
      cb?: Callback<VotePowerContractChanged>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(
    event: "CreatedTotalSupplyCache",
    cb: Callback<CreatedTotalSupplyCache>
  ): void;
  once(
    event: "CreatedTotalSupplyCache",
    options: EventOptions,
    cb: Callback<CreatedTotalSupplyCache>
  ): void;

  once(event: "GovernanceProposed", cb: Callback<GovernanceProposed>): void;
  once(
    event: "GovernanceProposed",
    options: EventOptions,
    cb: Callback<GovernanceProposed>
  ): void;

  once(event: "GovernanceUpdated", cb: Callback<GovernanceUpdated>): void;
  once(
    event: "GovernanceUpdated",
    options: EventOptions,
    cb: Callback<GovernanceUpdated>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;

  once(
    event: "VotePowerContractChanged",
    cb: Callback<VotePowerContractChanged>
  ): void;
  once(
    event: "VotePowerContractChanged",
    options: EventOptions,
    cb: Callback<VotePowerContractChanged>
  ): void;
}
