import { ReactNode } from 'react';
import { Header, Footer } from '@/components/Element';

type MainLayoutProps = {
    children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            <div className="flex flex-1 bg-gray-100">
                <main className="flex-1 focus:outline-none">{children}</main>
            </div>
            <Footer />
        </>
    );
};
