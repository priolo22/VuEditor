<template>
  <card-full-scroll-cmp>

      <template slot="head">

        <v-stepper :value="step">
          <v-stepper-header>
            <v-stepper-step color="secondary" :complete="step>1" step="1">MODIFICA DATI ANAGRAFICI</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step color="secondary" :complete="step>2" step="2">CONFERMA</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step color="secondary" :complete="step>3" step="3">CONSENSI PRIVACY</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step color="secondary" :complete="step>4" step="4">PAGAMENTO</v-stepper-step>
          </v-stepper-header>
        </v-stepper>

      </template>

      <template slot="body">

        <v-stepper :value="step" class="fill-height elevation-0">
          <v-stepper-items>

            <v-stepper-content step="1">
              <v-layout row>
                <v-flex md3>
                  <v-layout column align-center>
                    <v-flex mt-4>
                      <v-icon color="secondary" size="70">fingerprint</v-icon>
                    </v-flex>
                    <v-flex mx-5 mt-3>
                      <div class="title text-md-center font-weight-black">Prendere visione dei propri dati ed eventualmente modificarli</div>
                    </v-flex>
                  </v-layout>                
                </v-flex>
                <v-flex md9><user-data-cmp  hide-actions hide-title/></v-flex>
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-layout row>

                <v-flex md3>
                  <v-layout column align-center>
                    <v-flex mt-4>
                      <v-icon color="secondary" size="70">verified_user</v-icon>
                      <!--v-img width="50"
                        src="https://uploads.codesandbox.io/uploads/user/4396eff8-8544-44a0-b5ee-c8b373eb3ca6/7CXf-scudo3.png"
                    /-->
                    </v-flex>
                    <v-flex mx-5 mt-3>
                      <div class="title text-md-center font-weight-black">Ho preso visione delle modifiche o della conferma dei miei dati personali e confermo quanto indicato</div>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex md9><user-data-cmp hide-actions hide-title/></v-flex>

              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-layout row>

                <v-flex md3 mr-4>
                  <v-layout column>
                    <v-flex>
                      <div class="title">LIBERATORIA PER LA PUBBLICAZIONE DELLE PROPRIE IMMAGINI E VIDEO</div>
                      <div class="mt-3 caption text-md-justify">Il Codice della privacy disciplina i casi in cui la gestione dei dati personali è autorizzata, quali sono le misure di sicurezza ed i codici deontologici da osservare. Il Regolamento disciplina altresì i tipi di dati trattabili e le operazioni eseguibili per ciascuna delle attività previste ed assicura a tutti i soggetti che concedono informazioni e dati personali opportune garanzie in ordine al trattamento degli stessi da parte degli operatori dell'Amministrazione Pubblica, di Enti privati e di altri soggetti che per loro li trattino.<br/> Il codice, essendo un testo unico, abolisce l'impianto legislativo precedente (fondamentalmente la 675/96).</div>
                      <v-radio-group row value="a">
                        <v-radio label="CONCEDO" value="a"></v-radio>
                        <v-radio label="NON CONCEDO" value="b"></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex>
                      <div class="title">MATERIALE PUBBLICITARIO</div>
                      <div class="mt-3 caption text-md-justify">Il Codice della privacy disciplina i casi in cui la gestione dei dati personali è autorizzata, quali sono le misure di sicurezza ed i codici deontologici da osservare. Il Regolamento disciplina altresì i tipi di dati trattabili e le operazioni eseguibili per ciascuna delle attività previste ed assicura a tutti i soggetti che concedono informazioni e dati personali opportune garanzie in ordine al trattamento degli stessi da parte degli operatori dell'Amministrazione Pubblica, di Enti privati e di altri soggetti che per loro li trattino.</div>
                      <v-radio-group row value="a">
                        <v-radio label="CONCEDO" value="a"></v-radio>
                        <v-radio label="NON CONCEDO" value="b"></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex>
                      <div class="title">PROFILAZIONE</div>
                      <div class="mt-3 caption text-md-justify">Il Codice della privacy disciplina i casi in cui la gestione dei dati personali è autorizzata, quali sono le misure di sicurezza ed i codici deontologici da osservare. Il Regolamento disciplina altresì i tipi di dati trattabili e le operazioni eseguibili per ciascuna delle attività previste ed assicura a tutti i soggetti che concedono informazioni e dati personali opportune garanzie in ordine al trattamento degli stessi da parte degli operatori dell'Amministrazione Pubblica, di Enti privati e di altri soggetti che per loro li trattino.<br/> Il codice, essendo un testo unico, abolisce l'impianto legislativo precedente (fondamentalmente la 675/96).<BR/>dati idonei a rivelare lo stato di salute e la vita sessuale, trattati a fini di procreazione assistita, prestazione di servizi sanitari per via telematica relativi a banche di dati o alla fornitura di beni, indagini epidemiologiche, rilevazione di malattie mentali, infettive e diffusive, sieropositività, trapianto di organi e tessuti e monitoraggio della spesa sanitaria;</div>
                      <v-radio-group row value="a">
                        <v-radio label="CONCEDO" value="a"></v-radio>
                        <v-radio label="NON CONCEDO" value="b"></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex md3 mx-4>
                  <v-layout column>
                    <v-flex>
                      <div class="title">FISAR SERVIZI SRL</div>
                      <div class="mt-3 caption text-md-justify">Il Codice della privacy disciplina i casi in cui la gestione dei dati personali è autorizzata, quali sono le misure di sicurezza ed i codici deontologici da osservare. Il Regolamento disciplina altresì i tipi di dati trattabili e le operazioni eseguibili per ciascuna delle attività previste ed assicura a tutti i soggetti che concedono informazioni e dati personali opportune garanzie in ordine al trattamento degli stessi da parte degli operatori dell'Amministrazione Pubblica, di Enti privati e di altri soggetti che per loro li trattino.<br/> Il codice, essendo un testo unico, abolisce l'impianto legislativo precedente (fondamentalmente la 675/96).<BR/>dati idonei a rivelare lo stato di salute e la vita sessuale, trattati a fini di procreazione assistita, prestazione di servizi sanitari per via telematica relativi a banche di dati o alla fornitura di beni, indagini epidemiologiche, rilevazione di malattie mentali, infettive e diffusive, sieropositività, trapianto di organi e tessuti e monitoraggio della spesa sanitaria;</div>
                      <v-radio-group row value="a">
                        <v-radio label="CONCEDO" value="a"></v-radio>
                        <v-radio label="NON CONCEDO" value="b"></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex>
                      <div class="title">IMMAGINI NEGLI EVENTI</div>
                      <div class="mt-3 caption text-md-justify">Il Codice della privacy disciplina i casi in cui la gestione dei dati personali è autorizzata, quali sono le misure di sicurezza ed i codici deontologici da osservare. Il Regolamento disciplina altresì i tipi di dati trattabili e le operazioni eseguibili per ciascuna delle attività previste ed assicura a tutti i soggetti che concedono informazioni e dati personali opportune garanzie in ordine al trattamento degli stessi da parte degli operatori dell'Amministrazione Pubblica, di Enti privati e di altri soggetti che per loro li trattino.<br/> Il codice, essendo un testo unico, abolisce l'impianto legislativo precedente (fondamentalmente la 675/96).<BR/>dati idonei a rivelare lo stato di salute e la vita sessuale, trattati a fini di procreazione assistita, prestazione di servizi sanitari per via telematica relativi a banche di dati o alla fornitura di beni, indagini epidemiologiche, rilevazione di malattie mentali, infettive e diffusive, sieropositività, trapianto di organi e tessuti e monitoraggio della spesa sanitaria;<BR/>dati idonei a rivelare lo stato di salute e la vita sessuale, trattati a fini di procreazione assistita, prestazione di servizi sanitari per via telematica relativi a banche di dati o alla fornitura di beni, indagini epidemiologiche, rilevazione di malattie mentali, infettive e diffusive, sieropositività, trapianto di organi e tessuti e monitoraggio della spesa sanitaria;</div>
                      <v-radio-group row value="a">
                        <v-radio label="CONCEDO" value="a"></v-radio>
                        <v-radio label="NON CONCEDO" value="b"></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex md6 ml-4>
                  <v-layout column>

                    <v-flex><v-layout row align-center justify-start>
                      <v-flex shrink mr-2>
                        <v-icon color="secondary" size="40">verified_user</v-icon>
                      </v-flex>
                      <v-flex shrink>
                        <div class="headline font-weight-black">INFORMATIVA COMPLETA</div>
                      </v-flex>
                      <v-spacer/>
                      <v-flex shrink >
                        <v-btn flat>
                          <span class="mr-2">SCARICA IL PDF</span>
                          <v-icon>cloud_download</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout></v-flex>

                    <v-flex>
                      <div class="text-md-justify">Il Codice della privacy disciplina i casi in cui la gestione dei dati personali è autorizzata, quali sono le misure di sicurezza ed i codici deontologici da osservare. Il Regolamento disciplina altresì i tipi di dati trattabili e le operazioni eseguibili per ciascuna delle attività previste ed assicura a tutti i soggetti che concedono informazioni e dati personali opportune garanzie in ordine al trattamento degli stessi da parte degli operatori dell'Amministrazione Pubblica, di Enti privati e di altri soggetti che per loro li trattino.<br/> Il codice, essendo un testo unico, abolisce l'impianto legislativo precedente (fondamentalmente la 675/96).<br/>La legge sulla privacy fino al 1996 non si limitava a disciplinare le banche di dati, intese - ai sensi dell'art. 1 comma 2 lett. a – come «qualsiasi complesso di dati personali, ripartito in una o più unità dislocate in uno o più siti, organizzato secondo una pluralità di criteri determinati tali da facilitarne il trattamento», ma regolava anche operazioni singole compiute su dati personali, intesi come «qualunque informazione relativa a persona fisica, persona giuridica, ente od associazione, identificati o identificabili, anche indirettamente, mediante riferimento a qualsiasi altra informazione, ivi compreso un numero di identificazione personale».<br/> In base alla normativa di cui agli artt. 20, comma 2, e 21, comma 2, del d.lg. 30 giugno 2003, n. 196, i sistemi informativi ed i programmi informatici dovranno essere predisposti in modo da assicurare che i dati sensibili (o personali) siano utilizzati esclusivamente nella misura necessaria per il raggiungimento delle specifiche finalità che il titolare si prefigge (espressamente elencate nel d.lg. n. 196/2003 artt. 59, 60, 62-73, 86, 95, 98 e 112).<br/> In caso contrario sarà necessario utilizzare dati in forma anonima o adottare modalità che permettano di identificare l'interessato solo in stretto caso di necessità.<br/>Con riguardo alle regole valide per tutti i trattamenti contenute nel Codice della privacy, l'art. 11 del citato provvedimento stabilisce innanzitutto che i dati personali oggetto di trattamento sono:<br/>trattati in modo lecito e secondo correttezza;<br/>raccolti e registrati per scopi determinati, espliciti e legittimi, ed utilizzati in altre operazioni del trattamento in termini compatibili con tali scopi;<br/>esatti e, se necessario, aggiornati;<br/>pertinenti, completi e non eccedenti rispetto alle finalità per le quali sono raccolti o successivamente trattati;<br/>conservati in una forma che consenta l'identificazione dell'interessato per un periodo di tempo non superiore a quello necessario agli scopi per i quali essi sono stati raccolti o successivamente trattati.<br/>Il medesimo articolo 11 introduce inoltre il divieto di utilizzare, in qualsiasi modo, i dati personali trattati in violazione della disciplina rilevante in materia di trattamento dei dati personali.<br/>Il Titolare, unitamente al Responsabile dei sistemi informativi, deve quindi preventivamente adottare procedure organizzative, informatiche e materiali che permettano al singolo incaricato l'accesso nel database ai soli dati necessari alle sue specifiche mansioni. Tale accesso è consentito, oltre al titolare ed al responsabile, soltanto ad incaricati dotati di credenziali di autenticazione che consentano il superamento di una procedura di convalida relativa ad uno specifico trattamento o ad un insieme di trattamenti.<br/>Il Codice della privacy stabilisce che ogni Titolare debba eseguire vari adempimenti che consentano al Garante e ai terzi di conoscere esattamente se, perché e come una determinata azienda o ente gestisca dati sensibili. Il Garante, per non sovraccaricare di adempimenti i settori nei quali la gestione di dati sensibili è obbligatoria per legge (ad esempio i dati dei lavoratori dipendenti), emana delle Autorizzazioni Generali che ogni anno sono rinnovate. Tali provvedimenti sollevano il titolare del trattamento dall'obbligo di notificazione all'Autorità Garante, ferma restando l'autorizzazione dietro fornitura di una informativa sul trattamento, da parte dell'interessato.<br/>I dati personali così individuati sono trattati previa verifica della loro pertinenza, completezza e indispensabilità rispetto alle finalità perseguite nei singoli casi, specie nel caso in cui la raccolta non avvenga presso l'interessato. Le operazioni di interconnessione, raffronto, comunicazione e diffusione sono ammesse soltanto se indispensabili allo svolgimento degli obblighi o compiti di volta in volta indicati, per il perseguimento delle rilevanti finalità di interesse pubblico specificate e nel rispetto delle disposizioni rilevanti in materia di protezione dei dati personali, nonché degli altri limiti stabiliti dalla legge e dai regolamenti.<br/>Gli adempimenti principali che consentano al Garante e ai terzi di conoscere esattamente se, perché e come una determinata azienda o ente gestisca dati sensibili sono:<br/>la notificazione all'Autorità Garante;<br/>l'informativa all'interessato;<br/>la raccolta dei consensi;<br/>la suddivisione dei compiti con l'attribuzione delle relative responsabilità all'interno dell'organizzazione del Titolare;<br/>l'adozione delle misure di sicurezza. Notificazione all'Autorità GaranteLa notificazione (artt. 37-38 Codice) consiste in una comunicazione ufficiale che il Titolare rivolge al Garante per la Protezione dei Dati Personali circa il/i trattamento/i svolto/i con la quale si comunica al Garante l'esistenza di un'attività di raccolta e di utilizzazione di dati personali. Secondo quanto stabilito dalla nuova disciplina, è tenuto alla Notificazione il Titolare che esegue il trattamento di:dati genetici, biometrici o dati che indicano la posizione geografica di persone od oggetti mediante una rete di comunicazione elettronica;<br/>dati idonei a rivelare lo stato di salute e la vita sessuale, trattati a fini di procreazione assistita, prestazione di servizi sanitari per via telematica relativi a banche di dati o alla fornitura di beni, indagini epidemiologiche, rilevazione di malattie mentali, infettive e diffusive, sieropositività, trapianto di organi e tessuti e monitoraggio della spesa sanitaria;</div>
                    </v-flex>

                    </v-layout>

                </v-flex>
                
              </v-layout>
            </v-stepper-content>

            <v-stepper-content step="4" class="fill-height">
              <v-layout row class="mt-4">

                <v-flex md3>
                  <v-layout column align-center>
                    <v-flex>
                      <v-icon color="secondary" size="70">credit_card</v-icon>
                    </v-flex>
                    <v-flex mx-5 mt-3>
                      <div class="title text-md-center font-weight-black">Pagamento della quota</div>
                    </v-flex>
                    <v-flex mt-3 class="secondary--text">
                      <span class="display-2">&euro;</span><span class="display-2 font-weight-black">70</span><span class="subheading">00</span>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex md9>
                  <v-layout column align-center>
                    <v-flex mt-2>
                      <v-img width="200"
                      src="https://uploads.codesandbox.io/uploads/user/4396eff8-8544-44a0-b5ee-c8b373eb3ca6/cosB-Paypal-logo-1.png"
                    />
                    </v-flex>
                    <v-flex mx-5 mt-3>
                      <div style="width:500px" class="title text-md-center font-weight-black">Selezionando PayPal come pagamento potrai pagare liberamente con la tua carta di credito anche se non hai il conto PayPal e non desideri attivarlo.</div>
                    </v-flex>
                    <v-flex mt-5>
                      <v-img width="300"
                      src="https://uploads.codesandbox.io/uploads/user/4396eff8-8544-44a0-b5ee-c8b373eb3ca6/2f-e-paypal-fake.png"
                    />
                    </v-flex>
                  </v-layout>
                </v-flex>

              </v-layout>
            </v-stepper-content>

          </v-stepper-items>
        </v-stepper>

      </template>

      <template slot="footer">
        <v-divider class="my-2"/>
        <v-layout row v-if="step==1">
          <v-spacer />
          <v-btn flat to="tessera">Annulla</v-btn>
          <v-btn color="primary" @click="step=2;"> Avanti </v-btn>
        </v-layout>        
        <v-layout row v-else-if="step==2">
          <v-spacer />
          <v-btn flat @click="step=1;"><v-icon left>keyboard_backspace</v-icon> Precedente </v-btn>
          <v-btn color="primary" @click="step=3;"> Avanti </v-btn>
        </v-layout>
        <v-layout row v-else-if="step==3">
          <v-spacer />
          <v-btn flat @click="step=2;"><v-icon left>keyboard_backspace</v-icon> Precedente </v-btn>
          <v-btn color="primary" @click="step=4;"> Avanti </v-btn>
        </v-layout>
        <v-layout row v-else-if="step==4">
          <v-spacer />
          <v-btn flat @click="step=3;"><v-icon left>keyboard_backspace</v-icon> Precedente </v-btn>
          <v-btn color="primary" @click="step=3;"> Pagamento </v-btn>
        </v-layout>
      </template>

    </card-full-scroll-cmp>
</template>
<style scoped></style>

<script>
import UserDataCmp from "../socio-cards/user-data-cmp";
import CardFullScrollCmp from "@/components/CardFullScrollCmp";

export default {
  components: {
    UserDataCmp,
    CardFullScrollCmp,
  },
  name: "socio-rinnovo-pag",
  data() {
    return {
      step: 1,
    };
  },
  methods:{
    // onChangeStep() {
    //   alert("ciccio");
    // },
  }

};
</script>
