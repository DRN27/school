import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import { Variant, Word } from 'src/app/shared/data';

@Component({
	selector: 'app-variant',
	templateUrl: './variant.component.html',
	styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnInit {

	public variantData: Variant;
	public questionNumber: number = 0;

	constructor(
        private appService: AppService,
        private router: Router
	) { }

	ngOnInit(): void {
		this.variantData = this.appService.selectedVariant;
	}

	nextWord(): void {
		if (this.questionNumber < this.variantData.words.length - 1) {
			this.questionNumber++;
		} else {
			this.router.navigateByUrl('/results');
		}
	}
}
