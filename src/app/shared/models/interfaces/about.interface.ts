import { KeyValue } from '@angular/common';

export interface IAbout {
    skills: KeyValue<string, string>[];
    education: KeyValue<string, string>[];
    experience: KeyValue<string, string>[];
}
