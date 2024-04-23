import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface Response<T> {
    code: number;
    message: string;
    data: T | any[];
}
export declare class AppInterceptor<T> implements NestInterceptor<T, Response<T | any[]>> {
    constructor();
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>>;
    private removeMessageKey;
}
