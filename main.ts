import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// Firebase client initialization. Authentication flows are added in the next milestone.
const firebaseApp = initializeApp(environment.firebase);
export const firebaseAuth = getAuth(firebaseApp);

bootstrapApplication(AppComponent, {
  providers: [provideRouter([])]
}).catch(error => console.error(error));
