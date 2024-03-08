import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'; 
import { AudioRecordingService } from 'src/audio-recording-service';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [MatFormFieldModule, MatCardModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {

  isRecording = false;
  //audioURL: string | null = null;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private audioRecordingService: AudioRecordingService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.audioRecordingService.audioBlob$.subscribe(blob => {
      //this.audioURL = window.URL.createObjectURL(blob);
      //this.audioPlayer.nativeElement.src = this.audioURL;
      this.cd.detectChanges();
    });
  }
  
  startRecording() {
    this.isRecording = true;
    this.audioRecordingService.startRecording();
  }

  stopRecording() {
    this.isRecording = false;
    this.audioRecordingService.stopRecording();
  }

}
