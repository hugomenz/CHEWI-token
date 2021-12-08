import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-get-chewis',
  templateUrl: './get-chewis.component.html',
  styleUrls: ['./get-chewis.component.css']
})
export class GetChewisComponent implements OnInit {

  cartera: string = 'addr_test1qpexztax4qpyhx0zeat5hug63m6jc8zdf28xvfrsrzn5w2xfnm9xf7z856qsq27gafsq8g6407tf9eeq63hgh02jkdys0pnhe3'
  faClipboard = faClipboard;

  constructor(private clipboard: Clipboard,  // Servicio para usar el portapapeles
              private snackBar: MatSnackBar){}  // Servicio para usar snackbars) { }

  ngOnInit(): void {
  }
  copyToClipboard(): void {
    // Se copia el texto del input al portapapeles
    this.clipboard.copy(this.cartera);

    // Se muestra un snackbar durante 2 segundos en la parte inferior
    this.snackBar.open(`¡ID Wallet: ${this.cartera} copied to clipboard`, undefined, {
      duration: 5000,
      panelClass: 'snackbar'
    });

}
}
