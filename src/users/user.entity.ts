import { Playlist } from 'src/playlists/playlist.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Exclude } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Dave',
    description: 'Please provide the firstName of the user',
  })
  @Column()
  firstName: string;

  @ApiProperty({
    example: 'Sam',
    description: 'Please provide the lastName of the user',
  })
  @Column()
  lastName: string;

  @ApiProperty({
    example: 'dave.same@example.com',
    description: 'Please provide the email of the user',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    example: '*******',
    description: 'Please provide the password of the user',
  })
  @Column()
  @Exclude()
  password: string;

  @Column()
  apiKey: string;

  /**
   * A user can create many playLists
   */
  @OneToMany(() => Playlist, (playList) => playList.user)
  playLists: Playlist[];
}