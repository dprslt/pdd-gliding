import AppPage from "components/layout/AppPage";

export const metadata = {
    title: 'Puy de dôme Parapente : Le site',
};

export const revalidate = 60; 

const InfosPage = () => {
    return (
        <AppPage
            pageTitle={'Le site'}
        >
            <h2>Emplacement des balises</h2>

            

            <h2>Décollages</h2>

            <h3 id="takeoff-north">Déco Nord</h3>

            <h3 id="takeoff-west">Déco Ouest</h3>

            <h3 id="takeoff-south">Déco Sud</h3>


            <h3 id="takeoff-south-west">Déco Sud-Ouest</h3>

            <h3 id="takeoff-east">Déco Est</h3>


            <h2>Atterrissages</h2>

            <h3 id="landing-la-taillerie">La taillerie</h3>

            <h3 id="landing-lashamp">Lashamp</h3>

            <h3 id="landing-col-de-ceyssat">Col de Ceyssat</h3>

            <h3 id="landing-summit">Repose au sommet</h3>

            <h2>Dangers et pièges aérologiques</h2>

            <h2>Parcours de cross classiques</h2>

            <h2>Accés au sommet</h2>

        </AppPage>
    );
};

export default InfosPage;