import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'John@gmail.com',
            password: 'Johnpassword',
        },
        {
            id: 2,
            name: 'Bob Doe',
            email: 'bob@gmaill.com',
            password: 'Bobpassword',
        },
        {
            id: 3,
            name: 'Gary Doe',
            email: 'gary@gmail.com',
            password: 'Garypassword',
        }
    ];

    findByEmail(email: string): Promise<User | undefined> {
        const user =  this.users.find(user => user.email === email);

        if(user){
            return Promise.resolve(user);
        }
        return undefined;
    }

    findOne(id: number): Promise<User | undefined> {
        const user =  this.users.find(user => user.id === id);
        
        if(user){
            return Promise.resolve(user);
        }
        return undefined;
    }
}
