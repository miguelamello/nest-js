import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Symbol = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    let symbol = request.params.symbol;
    symbol = symbol.split(' ')[0];
    symbol = symbol.trim().toLowerCase();
    symbol = symbol.replace(/[^A-Za-z.]/g, '');
    return (symbol.length > 0) ? symbol : new ForbiddenException();;
  },
);

