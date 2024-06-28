export interface OrderModel {
  routeId: number;
  qty: number;
  side: side;
  validity: validity;
  type: orderType;
  tradableInstrumentId: number;
  price?: number;
  strategyId?: string;
  stopLoss?: number;
  stopLossType?: stopLossType;
  stopPrice?: number;
  takeProfit?: number;
  takeProfitType?: takeProfitType;
  trStopOffset?: number;
}

enum orderType {
  limit = 'limit',
  market = 'market',
  stop = 'stop',
}

enum validity {
  GTC = 'GTC',
  IOC = 'IOC',
}

enum takeProfitType {
  absolute = 'absolute',
  offset = 'offset',
}

enum stopLossType {
  absolute = 'absolute',
  offset = 'offset',
  trailingOffset = 'trailingOffset',
}

enum side {
  buy = 'buy',
  sell = 'sell',
}
