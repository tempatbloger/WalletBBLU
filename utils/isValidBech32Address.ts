import * as bitcoin from 'bitcoinjs-lib';
import { bech32 } from 'bech32';
import { bbluNetwork } from '../blue_modules/bblu-network';

export function isValidBech32Address(address: string): boolean {
  try {
    // Use bech32 library directly to decode with custom HRP
    const decoded = bech32.decode(address);
    // Validate HRP matches BBLU network
    if (decoded.prefix !== bbluNetwork.bech32) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}