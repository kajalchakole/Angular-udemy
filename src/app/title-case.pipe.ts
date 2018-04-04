import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "titleCase"
})

export class TitleCasePipe implements PipeTransform {
    transform(value: string){
        if(!value)  return null;
        
        let words = value.split(' ');
        for (let i = 0; i < words.length; i++) {
            let element = words[i];
            if(i > 0 && this.isPreposition(element)) 
                words[i] = words[i].toLowerCase();
            else
                words[i] = this.toTitleCase(element);
        }

        return words.join(' ');
    }
    
    private toTitleCase(element: string) {
        return element.substr(0, 1).toUpperCase() + element.substr(1).toLowerCase();
    }

    private isPreposition(word:string) : boolean {
        let prepositions = [
            'of', 'the'
        ];
        return prepositions.includes(word.toLowerCase());
    }
}