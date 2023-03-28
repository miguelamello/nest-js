import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Symbol = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const symbol = request.symbol;
    console.
    return data ? { [data]: symbol } : symbol;
  },
);

