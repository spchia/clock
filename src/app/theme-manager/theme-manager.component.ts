import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-manager',
  templateUrl: './theme-manager.component.html',
  styleUrls: ['./theme-manager.component.css']
})
export class ThemeManagerComponent implements OnInit, AfterViewInit{
  themeFolder:string = './assets'
  themeStyleSheetDefault:string = "/theme-light.css";

  themeStyleSheet:any
  themeStyleSheetSelected:string = this.themeStyleSheetDefault;
  isThemeSelectorClose:boolean = false;
  labelBtnThemeSelectorToggle = "Close";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.themeStyleSheet = document.createElement("link");
    this.themeStyleSheet.setAttribute("rel", "stylesheet");
    this.themeStyleSheet.setAttribute("href", this.themeFolder+"/"+this.themeStyleSheetDefault);
    document.head.appendChild(this.themeStyleSheet);
  }

  setTheme(styleSheet: string): void{
    this.themeStyleSheet.setAttribute("href",  this.themeFolder+"/"+styleSheet);
    this.themeStyleSheetSelected = styleSheet;
  }

  toggleThemeSelector(): void {
    this.isThemeSelectorClose = !this.isThemeSelectorClose;
    this.labelBtnThemeSelectorToggle = this.isThemeSelectorClose?"Open":"Close";
  }
}
