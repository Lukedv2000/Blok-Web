# Procesverslag
**Auteur:** -Luke de Vries-


## Bronnenlijst
1. https://www.ah.nl/
2. https://www.ah.nl/producten/product/wi2465/chocomel-vol

## Toegankelijkheidstest

**Toegankelijkheid Voice Over**

Wat mij opvalt aan de toegankelijkheid is dat eigenlijk alles er wel in zit. Alles wat nodig is dat wordt uitgesproken wordt daadwerkelijk voorgelezen. Wel zijn er een aantal punten die het onlogisch en onduidelijk maken voor iemand die de website niet kan zien.

Het gaat bijvoorbeeld om het hamburger menu. Omdat dit een button is met een div wordt de button tweemaal genoemd. Het kan dan overkomen alsof er twee hamburger menu’s zijn. Dit is natuurlijk niet de bedoeling.

Een ander punt is een recept. Hier worden door de voice over eerst de bereidingstijd en de calorieën genoemd en dan pas wat het recept is. Dit is natuurlijk niet handig. Je wilt namelijk eerst weten wat het recept is en dan pas details.

Wat daarentegen erg goed werkte was de footer. Hierin waren headers aanwezig met daarin een list met links. Ik vond dit door de voice over zeer duidelijk uitgesproken. Aan de footerlinks zou ik daarom niks meer hoeven veranderen.

Er was ook een dilemma wat ik tegenkwam op de detailpagina van Chocomel. Hierin stond de oude prijs doorgestreept. In mijn W3C controle kon het html-element ‘strike’ niet gebruikt worden om de prijs door te strepen omdat dit verouderd was. Dus was mijn oplossing om dit in css te doen. Maar wat dit als neveneffect had was dat de voice over dit niet zag en gewoon die prijs uitsprak. Voor iemand met een screenreader is het dan onmogelijk om te achterhalen wat de huidige prijs is van de Chocomel. Een mogelijke oplossing kan zijn om voor de doorgestreepte ‘1.65’ de tekst ‘oude prijs:’ neer te zetten.


**Toegankelijkheid met ‘Tab’**

Met de tab door de detailpagina ging zeer goed. Hier was alles vanzelfsprekend in orde. Waar het probleem ontstond was bij de index pagina. Hier werkten niet alle klikbare elementen met de tab. Bij elke tab werd het element wel geselecteerd maar ontstond geen border waardoor je soms meerdere keren op tab moest drukken voor je weer een element zag. Hier heb ik meerdere oplossingen voor proberen te vinden met ‘:focus’, maar op enkele plaatsen op de homepagina is dit niet gelukt. Dit is vooral het geval bij de ‘bonuslijst’. Sommige elementen worden daar nu wel geselecteerd en anderen niet. Omdat ik niet over genoeg kennis beschikte kon ik hier geen veranderingen meer in aanbrengen.

Het is daarentegen wel gelukt om de footer toegankelijker te maken met de tab, door klikbare h5’jes te veranderen in <button>’s waardoor deze opeens wel interactief werden en bestuurbaar zijn nu.


## Eindgesprek (week 7/8)

Ik vond eigenlijk niks echt heel erg lastig in het maken van de Albert Heijn website. Sommige taken heb ik echter laten schieten door tijdgebrek. Denk daarbij aan het toevoegen van een artikel aan het winkelmandje. Dit zou met javascript en css nog veel tijd kosten en die had ik richting het einde niet meer. Wel heb ik aan de voorwaarden voldaan volgens mij en heb ik naar mijn idee een net eindresultaat weten neer te zetten.

Het was voor mij een goede oefening om alle principes van html, css en javascript nog een keer door te nemen, en intussen heb ik bepaalde onderwerpen beter geleerd of nieuw geleerd. 'position: absolute' en 'position: relative' Wist ik nog weinig vanaf, maar er is daar een wereld voor mij opengegaan en nu kan ik mij niet meer voorstellen dat ik het zonder heb gedaan. Ook grid was nieuw voor mij en ook dit bleek handig. Echter heb ik daar nog minder gebruik van gemaakt.

**Screenshot(s):**

**Homepage:**

<img src="media/eindresultaat_homepage.jpg" width="375px" alt="Eindversie homepage">

In de homepage zijn twee microinteracties uitgewerkt. De eerste bevindt zich bij de zoekbalk. Als je daarop drukt ontstaat het zoekvenster. De tweede microinteractie is bij de footer. Daar kan je meerdere dropdown menu's laten uitklappen waardoor meer opties tevoorschijn komen.

Om bij de tweede pagina te komen:
Ga naar de bonuslijst bovenaan de pagina en klik op de chocomel of gebruik deze link:
https://lukedv2000.github.io/Blok-Web/detailpagina_chocomel.html


**Detailpagina Chocomel:**

<img src="media/eindresultaat_detailpagina.jpg" width="375px" alt="Eindversie detailpagina chocomel">

In de chocomelpagina is één microinteractie uitgewerkt. Deze is te vinden bij de extra info. Hier zijn dropdowns te vinden met extra info over het product.

## Voortgang 3 (week 6)

### Stand van zaken

In deze voortgang had ik eigenlijk geen vragen. Het coderen had even op pauze gestaan door andere deadlines dus er is weinig voortang geweest met de week ervoor. Ik liep ook al ruim op schema dus er was ruimte om wat minder te doen.


### Agenda voor meeting

Er zijn van te voren geen duidelijke agendapunten besproken en er waren maar twee mensen aanwezig tijdens het voortgangsgesprek.


### Verslag van meeting

Ik heb met de studentassistenten nog even mijn werk doorgenomen. Die zeiden dat ik erg goed op weg was en waarschijnlijk wel al op het niveau zat voor een voldoende. Dit gaf mij vertrouwen en ik kon daardoor gemotiveerd verder met de website.


## Voortgang 2 (week 5)

### Stand van zaken

Het coderen gaat mij nog steeds goed af. Ik vind het ook leuk om te doen en dat maakt het dan ook makkelijker om er tijd in te stoppen. Want tijd kost het namelijk wel. Ik merk wel dat er wat 'kinderziektes' beginnen op te treden in mijn website waar ik te weinig kennis voor heb om deze op te lossen. Maar door online research te doen kom ik er soms nog uit. Verder merk ik dat het responsive maken van mijn website misschien teveel tijd gaat kosten. Ik kwam er ook achter dat mijn website heel erg netjes is en dat ik waarschijnlijk zelfs al bijna voldoe aan de surface-opdracht. Ik twijfel eraan over te stappen maar mogelijk doe ik ze nog beide als ik daar tijd en zin voor heb.

**Screenshots:**

<img src="media/homepage_tweede_voortgang.jpg" width="375px" alt="Tweede versie van AH.nl Homepage">

Bij de tweede versie van de homepage is de homepage zo goed als af gemaakt. Er is verder gewerkt aan een deel van de website, er is een zoekmenu gemaakt en de footer is toegevoegd inclusief Javascript bij deze twee delen.

<img src="media/detailpagina_tweede_voortgang.jpg" width="375px" alt="Tweede versie van AH.nl Chocomel detailpagina">

Dit is de eerste versie van de chocomel detailpagina. De pagina is hier voor ongeveer 2/3 af. Alles wat er te zien is op de pagina is in mobiel formaat bijna af. Ik denk erover na om nog wat Javascript toe te passen waardoor er een leuk 'toevoegen aan mijn lijst'-functie bij komt. Maar allereerst moet de overige 1/3 van de pagina nog af en moeten alle 'copy paste' elementen van de hoofdpagina nog gekopieerd.

### Agenda voor meeting


| Luke                                                                        | Melvin    | Sam                 | Jimmy               |
| ---                                                                         | ---       | ---                 | ---                 |
| Bij svg: Waarom is ‘stroke’ geen css eigenschap?                            | n.v.t.    | Font die gedownload is gebruiken.         | De Apple website heeft vaak updates, hoe kan ik dat het beste aanpakken ?            |
| Bij het drukken op een button herlaad alles ipv de js-actie te ondernemen.  |           | Hoe kan ik dit menu uit laten klappen als ik erop klik?                    |  |
| Hoe klap ik een ‘uitklapmenu’ uit in animatie?                              |           | Moet je al een grid gebruiken op een small screen of alleen als er een breakpoint kom?  |                     |
| Form heeft geen action. Maar weet niet wat ik moet invullen.                |           | Wat betekent de :after en de :before precies? (weet het zelf wel ongeveer)                    |                     |


### Verslag van meeting

De meeting verliep erg goed. Ik heb vragen kunnen stellen over mijn problemen. Hierop heb ik duidelijk antwoord gekregen en ik kon ermee verder.


## Voortgang 1 (week 3)

### Stand van zaken

Coderen gaat mij altijd redelijk goed af. Ik begrijp de opdrachten goed en het gaat makkelijk.
Het moeilijke gedeelte zat hem in de tijd die ik er in moest steken. Het koste veel tijd en die had ik soms niet. Uiteindelijk ben ik tevreden met hoever ik ben gekomen al zie ik wel dat er nog veel moet gebeuren. Ook maak ik het soms te complex voor mezelf waardoor ik er niet helemaal uitkom en het veel tijd kost dit op te lossen. Als het dan lukt is het wel een hele
opluchting.

**Screenshot:**

<img src="media/versie_eerste_voortgang.png" width="375px" alt="Eerste versie html en css">

In deze eerste versie is de homepage van de AH.nl website nagemaakt in HTML en CSS. Javascript zal later nog worden gebruikt voor het hamburger-menu en voor de zoekbalk. De homepage is nu voor ongeveer 2/3 af en al redelijk 'pixelperfect' in mobiel design.

### Agenda voor meeting


| Luke                                    | Melvin    | Sam                 | Jimmy               |
| ---                                     | ---       | ---                 | ---                 |
| Margin: 0; werkt niet                   | n.v.t.    | Tips over de nav.   | blur nav            |
| Elementen na relative en absolute       |           |                     | Viewport animaties? |
| Font via telefoon anders dan op desktop |           |                     |                     |

### Verslag van meeting

Er waren weinig aanmerkingen door de studentassistenten. Ze waren zeer enthousiast over het feit dat we al een heel eind waren met onze website. Ook werden mijn vragen besproken en heb ik goede aanknopingspunten gekregen om verder te werken.


## Breakdownschets (week 1)

**Gehele Breakdownschets:**

<img src="media/Breakdownschets_AH.jpg" width="375px" alt="Breakdownschets AH">

**Details Breakdownschets:**

<img src="media/Breakdown_detail.jpg" width="375px" alt="Breakdownschets details">

**Recepten Breakdownschets:**

<img src="media/Breakdown_recepten.jpg" width="375px" alt="Breakdownschets van Recepten section">



## Intake (week 1)

**Je startniveau:** Rode Piste

**Je focus:** Responsive maken

**Je opdracht:** [AH.nl](https://www.ah.nl/)

**Screenshot(s) van de eerste pagina (small screen):**

<img src="media/Homepagina_AH.jpg" width="375px" alt="Hoofdpagina Albert Heijn">

**Screenshot(s) van de tweede pagina (small screen):**

<img src="media/Detailpagina_Chocomel.jpg" width="375px" alt="AH detailpagina Chocomel">
