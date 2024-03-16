import LinkElement from '../../../components/layout/linkElement/LinkElement';
import opgcLogo from './opgc-logo.png';

export default function OPGCLink() {
    return (
        <LinkElement
            href={'https://www.opgc.fr/vobs/quicklooks.php'}
            favicon={opgcLogo}
        >
            Observatoire virtuel OPGC
        </LinkElement>
    );
}
