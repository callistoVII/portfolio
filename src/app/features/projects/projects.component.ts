import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './projects.component.css',
  template: `
    <section class="projects-page">
      <!-- PAGE HEADER -->
      <header class="projects-header">
        <h1>PROJECTS</h1>
      </header>

      <!-- CURRENT & PAST PROJECTS -->
      <div class="projects-section card">
        <h2>Projects</h2>

        <div class="carousel carousel--interactive">
          <div #arrowLeft class="carousel__arrow carousel__arrow--left">‹</div>

          <div #interactiveTrack class="carousel__track">
            <div class="carousel__item" (click)="openModal(0)">
              <img
                src="../../../assets/logo-evolution.png"
                alt="evolution logo"
              />
              <span class="expand-icon">⤢</span>
              <span class="carousel__caption"
                >Design Evolution of my Logo, final stages.</span
              >
            </div>

            <div class="carousel__item" (click)="openModal(1)">
              <img
                src="../../../assets/vector-husky-plane.png"
                alt="Vector Model - Husky Prop Plane"
              />
              <span class="expand-icon">⤢</span>
              <span class="carousel__caption"
                >Vector Model - Husky Plane, made with Illustrator.</span
              >
            </div>

            <div class="carousel__item" (click)="openModal(2)">
              <img
                src="../../../assets/rpg-legend.png"
                alt="RPG Character Builder Hero"
              />
              <span class="expand-icon">⤢</span>
              <span class="carousel__caption">RPG Character Builder Hero.</span>
            </div>

            <div class="carousel__item" (click)="openModal(3)">
              <img
                src="../../../assets/rpg-choices.png"
                alt="RPG Builder Choice Cards"
              />
              <span class="expand-icon">⤢</span>
              <span class="carousel__caption">RPG Builder Choice Cards.</span>
            </div>

            <div class="carousel__item" (click)="openModal(4)">
              <img
                src="../../../assets/hr-knowledge-quote.png"
                alt="typography quote by Henry Rollins"
              />
              <span class="expand-icon">⤢</span>
              <span class="carousel__caption">Typography Bumper Sticker</span>
            </div>

            <div class="carousel__item" (click)="openModal(5)">
              <img
                src="../../../assets/painted-still-life.png"
                alt="still life painting - acrylic"
              />
              <span class="expand-icon">⤢</span>
              <span class="carousel__caption"
                >Traditional Painting Commission</span
              >
            </div>
          </div>

          <div #arrowRight class="carousel__arrow carousel__arrow--right">
            ›
          </div>
        </div>

        <div #dotsContainer class="carousel__dots">
          <span class="dot active">🜃</span>
          <span class="dot">✦</span>
          <span class="dot">✦</span>
          <span class="dot">✦</span>
          <span class="dot">✦</span>
          <span class="dot">✦</span>
        </div>
      </div>

      <!-- FUTURE PROJECTS -->
      <div class="projects-section card">
        <h2>Future Projects</h2>

        <div class="carousel carousel--interactive">
          <div #futureArrowLeft class="carousel__arrow carousel__arrow--left">
            ‹
          </div>

          <div #futureTrack class="carousel__track">
            <div class="carousel__item" (click)="openFutureModal(0)">
              <img
                src="../../../assets/future-commission.png"
                alt="Future Project"
              />
              <span class="expand-icon">⤢</span>
              <span class="carousel__caption">
                "I don't know where I am going from here, but I promise it won't
                be boring" – David Bowie
              </span>
            </div>

            <div class="carousel__item" (click)="openFutureModal(1)">
              <img
                src="../../../assets/geode-future.png"
                alt="Future Project"
              />
              <span class="expand-icon">⤢</span>
              <span class="carousel__caption">
                "I don't know where I am going from here, but I promise it won't
                be boring" – David Bowie
              </span>
            </div>
          </div>

          <div #futureArrowRight class="carousel__arrow carousel__arrow--right">
            ›
          </div>
        </div>

        <div #futureDots class="carousel__dots">
          <span class="dot active">🜃</span>
          <span class="dot">✦</span>
        </div>
      </div>

      <!-- MAIN MODAL -->
      <div class="image-modal" *ngIf="modalOpen" (click)="closeModal($event)">
        <div class="modal-content">
          <img [src]="modalImages[currentIndex]" class="modal-image" />
          <div class="modal-arrow left" (click)="prev($event)">‹</div>
          <div class="modal-arrow right" (click)="next($event)">›</div>
        </div>
      </div>

      <!-- FUTURE MODAL -->
      <div
        class="image-modal future-image-modal"
        *ngIf="futureModalOpen"
        (click)="closeFutureModal($event)"
      >
        <div class="modal-content">
          <img [src]="futureImages[futureIndex]" class="modal-image" />
          <div class="modal-arrow left" (click)="prevFuture($event)">‹</div>
          <div class="modal-arrow right" (click)="nextFuture($event)">›</div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent implements AfterViewInit {
  /* MAIN CAROUSEL */
  @ViewChild('interactiveTrack') trackRef!: ElementRef<HTMLDivElement>;
  @ViewChild('arrowLeft') arrowLeftRef!: ElementRef<HTMLDivElement>;
  @ViewChild('arrowRight') arrowRightRef!: ElementRef<HTMLDivElement>;
  @ViewChild('dotsContainer') dotsContainerRef!: ElementRef<HTMLDivElement>;

  /* FUTURE CAROUSEL */
  @ViewChild('futureTrack') futureTrackRef!: ElementRef<HTMLDivElement>;
  @ViewChild('futureArrowLeft') futureArrowLeftRef!: ElementRef<HTMLDivElement>;
  @ViewChild('futureArrowRight')
  futureArrowRightRef!: ElementRef<HTMLDivElement>;
  @ViewChild('futureDots') futureDotsRef!: ElementRef<HTMLDivElement>;

  /* MAIN MODAL */
  modalOpen = false;
  currentIndex = 0;

  modalImages = [
    '../../../assets/logo-evolution.png',
    '../../../assets/vector-husky-plane.png',
    '../../../assets/rpg-legend.png',
    '../../../assets/rpg-choices.png',
    '../../../assets/hr-knowledge-quote.png',
    '../../../assets/painted-still-life.png',
  ];

  /* FUTURE MODAL */
  futureModalOpen = false;
  futureIndex = 0;

  futureImages = [
    '../../../assets/future-commission.png',
    '../../../assets/geode-future.png',
  ];

  touchStartX = 0;

  /* -----------------------------
     MAIN MODAL
  ----------------------------- */
  openModal(index: number) {
    this.currentIndex = index;
    this.modalOpen = true;
    window.addEventListener('keydown', this.handleEsc);

    setTimeout(() => {
      const modal = document.querySelector(
        '.image-modal',
      ) as HTMLElement | null;
      if (!modal) return;

      modal.addEventListener('touchstart', (e: any) => {
        this.touchStartX = e.touches[0].clientX;
      });

      modal.addEventListener('touchend', (e: any) => {
        const diff = e.changedTouches[0].clientX - this.touchStartX;
        if (diff > 50) this.prev();
        if (diff < -50) this.next();
      });
    });
  }

  closeModal(event?: Event) {
    if (
      event &&
      (event.target as HTMLElement).classList.contains('image-modal')
    ) {
      this.modalOpen = false;
      window.removeEventListener('keydown', this.handleEsc);
    }
  }

  handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.modalOpen = false;
      window.removeEventListener('keydown', this.handleEsc);
    }
  };

  next(event?: Event) {
    event?.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.modalImages.length;
  }

  prev(event?: Event) {
    event?.stopPropagation();
    this.currentIndex =
      (this.currentIndex - 1 + this.modalImages.length) %
      this.modalImages.length;
  }

  /* -----------------------------
     FUTURE MODAL
  ----------------------------- */
  openFutureModal(index: number) {
    this.futureIndex = index;
    this.futureModalOpen = true;

    window.addEventListener('keydown', this.handleFutureEsc);

    setTimeout(() => {
      const modal = document.querySelector(
        '.future-image-modal',
      ) as HTMLElement | null;
      if (!modal) return;

      modal.addEventListener('touchstart', (e: any) => {
        this.touchStartX = e.touches[0].clientX;
      });

      modal.addEventListener('touchend', (e: any) => {
        const diff = e.changedTouches[0].clientX - this.touchStartX;
        if (diff > 50) this.prevFuture();
        if (diff < -50) this.nextFuture();
      });
    });
  }

  closeFutureModal(event?: Event) {
    if (
      event &&
      (event.target as HTMLElement).classList.contains('future-image-modal')
    ) {
      this.futureModalOpen = false;
      window.removeEventListener('keydown', this.handleFutureEsc);
    }
  }

  handleFutureEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.futureModalOpen = false;
      window.removeEventListener('keydown', this.handleFutureEsc);
    }
  };

  nextFuture(event?: Event) {
    event?.stopPropagation();
    this.futureIndex = (this.futureIndex + 1) % this.futureImages.length;
  }

  prevFuture(event?: Event) {
    event?.stopPropagation();
    this.futureIndex =
      (this.futureIndex - 1 + this.futureImages.length) %
      this.futureImages.length;
  }

  /* -----------------------------
     CAROUSELS
  ----------------------------- */
  ngAfterViewInit() {
    /* MAIN CAROUSEL */
    const track = this.trackRef.nativeElement;
    const btnLeft = this.arrowLeftRef.nativeElement;
    const btnRight = this.arrowRightRef.nativeElement;
    const dots = Array.from(
      this.dotsContainerRef.nativeElement.querySelectorAll('.dot'),
    );

    btnLeft.addEventListener('click', () => {
      track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
    });

    const updateDots = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.textContent = i === index ? '🜃' : '✦';
      });
    };

    track.addEventListener('scroll', updateDots);

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
      });
    });

    /* FUTURE CAROUSEL */
    const fTrack = this.futureTrackRef.nativeElement;
    const fLeft = this.futureArrowLeftRef.nativeElement;
    const fRight = this.futureArrowRightRef.nativeElement;
    const fDots = Array.from(
      this.futureDotsRef.nativeElement.querySelectorAll('.dot'),
    );

    fLeft.addEventListener('click', () => {
      fTrack.scrollBy({ left: -fTrack.clientWidth, behavior: 'smooth' });
    });

    fRight.addEventListener('click', () => {
      fTrack.scrollBy({ left: fTrack.clientWidth, behavior: 'smooth' });
    });

    const updateFDots = () => {
      const index = Math.round(fTrack.scrollLeft / fTrack.clientWidth);
      fDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.textContent = i === index ? '🜃' : '✦';
      });
    };

    fTrack.addEventListener('scroll', updateFDots);

    fDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        fTrack.scrollTo({ left: i * fTrack.clientWidth, behavior: 'smooth' });
      });
    });
  }
}
