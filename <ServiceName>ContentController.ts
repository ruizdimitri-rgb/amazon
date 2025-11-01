import { ContentController } from '../types/ContentController';

export class AmazonContentController implements ContentController {
  public play(): void {
    const playButtonContainer = document.querySelector(
      'music-button[icon-name="play"]'
    );
    const playButton = playButtonContainer?.shadowRoot?.querySelector('button');

    playButton?.click();
  }

  // ...other methods
}
