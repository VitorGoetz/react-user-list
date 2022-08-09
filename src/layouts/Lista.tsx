import { useEffect, useState } from 'react';
import { getUsers } from '../services/usersApi';
import styles from './Lista.module.scss';
import User from '../Components/User/User';
import IUser from '../interfaces/IUser';


export default function Lista() {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then((users) => setUsers(users))
    }, []);

    users.sort(function (x, y) {
        const a = x.name.toUpperCase();
        const b = y.name.toUpperCase();

        return a < b ? -1 : a > b ? 1 : 0;
    })

    return (
        <div className={styles.users}>
            <h3 className={styles.titulo}>Lista de Usuários</h3>
            <ul>
                {users.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </ul>
        </div>
    )
}