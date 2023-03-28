import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Symbol = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const symbol = request.params.symbol;
    if (symbol.trim().length > 0) {
      return symbol;
    } else {
      throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' });
    }
  },
);

