import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, importProvidersFrom } from '@angular/core'; // ¡Importa importProvidersFrom!
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http'; // HttpClient es necesario si CustomTranslateLoader lo usa
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; // Importa TranslateModule

import { routes } from './app.routes';
import { CustomTranslateLoader } from './translate.loader';

// Importante: Tu CustomTranslateLoader necesita recibir HttpClient si va a hacer solicitudes HTTP
// Asegúrate de que tu CustomTranslateLoader tenga un constructor que acepte HttpClient.
// Ejemplo de CustomTranslateLoader (si aún no lo tienes así):
// import { TranslateLoader } from '@ngx-translate/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs'; // Necesitas rxjs para un Observable

// export class CustomTranslateLoader implements TranslateLoader {
//   constructor(private http: HttpClient) {} // Inyecta HttpClient si lo necesitas

//   getTranslation(lang: string): Observable<any> {
//     // Aquí es donde cargas tus traducciones. Por ejemplo, desde un archivo JSON:
//     return this.http.get(`./assets/i18n/${lang}.json`);
//     // O puedes devolver un objeto de traducción directamente si no usas HTTP:
//     // return of({ /* tus traducciones aquí */ });
//   }
// }


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(), // ¡Es crucial que HttpClient esté provisto antes de que TranslateModule lo use!

    // === MODIFICACIÓN CLAVE AQUÍ ===
    // Usa importProvidersFrom para importar TranslateModule.forRoot()
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: CustomTranslateLoader,
          // Si CustomTranslateLoader necesita HttpClient en su constructor, especifica deps
          deps: [HttpClient] // Asegúrate de que HttpClient esté disponible para tu cargador
        }
      })
    )
    // Fin de la modificación
  ]
};
