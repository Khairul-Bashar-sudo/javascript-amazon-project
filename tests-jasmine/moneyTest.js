import { formatMoney } from '../src/money.js';
describe('formatMoney', () => {
    it('converts cents to dollars', () => {
        expect(formatMoney(2095)).toEqual('20.95');
    });
    it('handles zero cents', () => {
        expect(formatMoney(0)).toEqual('0.00');
    });
    it('rounds cents to nearest cent', () => {
        expect(formatMoney(2095.5)).toEqual('20.96');
        expect(formatMoney(2095.4)).toEqual('20.95');
    });
});
