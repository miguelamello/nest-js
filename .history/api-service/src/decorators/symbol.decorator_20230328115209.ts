import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Symbol = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    let symbol = request.params.symbol;
    symbol = symbol.split(' ')[0];
    symbol = 
    return symbol.trim().toLowerCase();
  },
);

