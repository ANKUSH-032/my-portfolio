import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bio-info',
  templateUrl: './bio-info.component.html',
  styleUrls: ['./bio-info.component.scss']
})
export class BioInfoComponent {
  selectedIndex: number | null = null;

  // General Info
  @Input() name!: string;
  @Input() profileImage!: string;
  @Input() ganeshji!: string;
  @Input() bannerImage!: string;
  @Input() url?: string;

  // Family Info
  @Input() fatherName!: string;
  @Input() motherName!: string;
  @Input() fatherOccupation!: string;
  @Input() motherOccupation!: string;

  // Address & Religion Info
  @Input() communicationAddress!: string;
  @Input() personalAddress!: string;
  @Input() religion!: string;
  @Input() gotra!: string;

  // Education & Work
  @Input() education!: string;
  @Input() futureOccupation!: string;
  @Input() occupation!: string;

  // Personal Details
  @Input() height!: string;
  @Input() complexion!: string;   // fair, wheatish, dusky, etc.
  @Input() otherDetails!: string; // extra notes if any
@Input() nationality!: string;
@Input() bloodGroup!: string;
@Input() gender!: string;
@Input() age!: string;
@Input() dob!: string;
@Input() caste!: string;
@Input() company!: string;
  // Siblings & Gallery
  @Input() siblings: { name: string; occupation: string }[] = [];
  @Input() gallery: string[] = [];

  selectedImage: string | null = null;
  username!: string;
  isGalleryExpanded: boolean = false;

  profiles: any = {
    ankush: {
      name: 'Ankush Dubey',
      profileImage: 'assets/ankush.jpg',
      ganeshji:'assets/ganeshji.jpg',
      bannerImage: 'assets/ganesh-banner.jpg',
      education: 'Bachelor Of Computer Application (BCA) in Computer Science, Master Of Computer Application (MCA) in Computer Science',
      communicationAddress: '504 B, Raj Horizon Mira Road Near Ramdev Park Mira Bhaynder, 401107',
      personalAddress: 'Khawabeer Jorai Gyanpur Bhadohi, 221304',
      religion: 'Hindu (Brahmin )',
      gotra: 'Gautam',
      fatherName: 'Pramod Dubey',
      motherName: 'Nisha Dubey',
      fatherOccupation: 'Working in Textile',
      motherOccupation: 'Homemaker',
      siblings: [
        { name: 'Anuj Dubey', occupation: 'B.Pharma' },
        { name: 'Prachi Dubey', occupation: 'B.Sc Bio' }
      ],
      futureOccupation: 'Software Architect',
      occupation: 'Software Developer',

      // 👇 New Personal Info
      height: '5 ft 10 in',
      complexion: 'Fair',
      otherDetails: 'Non-smoker, Vegetarian, Loves travelling',
nationality:'Indian',
bloodGroup: 'O+',
gender:'Male',
age:'26',
dob:'15-03-1999',
caste:'Dubey',
company:'OSP Labs Pvt Ltd',
      gallery: [
        'assets/pic1.JPG',
        'assets/pic2.jpg',
       // 'assets/pic3.jpg',
        'assets/pic4.jpg',
        'assets/pic5.jpg',
        'assets/pic6.JPG',
        'assets/pic7.jpg',
        'assets/pic8.jpg',
      ]
    },
    raj: {
      name: 'Raj Verma',
      profileImage: 'assets/raj.jpg',
      bannerImage: 'assets/banner-raj.jpg',
      education: 'MBA in Finance',
      communicationAddress: 'Bangalore',
      personalAddress: 'Patna, Bihar',
      religion: 'Hindu',
      gotra: 'Kashyap',
      fatherName: 'Mahesh Verma',
      motherName: 'Anita Verma',
      fatherOccupation: 'Retired Govt. Officer',
      motherOccupation: 'Teacher',
      siblings: [],
      futureOccupation: 'Investment Banker',

      // 👇 Example data
      height: '5 ft 11 in',
      complexion: 'Fair',
      otherDetails: 'Fitness enthusiast, Non-vegetarian',

      gallery: ['assets/raj1.jpg']
    }
  };

  constructor(private route: ActivatedRoute,private router: Router) {}

 ngOnInit(): void {
  this.username = this.route.snapshot.paramMap.get('username') || '';

  // Check if profile exists
  if (this.profiles.hasOwnProperty(this.username)) {
    Object.assign(this, this.profiles[this.username]);
  } else {
    this.router.navigate(['/portfolio']);
  }
}



  openImageModal(index: number) {
    this.selectedIndex = index;
    this.selectedImage = this.gallery[index];
  }

  closeImageModal() {
    this.selectedImage = null;
    this.selectedIndex = null;
  }

  prevImage() {
    if (this.selectedIndex !== null) {
      this.selectedIndex =
        (this.selectedIndex - 1 + this.gallery.length) % this.gallery.length;
    }
  }

  nextImage() {
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex + 1) % this.gallery.length;
    }
  }

  toggleGallery() {
    this.isGalleryExpanded = !this.isGalleryExpanded;
  }
}
