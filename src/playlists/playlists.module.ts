import { Module } from '@nestjs/common';
import { PlayListsController } from './playlists.controller';
import { PlayListsService } from './playlists.service';

@Module({
  controllers: [PlayListsController],
  providers: [PlayListsService]
})
export class PlaylistsModule {}
