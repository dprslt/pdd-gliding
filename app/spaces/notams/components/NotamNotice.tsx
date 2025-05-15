import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NotamNotice() {
    return (
        <div className="text-alert">
            <div className="warn">
                <FontAwesomeIcon icon={faWarning} />
            </div>
            <div className="text">
                <p>
                    <strong>
                        Les informations ci dessus ne sont ni exhautives ni
                        garanies; elles ne suffisent pas à préparer un vol dans
                        le respect de la réglementation aérienne.
                        <br />
                        Vous volez sous votre propre responsabilité et seuls les
                        sources de données officielles du SIA peuvent garantir
                        d&apos;obtenir des informations valides.
                    </strong>
                </p>

                <p>
                    Les NOTAM ci-dessus sont directement récupérés depuis
                    <strong> Sofia Briefing</strong> en cherchant une navigation
                    entre Montlucon et Aurillac du FL 0 au FL 115 avec un
                    couloir de 15 Nautiques de large.
                    <br /> La recherche est faite pour une validité de 24h avec
                    une heure de décollage au début de l&apos;heure actuelle.
                </p>

                <p>
                    La plage horaire indiquée au dessus des NOTAMs est en heure
                    locale. Le contenu des NOTAMs étant libre, les horaires
                    spécifiés dans les champs D et E sont indiqués en UTC. En
                    cliquant sur la pastille UTC, je procède à une traduction en
                    heure locale, merci de bien vérifier la cohérence des
                    informations.
                </p>
            </div>
        </div>
    );
}
