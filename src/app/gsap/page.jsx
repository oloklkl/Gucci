'use client';

import Link from 'next/link';

export default function App() {
    return (
        <div>
            <ul>
                <li>GSAP</li>
                <li>ScrollTrigger</li>
                <li>
                    <Link href='/gsap/horizontal'> Horizontal Scroll </Link>
                </li>
                <li>
                    <Link href='/gsap/vertical'> Vertical Scroll </Link>
                </li>
                <li>
                    <Link href='/gsap/twoway'> Two Way Scroll </Link>
                </li>
            </ul>
        </div>
    );
}
