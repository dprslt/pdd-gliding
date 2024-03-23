import { faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NotamNotice() {
    return (
        <div className="text-alert">
            <div className="warn">
                <FontAwesomeIcon icon={faFlaskVial} />
            </div>
            <div className="text">
                <p>
                    <strong>
                        Cette page est en Beta, merci de vérifier les
                        informations s&apos;y trouvant. Elles ne sont pas
                        exhautives et ne suffisent pas à préparer un vol dans le
                        respect de la réglementation aérienne.
                        <br />
                        Vous volez sous votre propre responsabilité.
                    </strong>
                </p>

                <p>
                    Les NOTAM ci-dessous sont directement récupérés depuis
                    <strong> Sofia Briefing</strong> en cherchant une navigation
                    entre Montlucon et Aurillac du FL 0 au FL 115 avec un
                    couloir de 15 Nautiques de large.
                    <br /> La recherche est faite pour une validité de 24h avec
                    une heure de décollage au début de l&apos;heure actuelle.
                </p>

                {/* <p>
                    <strong>
                        Si vous ne comprenez pas l'intégralité du paragraphe
                        précédent et n'avais pas fait davantage de recherches
                        avant de partir voler. Je vous conseil fortement de
                        rester en local sur le site.
                    </strong>
                </p> */}
            </div>
        </div>
    );
}
