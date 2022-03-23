import { LCD_DIGIT_MATRIX } from '../app/ClockMatrix';

export class ClockDateTime {
    dayOfWeek:string = '';
    todayDate:string = '';

    lcdDigit1:Array<boolean> = [];
    lcdDigit2:Array<boolean> = [];
    lcdDigit3:Array<boolean> = [];
    lcdDigit4:Array<boolean> = [];

    constructor(){
        this.lcdDigit1 = LCD_DIGIT_MATRIX[0];
        this.lcdDigit2 = LCD_DIGIT_MATRIX[0];
        this.lcdDigit3 = LCD_DIGIT_MATRIX[0];
        this.lcdDigit4 = LCD_DIGIT_MATRIX[0];
    }

    updateDigitClock(hour:number, minute:number, todayDate:string, dayOfWeek:string){
        let hourFirstDigit = Math.floor(hour/10);
        let hourSecondDigit = hour%10;
        let minFirstDigit = Math.floor(minute/10);
        let minSecondDigit = minute%10;

        this.lcdDigit1 = LCD_DIGIT_MATRIX[hourFirstDigit];
        this.lcdDigit2 = LCD_DIGIT_MATRIX[hourSecondDigit];
        this.lcdDigit3 = LCD_DIGIT_MATRIX[minFirstDigit];
        this.lcdDigit4 = LCD_DIGIT_MATRIX[minSecondDigit];

        this.todayDate = todayDate;
        this.dayOfWeek = dayOfWeek;
    }
}