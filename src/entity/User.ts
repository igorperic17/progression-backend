const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}

module.exports = User;