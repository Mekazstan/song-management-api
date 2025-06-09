import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule, DataSource } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { AuthModule } from './auth/auth.module';
import { ArtistModule } from './artists/artist.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { PlaylistsModule } from './playlists/playlists.module';
import { Song } from './songs/song.entity';
import { Artist } from './artists/artist.entity';
import { User } from './users/user.entity';
import { Playlist } from './playlists/playlist.entity';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './events/events.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:['.env.development'],
      isGlobal: true,
      load: [configuration]
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'spotify-clone',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      entities: [Song, Artist, User, Playlist],
      synchronize: true,
    }),
    SongsModule,
    PlaylistsModule,
    AuthModule, ArtistModule, UsersModule, EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {
    console.log('dbName', this.dataSource.driver.database);
  }
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs'); // Option no 1.
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .forRoutes({path: 'songs', method: RequestMethod.POST});
  // // Option no 2.
  consumer.apply(LoggerMiddleware).forRoutes(SongsController); // Option no 3.
  }
}
