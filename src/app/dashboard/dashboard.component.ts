import { Component, ViewEncapsulation } from "@angular/core";
import { Language } from "../models/language";
import { DataService } from "../services/data.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
    encapsulation: ViewEncapsulation.None,
  })
  export class DashboardComponent {
    currentLang = Language.Undefined;

    constructor(private _dataService: DataService) {}


    ngOnInit() {
        this._dataService.getLanguage().subscribe((lang) => {
            this.currentLang = lang;
        });
    }
  }