import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { info } from 'server/library/logger';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();
    if (req) {
      const method = req.method;
      const url = req.url;
      return next
        .handle()
        .pipe(
          tap(() =>
            info(
              `${method} ${url} ${Date.now() - now}ms`,
              context.getClass().name,
            ),
          ),
        );
    } else {
      const ctx: any = GqlExecutionContext.create(context);
      const resolverName = ctx.constructorRef.name;
      const ctxInfo = ctx.getInfo();
      return next
        .handle()
        .pipe(
          tap(() =>
            info(
              `${ctxInfo.parentType} "${ctxInfo.fieldName}" ${Date.now() -
                now}ms`,
              resolverName,
            ),
          ),
        );
    }
  }
}
