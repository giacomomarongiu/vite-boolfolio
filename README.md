 # Laravel Boolfolio - API
Continuiamo a lavorare sul codice dei giorni scorsi, ma in una nuova repo, anzi due .
L’esercizio di oggi è suddiviso in milestone ed è importante che ne seguiate l’ordine.
1) Milestone 1
nome repo 1: laravel-api
Aggiungiamo al nostro progetto Laravel una nuovo Api/ProjectController. Questo controller risponderà a delle richieste via API e si occuperà di restituire la lista dei progetti presenti nel database in formato json.
2) Milestone 2
Testiamo la chiamata API tramite Postman e assicuriamoci di ricevere i dati correttamente.
3) Milestone 3
nome repo 2: vite-boolfolio
Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios. Colleghiamo questo progetto ad una repo separata.
4) Milestone 4
Nel componente principale della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel (milestone 1) e recuperiamo tutti i progetti dal nostro back-end. Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.
5) Milestone 5
Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto.
Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.
# Bonus:
Gestire la paginazione dei risultati



## DAY 2
Implementate quanto visto a lezione:
1) installazione di vue router
2) creazione router.js
3) importazione del file router.js in main.js
4) utilizzo del plugin router sull'istanza vue creata
5) realizzazione pagine home, projects, about, contacts


### Structure Brainstorming
 1) Minimal home - 100% Viewport with links, name, short presentation, my social-media
 2) Portfolio/Blog - With all my projects
 3) Contacts page - with a form 
 4) About me - Curriculum 