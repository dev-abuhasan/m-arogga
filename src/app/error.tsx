'use client'
import style from '@/services/scss/styles/error.module.scss';
import Link from 'next/link';

const error = ({ error, reset }: { error: Error, reset: () => void }) => {
    return (
        <main className={style.error_main}>
            <div>
                <p>There was a problem</p>
                <h1>
                    {error.message || 'Something went wrong'}
                </h1>
                <p>Please try again later or contact support if the problem persists</p>

                <div>
                    <button onClick={reset}>Try again</button>
                    <Link href='/'>Go Back Home</Link>
                </div>
            </div>
        </main>
    );
};

export default error;