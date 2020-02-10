import stockTicker from './index';

import { expect } from 'chai';

describe('stockTicker', () => {
    it('should return the initial state', () => {
        expect(stockTicker(undefined, {})).eql({});
    });

    it('should return UPDATE_DATA with init state {}', () => {
        expect(stockTicker({}, {
            type: 'UPDATE_DATA',
            data: {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '147.75',
                change: '52.74',
                change_percent: '0.15',
                last_trade_time: '2020-02-09T17:15:46.000Z',
                dividend: '0.89',
                yield: '1.74',
            }
        })).eql({
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '147.75',
            change: '52.74',
            change_percent: '0.15',
            last_trade_time: '2020-02-09T17:15:46.000Z',
            dividend: '0.89',
            yield: '1.74',
        });
    });

    it('should return UPDATE_DATA', () => {
        expect(stockTicker({
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '147.75',
            change: '52.74',
            change_percent: '0.15',
            last_trade_time: '2020-02-09T17:15:46.000Z',
            dividend: '0.89',
            yield: '1.74',
        }, {
            type: 'UPDATE_DATA',
            data: {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '555.55',
                change: '55.55',
                change_percent: '5.55',
                last_trade_time: '2020-02-09T17:15:46.000Z',
                dividend: '5.55',
                yield: '5.55',
            }
        })).eql({
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '555.55',
            change: '55.55',
            change_percent: '5.55',
            last_trade_time: '2020-02-09T17:15:46.000Z',
            dividend: '5.55',
            yield: '5.55',
        });
    });
});
