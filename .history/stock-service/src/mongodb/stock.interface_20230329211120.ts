interface Quote {
  "name"?: string,
  "symbol"?: string,
  "open"?: number,
  "high"?: number,
  "low"?: number,
  "close"?: number, 
  "volume"?: number,
  "date"?: Date,
  "time"?: Date,
  "user"?: number,

  name: { type: String, required: true },
  symbol: { type: String, required: true },
  open: { type: Number, required: true },
  high: { type: Number, required: true },
  low: { type: Number, required: true },
  close: { type: Number, required: true },
  volume: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  user: { type: Number, required: true },
}

export default Quote;
