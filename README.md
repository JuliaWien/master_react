Sehr geehrter Herr Hörauf,

ich hatte ziemliche Schwierigkeiten bei der Fertigstellung des Mastermind-Programms und musste React-Komponenten immer wieder umdesignen, bis ich die Funktionsweise verstanden hatte bzw. eine gefunden hatte, die zum Spiel passte. Das Abgeben eines Repositories mit allen einzelnen Stufen hätte den kompletten Rückbau des Programms mit sehr vielen Änderungen in den Dateien bedeutet, zudem ich letztlich nicht vollständig Ihre Abfolge verwendet habe. Im Folgenden will ich erläutern, wie die einzelnen Teilaufgaben auf die Dateien verteilt sind:


## a) click_dummy, b) snapshot-test und c) Pin
Pin wurde als eine Komponente 'MyPin' in der Datei src/Components/Pin.js erstellt. 
Der Snapshot-Test wird in der App.test.js durchgeführt
Ein Click-Test zum Pin findet sich in src/Components/Pin.spec.js

Der Pin (d.h. MyPin) ist die zentrale Komponente im Spiel. Jeder Pin verwaltet seinen Zustand eigenständig, reagiert auf Click-Events indem er die Farbe wechselt und seinen neuen Zustand über eine per props übergebene Callback-Funktion zurückliefert.


## d) - f) initialModel, createModel getAssumedColor
Diese Funktionalität wurde abweichend von Ihrem Vorgehen in der Vorlesung nach vielen Versuchen realisiert. Das Model wurde direkt als this.state in einer App-Class realisiert. Dieses state enthält alle Daten des Models und hierüber wird auch das Spiel gesteuert. 

Die Verwaltung von getAssumedColor wurde in einer eigenen Komponente PinForm realisiert. Diese Komponente verwaltet die Farbpins, ist leicht um weitere Pins erweiterbar und ruft nach Klicken auf "GO!" eine übergebene Callback-Methode auf, die aus <App> stammt und an diese ein Feld mit allen Farbcodes liefert (vergleichbar mit assumedColor)


In der Klasse App sind zwei Callback-Methoden realisiert:
# onNewGuess; realisiert die Funktionen aus den Teilaufgaben g) h) und i)
Wird aufgerufen, wenn der Spieler einen neuen Farbcode per Click auf "GO!" einloggt. Dies entspricht dem getAssumedColor. Dann wird CheckCode oder CheckCodeScrumble aufgerufen und der Farbcode zusammen mit der Bewertung im this.state gespeichert. Dieses setState löst dann die Aktualisierung des Renderings der Gesamtpielbewertung sowie der Anzeige von Farbcodes und Bewertungen aus. Im einzelnen sind die folgenden Infos im this.state gespeichert:
* secretCode: Der geheime Pin-Code
* currentGuess: Der aktuelle Zug
* playerMoves: Alle Züge zusammen mit den zugehörenden Hints: Ein 12x8 Feld
* playerhints: Alle Bewertungen
* gamestatus: Der Gesamtspielzustand (Pending|Won|Lost)

# startNewGame; realisiert den Neustart aus Teilaufgabe i)
Hierüber wird das initialModel zurückgesetzt und das Spiel beginnt erneut


## Neustart aus Teilaufgabe i)
Der Neustart wird durch eine Komponente EndOfGame ermöglicht. Normalerweise zeigt diese Komponente in Abhängigkeit vom GameStatus nur den Text "Gut überlegen!" (PENDING) an. Bei WON oder LOST wird eine Erfolgsmeldung oder die Niederlage angezeigt und dann auch noch einen Button, der das Auslösen des Neustarts ermöglicht (-> startNewGame)


## Anzeige des Spielstands; Teilaufgabe h)
Dies wird in der Komponente ShowGuessesAndHints gelöst. Diese Komponente erhält das 12x8 Feld aus <App> mit Spielfarbcodes und Hints und stellt dies je nach Länge entsprechend dar. Die Aktualisierung der Darstellung erfolgt automatisch durch Verändern des Models in <App|playerMoves>


## Businesslogik
Die Businesslogik und die Tests befinden sich in MM_Logic/MasterMind.js bzw. .test.js. Ich hatte zum Realtest der Businesslogik über Ihre Anforderungen hinaus eine Javascript-Realisierung von Mastermind erstellt. Teile davon befinden sich noch in der .js Datei.



### Zum Spiel:
Die Farbcodes neben den Pinfarben bedeuten: weiß - richtige Farbe an richtiger Stelle, grau - richtige Farbe/falsche Position, schwarz - falsche Farbe; Zum 'Abkürzen' für Tests kann durch Drücken von F12 der SecretCode auf der Console abgelesen werden (nach einem ersten Versuch)