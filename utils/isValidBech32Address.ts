import * as bitcoin from 'bitcoinjs-lib';
import { bbluNetwork } from '../blue_modules/bblu-network';

export function isValidBech32Address(address: string): boolean {
  try {
    bitcoin.address.fromBech32(address);    
    return true;
  } catch (e) {
    return false;
  }
}