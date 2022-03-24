import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeManagerComponent } from './theme-manager.component';

describe('ThemeManagerComponent', () => {
  let component: ThemeManagerComponent;
  let fixture: ComponentFixture<ThemeManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#ngAfterViewInit should add theme stylesheet in html header', () => {
    let defaultTheme = component.themeFolder+"/"+component.themeStyleSheetDefault
    
    document.head.innerHTML = "";

    component.ngAfterViewInit();
    
    expect(document.head.innerHTML).toBe('<link rel="stylesheet" href="'+defaultTheme+'">');
    expect(component.themeStyleSheet.getAttribute('href')).toBe(defaultTheme);
  });

  it('#setTheme should set theme stylesheet', ()=>{
    let mockStyleSheet = 'mockStyleSheet.css';

    document.head.innerHTML = "";
    component.ngAfterViewInit();
    component.setTheme(mockStyleSheet);
    expect(component.themeStyleSheet.getAttribute('href')).toBe(component.themeFolder+"/"+mockStyleSheet);
    expect(component.themeStyleSheetSelected).toBe(mockStyleSheet);
  });

  it('#toggleThemeSelector should toggle isThemeSelectorClose from true to false', () => {
    component.isThemeSelectorClose = true;

    component.toggleThemeSelector();
    expect(component.isThemeSelectorClose).toBeFalse();
    expect(component.labelBtnThemeSelectorToggle).toBe('Close');
  });

  it('#toggleThemeSelector should toggle isThemeSelectorClose from false to true', () => {
    component.isThemeSelectorClose = false;

    component.toggleThemeSelector();
    expect(component.isThemeSelectorClose).toBeTrue();
    expect(component.labelBtnThemeSelectorToggle).toBe('Open');
  });

  it('#isNotThemeLight should return true if Light Theme is not selected', () => {
    component.themeStyleSheetSelected = 'notThemeLight.css';

    expect(component.isNotThemeLight()).toBeTrue();
  });

  it('#isNotThemeLight should return false if Light Theme is selected', () => {
    component.themeStyleSheetSelected = 'theme-light.css';

    expect(component.isNotThemeLight()).toBeFalse();
  });

  it('#isNotThemeDark should return true if Dark Theme is not selected', () => {
    component.themeStyleSheetSelected = 'notThemeDark.css';

    expect(component.isNotThemeDark()).toBeTrue();
  });

  it('#isNotThemeDark should return false if Dark Theme is selected', () => {
    component.themeStyleSheetSelected = 'theme-dark.css';

    expect(component.isNotThemeDark()).toBeFalse();
  });
});
