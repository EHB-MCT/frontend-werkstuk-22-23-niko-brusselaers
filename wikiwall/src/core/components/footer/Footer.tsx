import styles from './Footer.module.css'

function Footer() {
    return (
      <div className={styles.footerContainer}>
        <img src="./assets/images/wikiwall_logo.png" alt="" />
        <div> 
          <p>
            Wikiwall is eon online encyclopedie die ernaar streeft informatie to
            bieden in alle erkende talen ter wereld, die vrij herbruikbaar,
            objectief en verifieerbaar is. Het project is gebaseerd op vijf
            basisprincipes. De Nederlandstalige versie startte op 19 juni 2001
            en is met meer dan 2,1 miljoen artikelen de op vijf na grootste van
            circa 330 taalversies.
          </p>
          <p>
            De encyclopedie is vrij bewerkbaar. Dat houdt in dat iedereen tekst
            en afbeeldingen kan toevoegen of aanpassen, met inachtneming van de
            basisregels. Voor de bewerkers zijn er diverse hulppagina's
            beschikbaar. Er is ook een snelcursus voor nieuwelingen. Zaken
            uitproberen kan in de zandbak en vragen kunnen gesteld worden bij de
            helpdesk. Voor privacyvragen kunt u hier terecht.
          </p>
        </div>
      </div>
    );
}

export default Footer;