import { Controller, UseGuards, Body, Post, Request } from '@nestjs/common';
import { JwtArtistGuard } from 'src/auth/jwt-artist.guard';
import { CreateSongDTO } from 'src/songs/dto/create-song-dto';
import { Song } from 'src/songs/song.entity';
import { SongsService } from 'src/songs/songs.service';

@Controller('artists')
export class ArtistsController {
    constructor(private songService: SongsService){}
    @Post()
    @UseGuards(JwtArtistGuard)
    create(@Body() createSongDTO: CreateSongDTO, @Request() req): Promise<Song> {
        console.log(req.user);
        return this.songService.create(createSongDTO)
    }
}
