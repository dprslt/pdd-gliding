import { redirect } from 'next/navigation';
import React from 'react';

type IndexPageProps = {};

const IndexPage: React.FC<IndexPageProps> = () => {
    redirect('/balises');
};

export default IndexPage;
