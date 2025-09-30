import styles from './Sign.module.css';

interface SignProps {
    day: string;
}

const Sign = ({ day }: SignProps) => {
    return (
        <div className="content">
            <p className={styles.content}>{day} à noite.</p>
        </div>
    );
}

export default Sign;