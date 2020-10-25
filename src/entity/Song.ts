const { Entity, PrimaryGeneratedColumn, Column} = require("typeorm");

@Entity()
export default class Song {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    artist: string;

    @Column()
    chords: string;

}
