import { useState } from "react";
import IUser from "../../interfaces/IUser";
import Modal from "../Modal/Modal";
import styles from './User.module.scss';

export default function User({ user }: { user: IUser }) {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <li onClick={() => setModalOpen(true)} className={styles.user}>
                <h4> Nome: {user.name}</h4>
                <p> Email: {user.email}</p>
                <p> Cidade: {user.address.city}</p>
            </li>
            {modalOpen && <Modal user={user} onClose={() => setModalOpen(false)} />}
        </>
    )
}