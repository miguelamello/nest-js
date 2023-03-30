
class CreateStockDto {

  "name": string;
  "symbol": string;
  "open": number;
  "high": number;
  "low": number;
  "close": number; 
  "volume": number;
  "date": Date;
  "time": Date;
  "user": number;

  constructor(data?: Partial<CreateStockDto>) {
    Object.assign(this, data);
  }

}

export default CreateStockDto as ;
