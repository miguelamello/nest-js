import { createParamDecorator, ExecutionContext, ForbiddenException } from '@nestjs/common';

export const Symbol = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    let symbol = request.params.symbol;
    symbol = symbol.split(' ')[0];
    symbol = symbol.trim().toLowerCase();
    symbol = symbol.replace(/[^A-Za-z.]/g, '');

    if (symbol.length === 1) {
      throw new ForbiddenException('Symbol must be at least 2 characters long');
    }

    return symbol;
  },
);

