import styles from './UserList.module.css';

function UserList({ data }) {
    return (
        <div className={styles.container}>
            <h1>Users</h1>
            <div className={styles.grid}>
                {data.length === 0 ? (
                    <p>No data yet.</p>
                ) : (
                    data.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <h3>{item.fullname}</h3>
                            <p><strong>Email : </strong> {item.email}</p>
                            <p><strong>Gender : </strong> {item.gender || 'N/A'}</p>
                            <p><strong>Phone : </strong> {item.phone || 'N/A'}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default UserList;