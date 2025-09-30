import styles from './Sign.module.css';

interface SignProps {
    day: string;
    hour: number;
}

const Sign = ({ day, hour }: SignProps) => {
    return (
        <div className="content">
            <p className={styles.content}> 
                {
                hour > 18 ? `${day} à noite.` : `${day}`
                } 
            </p>
        </div>
    );
}

export default Sign;