import { mergeClasses } from 'utils/StyleHelper';
import './support.scss';
import SupportPageCustomHeader from './SupportPageCustomHeader';
import KofiIframe from './KofiIframe';

export const metadata = {
    title: 'Puy de dôme Parapente : Soutien',
};

export default function SupportPage() {
    return (
        <div className="mobile-app">
            <div className={mergeClasses('mobile-content')}>
                <div className={`pageContent support-page`}>
                    <SupportPageCustomHeader />
                    <div
                        style={{
                            textAlign: 'justify',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            alignSelf: 'center',
                        }}
                    >
                        <KofiIframe />

                        <div
                            // Ouais flemme de faire du css a coté..
                            style={{
                                textAlign: 'justify',
                                maxWidth: '500px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                alignSelf: 'center',
                                // color: '#ba1829',
                                opacity: 0.9,
                                padding: '0 0.25em',
                            }}
                        >
                            <p>
                                Je développe bénévolement ce site depuis deux
                                ans pour centraliser l&apos;accés aux
                                informations sur les conditions de vols en
                                parapente au sommet du Puy de Dôme et permettre
                                à tous une pratique plus simple et plus sûre.
                            </p>
                            <p>
                                Ce site se base essentiellement sur des outils
                                tiers existants et se contente d&apos;agréger
                                les données pour faciliter leur lecture. Au fait
                                et à mesure du temps j&apos;essaie
                                d&apos;ajouter d&apos;avantage de contenu en
                                m&apos;efforcant de garder un outils clair,
                                simple et rapide.
                            </p>
                            <p>
                                Si vous aimez mon travail, si cet outil vous
                                aide au quotidien; ou si vous voulez me soutenir
                                pour me motiver à faire évoluer ce site et à le
                                maintenir en ligne, vous pouvez me faire un don
                                via le formulaire ci dessous.
                                <br /> Pour m&apos;acheter un café, une bière au
                                prochain débiefing, ou une nouvelle voile .. :p
                            </p>
                        </div>
                    </div>

                    {/* <a
                        target="_blank"
                        href="https://www.paypal.com/donate/?hosted_button_id=H74DV6ZHXCWGJ&locale.x=fr_FR"
                        className="support-button"
                    >
                        Me payer une biere pour le prochain débriefing
                        <FontAwesomeIcon icon={faBeerMugEmpty} />
                    </a> */}
                </div>
            </div>
        </div>
    );
}
