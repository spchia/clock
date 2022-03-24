import { ClockDateTime } from "./ClockDateTime";
import { LCD_DIGIT_MATRIX } from "./ClockMatrix";

describe('ClockDateTime', ()=> {
    let clockDateTime: ClockDateTime;

    beforeEach(() => {
        clockDateTime = new ClockDateTime();
    });

    it('#updateDigitClock should update class propertylo based on arguements', () => {
        let mockHour:number = 1;
        let mockMinute:number = 1;
        let mockDate: string = '01/01/1970';
        let mockDayOfWeek: string = 'Monday';

        expect(clockDateTime.todayDate).toBe('');
        expect(clockDateTime.dayOfWeek).toBe('');
        expect(clockDateTime.lcdDigit1).toEqual(LCD_DIGIT_MATRIX[0]);
        expect(clockDateTime.lcdDigit2).toEqual(LCD_DIGIT_MATRIX[0]);
        expect(clockDateTime.lcdDigit3).toEqual(LCD_DIGIT_MATRIX[0]);
        expect(clockDateTime.lcdDigit4).toEqual(LCD_DIGIT_MATRIX[0]);

        clockDateTime.updateDigitClock(mockHour, mockMinute, mockDate, mockDayOfWeek);

        expect(clockDateTime.todayDate).toBe(mockDate);
        expect(clockDateTime.dayOfWeek).toBe(mockDayOfWeek);
        expect(clockDateTime.lcdDigit1).toEqual(LCD_DIGIT_MATRIX[0]);
        expect(clockDateTime.lcdDigit2).toEqual(LCD_DIGIT_MATRIX[1]);
        expect(clockDateTime.lcdDigit3).toEqual(LCD_DIGIT_MATRIX[0]);
        expect(clockDateTime.lcdDigit4).toEqual(LCD_DIGIT_MATRIX[1]);
    });
    
});