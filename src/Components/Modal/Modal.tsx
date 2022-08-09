import styles from './Modal.module.scss';
import IUser from "../../interfaces/IUser";

type Props = {
    onClose?: (() => void) | undefined;
    user: IUser;
}


export default function Modal({ onClose, user }: Props) {
    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                <button className={styles.close} onClick={onClose} />
                <div className={styles.content}>
                    <h4>ID: {user.id}</h4>
                    <h3>Nome: {user.name}</h3>
                    <p>UserName: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address.street}, {user.address.city}, {user.address.suite}, {user.address.zipcode}
                    </p>
                    <p>Geo: Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Company: {user.company.name}, {user.company.catchPhrase}, { user.company.bs}
                    </p>

                </div>

            </div>
        </div>

    )
}