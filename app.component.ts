import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="shell">
      <header><span class="mark">S</span><span>StagesOfLife</span><span class="version">2.0</span></header>
      <section class="hero">
        <p class="eyebrow">YOUR LIFE. YOUR JOURNEY.</p>
        <h1>Every stage has a story.</h1>
        <p class="intro">A fresh space to learn, grow, create, and plan what comes next.</p>
        <div class="stages">
          @for (stage of stages; track stage.id) {
            <article><span>{{ stage.symbol }}</span><h2>{{ stage.label }}</h2><p>{{ stage.description }}</p></article>
          }
        </div>
        <p class="note">Your personalized dashboard is the next build milestone.</p>
      </section>
    </main>
  `,
  styles: [`
    :host { display:block; min-height:100vh; color:#eef2ff; }
    .shell { min-height:100vh; padding:28px clamp(20px,5vw,72px); background:radial-gradient(ellipse at 50% 0%,#26366b 0%,#11172e 45%,#090d1b 100%); }
    header { display:flex; align-items:center; gap:12px; font-weight:750; letter-spacing:.02em; }
    .mark { display:grid; place-items:center; width:38px; height:38px; border-radius:12px; background:#7c6cff; }
    .version { color:#a5b4fc; font-size:12px; border:1px solid #53608a; padding:4px 8px; border-radius:20px; }
    .hero { max-width:1100px; margin:10vh auto 0; text-align:center; }
    .eyebrow { color:#a5b4fc; letter-spacing:.22em; font-size:12px; font-weight:700; }
    h1 { font-size:clamp(42px,7vw,76px); line-height:1.02; margin:18px 0; }
    .intro { color:#b9c2dd; font-size:18px; max-width:620px; margin:0 auto 42px; }
    .stages { display:grid; grid-template-columns:repeat(auto-fit,minmax(145px,1fr)); gap:14px; text-align:left; }
    article { padding:22px; min-height:150px; border:1px solid #354064; border-radius:18px; background:#ffffff0b; }
    article span { font-size:27px; } article h2 { font-size:17px; margin:16px 0 6px; }
    article p,.note { color:#aab5d2; font-size:13px; line-height:1.5; }
    .note { margin-top:30px; }
  `]
})
export class AppComponent {
  readonly stages = [
    {id:'kid',symbol:'🌱',label:'Kid',description:'Safe discovery and playful learning.'},
    {id:'teen',symbol:'✨',label:'Teen',description:'Creativity, confidence, and independence.'},
    {id:'student',symbol:'🎓',label:'Student',description:'Learning, careers, and future planning.'},
    {id:'adult',symbol:'🌎',label:'Adult',description:'Life balance and personal goals.'},
    {id:'business',symbol:'🚀',label:'Business',description:'Ideas, operations, and growth.'},
    {id:'veteran',symbol:'🛡️',label:'Veteran',description:'Community, transition, and mentorship.'}
  ];
}
