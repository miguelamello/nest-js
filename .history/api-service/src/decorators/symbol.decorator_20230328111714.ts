import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Symbol = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const symbol = request.params.symbol;
    (symbol.trim().length === 0) ;
    return symbol;
  },
);

