import AppPage from 'components/layout/AppPage';
import SmallMapDemo from './SmallMapDemo';

export const metadata = {
    title: 'Puy de dôme Parapente : Le site',
};

export const revalidate = 60;

const InfosPage = () => {
    return (
        <AppPage pageTitle={'Le site'}>
            <SmallMapDemo />
            <h2>Emplacement des balises</h2>
            <p>Le sommet du puy de dôme est équippé de deux balises.</p>
            <p>
                La balise Holfuy, géré par le syndicat des moniteurs est placée
                au Nord du site. Elle est démontée en hiver pour la protéger du
                gel et des vents violents que l&apos;on peut renconter au
                sommet.
            </p>
            <h2>Décollages</h2>
            Le puy de dôme dispose de plusieurs décollages à 360 degrs adaptés
            aux différentes conditions aérologiques. Attention cependant, chaque
            décollage et orientation possède ses propres particularités.
            <h3 id="takeoff-north">Déco Nord</h3>
            <p>Ce décollage fonctionne bien par régime de Nord et Nord-Est.</p>
            <p>
                L'atterissage associé est évidement la taillerie que l'on peut
                rejoindre sans trop de diffiultés
            </p>
            <p>
                Le principale danger de ce décollage est la pente abrupte sur le
                coté par tendance Est, il est important de bien positionner sa
                voile, de bien préparer son gonflage et d'être vigilant pour ne
                pas se faire "emmener dans le trou".
                <br />
                Pour décoller en "cobra" on positionnera plutôt notre aile du
                coté des barrières.
            </p>
            <p>
                En cas de vent fort, il ne faut pas hésiter à se placer bas dans
                la pente pour limiter l'effet de la compression qui va entrainer
                un flux plus fort en haut de la pente.
            </p>
            <h3 id="takeoff-west">Déco Ouest</h3>
            <p>
                Le vent d'Ouest est le secteur priviligié des longues soirées de
                soaring face au coucher de soleil. Il se compose d'une grande
                pente qui ne présente pas de difficulté particulières. Faites
                attention à bien attendre d'avoir passer le chemin pour vous
                installer dans la selette, il est possible de retoucher !
            </p>
            <p>
                Attention, l'atterissage de la taillerie est alors sous le vent.
                En cas de vent fort (25km/h) combiné à certaines masses d'air
                des effet ondulatoires peuvent se déclencher sous le vent. De
                nombreux pilotes font le tour, mais il faut se préparer à
                rencontrer une masse d'air pas toujours saine.
            </p>
            <h3 id="takeoff-north-west">Déco Nord-Ouest</h3>
            <p>
                La majeur difficulté de ce décollage plat, c'est la dévente que
                va renontrer votre voile en etant au sol puisqu'elle sera placée
                sous la cassure. Vous risquez des difficultés à la faire monter
                puis une forte traction lorsqu'elle va rentrer dans le vent. Il
                vaut des fois mieux se placer au niveau du chemin pour retrouver
                une pente qui vous aidera à amortir la montée de la voile.
            </p>
            <h3 id="takeoff-south">Déco Sud</h3>
            <p>
                Le principale danger est la ligne de caténire du panoramique qui
                passe en dessous du décollage et les quelques sapins qui sont
                également assez proches quand l'aile ne prend pas en charge.
            </p>
            <p>
                Il faut se méfier sur ce décollage du léger travers qui peut
                compliquer la montée de voile
            </p>
            <p>
                Vous rejoindrez sans problème la taillerie ou si le vent n'est
                pas trop fort Lashamp aprés avoir survoler la foret
            </p>
            <h3 id="takeoff-south-west">Déco Sud-Ouest</h3>
            <p>
                En fonction de l'orientation et de la fréquentation, plusieurs
                positionnement possibles. Le plateau au bord du chemin, ou les
                grandes pentes plus au sud. Dans les deux cas, vous pourrez
                préparer votre matériel de l'autre coté.
            </p>
            <p>L'atterissage du Col de Ceyssat se trouve juste devant vous.</p>
            <p>
                Si vous voulez rejoindre la taillerie, dans des conditions
                balistiques. il ne faut pas trop trainer, on recommande de
                partir avant la flameche située dans le dernier virage du chemin
                des muletiers. Faites attention au venturi et à la topologie
                descendante du terraine
            </p>
            <h3 id="takeoff-east">Déco Est</h3>
            <h2>Atterrissages</h2>
            <h3 id="landing-la-taillerie">La taillerie</h3>
            <h3 id="landing-lashamp">Lashamp</h3>
            <h3 id="landing-col-de-ceyssat">Col de Ceyssat</h3>
            <h3 id="landing-summit">Repose au sommet</h3>
            <h2>Dangers et pièges aérologiques</h2>
            <h3>L'effet venturi</h3>
            <h3>Le vent du sud</h3>
            <h3>La combe du restau</h3>
            <h2>Parcours de cross classiques</h2>
            <h3>Le celèbre triangle à deux branches</h3>
            <h3>Rejoindre le sancy</h3>
            <h3>Le lac d'Aydat</h3>
            <h2>Accés au sommet</h2>
        </AppPage>
    );
};

export default InfosPage;
