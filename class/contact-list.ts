import BIP47Factory from '@spsina/bip47';

import { SilentPayment } from 'silent-payments';

import ecc from '../blue_modules/noble_ecc';
import { concatUint8Arrays } from '../blue_modules/uint8array-extras';
import { BBLU_BECH32_PREFIX, bbluNetwork } from '../blue_modules/bblu-network';
import * as bitcoin from 'bitcoinjs-lib';
import { bech32 } from 'bech32';

export class ContactList {
  isBip47PaymentCodeValid(pc: string) {
    try {
      BIP47Factory(ecc).fromPaymentCode(pc);
      return true;
    } catch (_) {
      return false;
    }
  }

  isBip352PaymentCodeValid(pc: string) {
    return SilentPayment.isPaymentCodeValid(pc);
  }

  isPaymentCodeValid(pc: string): boolean {
    return this.isBip47PaymentCodeValid(pc) || this.isBip352PaymentCodeValid(pc);
  }

  isAddressValid(address: string): boolean {
    try {
      bitcoin.address.toOutputScript(address, bbluNetwork); // throws, no?

      if (!address.toLowerCase().startsWith(BBLU_BECH32_PREFIX)) return true;
      // Use bech32 library directly to decode with custom HRP
      const decoded = bech32.decode(address);
      // Validate HRP matches BBLU network
      if (decoded.prefix !== bbluNetwork.bech32) {
        return false;
      }
      // Convert words (5-bit) to bytes (8-bit)
      const version = decoded.words[0];
      const dataBytes = Buffer.from(bech32.fromWords(decoded.words.slice(1)));
      if (version === 0) return true;
      if (version === 1 && dataBytes.length !== 32) return false;
      if (version === 1 && !ecc.isPoint(concatUint8Arrays([new Uint8Array([2]), dataBytes]))) return false;
      if (version > 1) return false;
      // ^^^ some day, when versions above 1 will be actually utilized, we would need to unhardcode this
      return true;
    } catch (e) {
      return false;
    }
  }
}
