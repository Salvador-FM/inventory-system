import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

export const REDIS_CLIENT = 'REDIS_CLIENT';

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: (configService: ConfigService): Redis => {
        const client = new Redis(configService.getOrThrow<string>('REDIS_URL'));

        client.on('connect', () => {
          console.warn('Redis connected');
        });

        client.on('error', (err: Error) => {
          console.error('Redis error:', err.message);
        });

        return client;
      },
      inject: [ConfigService],
    },
  ],
  exports: [REDIS_CLIENT],
})
export class RedisModule {}
