import LinkElement from '../../../components/layout/linkElement/LinkElement';
import ffvlLogo from './ffvl-logo.png';

export default function FfvlBalisesMetoDotCom() {
    return (
        <LinkElement
            href={'https://balisemeteo.com/depart.php?dept=63'}
            favicon={ffvlLogo}
        >
            Balises FFVL du département
        </LinkElement>
    );
}
