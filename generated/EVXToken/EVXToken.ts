// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Pause extends ethereum.Event {
  get params(): Pause__Params {
    return new Pause__Params(this);
  }
}

export class Pause__Params {
  _event: Pause;

  constructor(event: Pause) {
    this._event = event;
  }
}

export class Unpause extends ethereum.Event {
  get params(): Unpause__Params {
    return new Unpause__Params(this);
  }
}

export class Unpause__Params {
  _event: Unpause;

  constructor(event: Unpause) {
    this._event = event;
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class EVXToken extends ethereum.SmartContract {
  static bind(address: Address): EVXToken {
    return new EVXToken("EVXToken", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  approve(_spender: Address, _value: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_approve(_spender: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  moderatorTransferFrom(_from: Address, _to: Address, _value: BigInt): boolean {
    let result = super.call(
      "moderatorTransferFrom",
      "moderatorTransferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );

    return result[0].toBoolean();
  }

  try_moderatorTransferFrom(
    _from: Address,
    _to: Address,
    _value: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "moderatorTransferFrom",
      "moderatorTransferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferFrom(_from: Address, _to: Address, _value: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    _from: Address,
    _to: Address,
    _value: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decimals(): BigInt {
    let result = super.call("decimals", "decimals():(uint256)", []);

    return result[0].toBigInt();
  }

  try_decimals(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("decimals", "decimals():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  moderator(): Address {
    let result = super.call("moderator", "moderator():(address)", []);

    return result[0].toAddress();
  }

  try_moderator(): ethereum.CallResult<Address> {
    let result = super.tryCall("moderator", "moderator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  version(): string {
    let result = super.call("version", "version():(string)", []);

    return result[0].toString();
  }

  try_version(): ethereum.CallResult<string> {
    let result = super.tryCall("version", "version():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decreaseApproval(_spender: Address, _subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseApproval",
      "decreaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseApproval(
    _spender: Address,
    _subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseApproval",
      "decreaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  transfer(_to: Address, _value: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(_to: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  hasModerator(): boolean {
    let result = super.call("hasModerator", "hasModerator():(bool)", []);

    return result[0].toBoolean();
  }

  try_hasModerator(): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasModerator", "hasModerator():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  newModerator(): Address {
    let result = super.call("newModerator", "newModerator():(address)", []);

    return result[0].toAddress();
  }

  try_newModerator(): ethereum.CallResult<Address> {
    let result = super.tryCall("newModerator", "newModerator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newOwner(): Address {
    let result = super.call("newOwner", "newOwner():(address)", []);

    return result[0].toAddress();
  }

  try_newOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("newOwner", "newOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  increaseApproval(_spender: Address, _addedValue: BigInt): boolean {
    let result = super.call(
      "increaseApproval",
      "increaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseApproval(
    _spender: Address,
    _addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseApproval",
      "increaseApproval(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_spender),
        ethereum.Value.fromUnsignedBigInt(_addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowance(_owner: Address, _spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(
    _owner: Address,
    _spender: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isFrozen(_addr: Address): boolean {
    let result = super.call("isFrozen", "isFrozen(address):(bool)", [
      ethereum.Value.fromAddress(_addr)
    ]);

    return result[0].toBoolean();
  }

  try_isFrozen(_addr: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isFrozen", "isFrozen(address):(bool)", [
      ethereum.Value.fromAddress(_addr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ModeratorTransferFromCall extends ethereum.Call {
  get inputs(): ModeratorTransferFromCall__Inputs {
    return new ModeratorTransferFromCall__Inputs(this);
  }

  get outputs(): ModeratorTransferFromCall__Outputs {
    return new ModeratorTransferFromCall__Outputs(this);
  }
}

export class ModeratorTransferFromCall__Inputs {
  _call: ModeratorTransferFromCall;

  constructor(call: ModeratorTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ModeratorTransferFromCall__Outputs {
  _call: ModeratorTransferFromCall;

  constructor(call: ModeratorTransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class RemoveModeratorshipCall extends ethereum.Call {
  get inputs(): RemoveModeratorshipCall__Inputs {
    return new RemoveModeratorshipCall__Inputs(this);
  }

  get outputs(): RemoveModeratorshipCall__Outputs {
    return new RemoveModeratorshipCall__Outputs(this);
  }
}

export class RemoveModeratorshipCall__Inputs {
  _call: RemoveModeratorshipCall;

  constructor(call: RemoveModeratorshipCall) {
    this._call = call;
  }
}

export class RemoveModeratorshipCall__Outputs {
  _call: RemoveModeratorshipCall;

  constructor(call: RemoveModeratorshipCall) {
    this._call = call;
  }
}

export class UnfreezeCall extends ethereum.Call {
  get inputs(): UnfreezeCall__Inputs {
    return new UnfreezeCall__Inputs(this);
  }

  get outputs(): UnfreezeCall__Outputs {
    return new UnfreezeCall__Outputs(this);
  }
}

export class UnfreezeCall__Inputs {
  _call: UnfreezeCall;

  constructor(call: UnfreezeCall) {
    this._call = call;
  }

  get _addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnfreezeCall__Outputs {
  _call: UnfreezeCall;

  constructor(call: UnfreezeCall) {
    this._call = call;
  }
}

export class DecreaseApprovalCall extends ethereum.Call {
  get inputs(): DecreaseApprovalCall__Inputs {
    return new DecreaseApprovalCall__Inputs(this);
  }

  get outputs(): DecreaseApprovalCall__Outputs {
    return new DecreaseApprovalCall__Outputs(this);
  }
}

export class DecreaseApprovalCall__Inputs {
  _call: DecreaseApprovalCall;

  constructor(call: DecreaseApprovalCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseApprovalCall__Outputs {
  _call: DecreaseApprovalCall;

  constructor(call: DecreaseApprovalCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ApproveOwnershipCall extends ethereum.Call {
  get inputs(): ApproveOwnershipCall__Inputs {
    return new ApproveOwnershipCall__Inputs(this);
  }

  get outputs(): ApproveOwnershipCall__Outputs {
    return new ApproveOwnershipCall__Outputs(this);
  }
}

export class ApproveOwnershipCall__Inputs {
  _call: ApproveOwnershipCall;

  constructor(call: ApproveOwnershipCall) {
    this._call = call;
  }
}

export class ApproveOwnershipCall__Outputs {
  _call: ApproveOwnershipCall;

  constructor(call: ApproveOwnershipCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class TransferModeratorshipCall extends ethereum.Call {
  get inputs(): TransferModeratorshipCall__Inputs {
    return new TransferModeratorshipCall__Inputs(this);
  }

  get outputs(): TransferModeratorshipCall__Outputs {
    return new TransferModeratorshipCall__Outputs(this);
  }
}

export class TransferModeratorshipCall__Inputs {
  _call: TransferModeratorshipCall;

  constructor(call: TransferModeratorshipCall) {
    this._call = call;
  }

  get otherModerator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferModeratorshipCall__Outputs {
  _call: TransferModeratorshipCall;

  constructor(call: TransferModeratorshipCall) {
    this._call = call;
  }
}

export class FreezeCall extends ethereum.Call {
  get inputs(): FreezeCall__Inputs {
    return new FreezeCall__Inputs(this);
  }

  get outputs(): FreezeCall__Outputs {
    return new FreezeCall__Outputs(this);
  }
}

export class FreezeCall__Inputs {
  _call: FreezeCall;

  constructor(call: FreezeCall) {
    this._call = call;
  }

  get _addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class FreezeCall__Outputs {
  _call: FreezeCall;

  constructor(call: FreezeCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ApproveModeratorshipCall extends ethereum.Call {
  get inputs(): ApproveModeratorshipCall__Inputs {
    return new ApproveModeratorshipCall__Inputs(this);
  }

  get outputs(): ApproveModeratorshipCall__Outputs {
    return new ApproveModeratorshipCall__Outputs(this);
  }
}

export class ApproveModeratorshipCall__Inputs {
  _call: ApproveModeratorshipCall;

  constructor(call: ApproveModeratorshipCall) {
    this._call = call;
  }
}

export class ApproveModeratorshipCall__Outputs {
  _call: ApproveModeratorshipCall;

  constructor(call: ApproveModeratorshipCall) {
    this._call = call;
  }
}

export class IncreaseApprovalCall extends ethereum.Call {
  get inputs(): IncreaseApprovalCall__Inputs {
    return new IncreaseApprovalCall__Inputs(this);
  }

  get outputs(): IncreaseApprovalCall__Outputs {
    return new IncreaseApprovalCall__Outputs(this);
  }
}

export class IncreaseApprovalCall__Inputs {
  _call: IncreaseApprovalCall;

  constructor(call: IncreaseApprovalCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseApprovalCall__Outputs {
  _call: IncreaseApprovalCall;

  constructor(call: IncreaseApprovalCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get otherOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
