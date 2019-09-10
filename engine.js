let keywordMap = {
    'идентично': '===',
    'исто': '==',
    'листа класа': 'classList',
    'додај га':'append',
    'надовежи дете':"appendChild",
    "састојци јела":"sastojci_jela",
    'Обећање': 'Promise',
    'асинхрона': 'async',
    'одложи': 'setTimeout',
    'сачекај': 'await',
    'онда': 'then',
    'ухвати': 'catch',
    'пробај': 'try',
    'празно': 'null',
    'заСваки': 'forEach',
    'недефинисано': 'undefined',
    'Математика': 'Math',
    'насумично': 'random',
    'функција': 'function',
    'класа': 'class',
    'наслеђује': 'extends',
    'конструктор': 'constructor',
    'врати': 'return',
    'испиши': 'alert',
    'константа': 'const',
    'дај да': 'let',
    'ово': 'this',
    'буде': '=',
    'дохвати': 'fetch',
    'пробај': 'try',
    'баци': 'throw',
    'Грешку': 'Error',
    'гурни': 'push',
    'добија вредност': '=',
    'повећај за': '+=',
    'увећај за': '+=',
    'умањи за': '-=',
    'нетачно': 'false',
    'тачно': 'true',
    'није једнако': '!=',
    'није': '!',
    'мањи од': '<',
    'мање од': '<',
    'већи од': '>',
    'веће од': '>',
    'постаје': '=',
    'једнако': '=',
    'Низ': 'Array',
    'процеди': 'filter',
    'дужина': 'length',
    'нови': 'new',
    'нова': 'new',
    'ново': 'new',
    'нову': 'new',
    'пута': '*',
    'за': 'for',
    'док': 'while',
    'ако': 'if',
    'у супрoтном': 'else',
    'или': '||',
    'и': '&&',
    'конзолирај': 'console.log',
    'направи eлемент': 'createElement',
    'документ': 'document',
    'надовежи': 'append',
    'додај': 'add',
    'уклони': 'remove',
    'обележено': 'checked',
    'убаци ХаТеЕмЕл': 'innerHTML',
    'убаци надовезујући ХаТеЕмЕл': 'insertAdjecentHTML',
    'предкрај': 'beforeend',
    'надовежи дете': 'appendChild',
    'на Kлик': 'onClick',
    'секција': 'div',
    'п': 'p',
    'дугме': 'button',
    'ул': 'ul',
    'распон': 'span',
    'слика': 'img',
    'алтернативно': 'alt',
    'на клик': 'onclick',
    'опција': 'option',
    'вредност': 'value',
    'преузми Атрибут': 'getAttribute',
    'постави Атрибут': 'setAttribute',
    'ослушкуј Догађај': 'addEventListener',
    'ЏСОН.стрингифај': 'JSON.stringify',
    'куериСелектор': 'querySelector',
    'подаци': 'podaci',
    'примени': 'apply',
    'убаци надовезујући елемент': 'insertAdjacentElement',
    'родителјскиЧвор': 'parentNode',
    'укониДете': 'removeChild',
    'није нашао': '!nasao',
    'сплајсни': 'splice',
    'то': 'that',
    'тело': 'body',
    ////////////////////////
    'прикажи код': 'prikazi_kod',
    'главни састојци': 'glavni_sastojci',
    'тип од': 'typeof',
    'квериСелектор': 'querySelector',
    'обј': 'obj',
    'арр': 'arr',
    'функција позив': 'fja_poziv',
    'под': 'floor',
    'додај_обј': 'dodaj_obj',
    'сортирај': 'sort',
    'пропс': 'props',
    'оригинал': 'original',
    'споји': 'concat',
    'Објекат': 'Object',
    'вратиНазивеСвојстава': 'getOwnPropertyNames',
    'вратиПрототипОд': 'getPrototypeOf',
    'назив': 'name',
    'метода': 'metoda',
    'вар': 'var',
    'функ': 'func',
    'скиниАтрибут': 'removeAttribute',
    'узмиСвеФункције': 'getAllFuncs',
    'уВеликаСлова': 'toUpperCase',
    'индексОд': 'indexOf',
    'класаИме': 'className',
    'скролВисина': 'scrollHeight',
    'скролВрх': 'scrollTop',
    'алерт': 'alert'
}

function execute(code) {
    code = ` ${code} `

    let newCode = Object.keys(keywordMap).reduce((prev, keyword) => {
        return prev
            .replace(
                new RegExp(`(\\]|\\s|\\(|\\.|\\'|\\"|\\{}|\\=)${keyword}(\\:|\\[|\\s|\\(|\\.|\\'|\\"|\\{}|\\=|\\)|\\;)`, 'g'),
                //new RegExp(`(\\s|\\(|\\.|\\'|\\"|\\{}|\\=)${keyword}(\\s|\\(|\\.|\\'|\\"|\\{}|\\=|\\)|\\;)`, 'g'),
                `$1${keywordMap[keyword]}$2`
            )
    }, code)

    try {
        console.log(newCode);
        let result = eval.call(null, newCode)
        return result
    } catch (ex) {
        console.log(ex);
        return ex
    }
}

window.execute = execute;



execute(
`вар главни састојци једнако {
    назив:"главни састојци",
    бтн: документ.направи eлемент("дугме"),
    увези: функција () {
            дај да глв_м једнако документ.направи eлемент("секција");
            глв_м.класаИме једнако "dropdown col-md-4 bigger";
            ово.бтн.класаИме једнако "btn btn-secondary dropdown-toggle bigger2";
            ово.бтн.постави Атрибут("type", "дугме");
            ово.бтн.постави Атрибут("ид", "dropdownMenuButton");
            ово.бтн.постави Атрибут("data-toggle", "dropdown");
            ово.бтн.постави Атрибут("aria-haspopup", "тачно");
            ово.бтн.постави Атрибут("aria-expanded", "нетачно");
            ово.бтн.убаци ХаТеЕмЕл једнако "ГЛАВНИ САСТОЈЦИ";
            глв_м.надовежи(ово.бтн);
 
            дај да мену једнако документ.направи eлемент("секција");
            мену.класаИме једнако "dropdown-menu text-center  bigger3";
 
            мену.постави Атрибут("aria-labelledby", "dropdownMenuButton");
            глв_м.надовежи(мену);
 
 
 
            за (дај да i једнако 0; i мањи од подаци.састојци.дужина; i++) {
                дај да тип, наз, ид;
                тип једнако подаци.састојци[i].тип;
                ид једнако подаци.састојци[i].ид;
                ако (тип исто "glavni") {
                    наз једнако документ.направи eлемент("a");
                    наз.класаИме једнако "dropdown-item";
                    наз.постави Атрибут("data-id", ид);
                    наз.постави Атрибут("href", "#");
                    наз.убаци ХаТеЕмЕл једнако подаци.састојци[i].назив;
                    наз.на клик једнако ово.додај.bind(this, ид);
                    мену.надовежи(наз);
                }
            }
 
            документ.квериСелектор("#meni").надовежи(глв_м);
 
 
    },
    додај:function(ид){
        листа.додај(ид);
        //this.бтн.скиниАтрибут("data-toggle");
    }
}


класа одеВлада {
    конструктор(a, б){
        ово.назив једнако б;
        ово.тип једнако a;
        ово.листа();
    }
 
    листа(){
//kreira html elemente
        дај да лен = подаци.састојци.дужина;
        дај да дивОмот = документ.направи eлемент('секција');        
        дивОмот.листа класа.додај("dropdown", "col-md-4", "bigger");
        дај да бтнДроп = документ.направи eлемент('дугме');
        бтнДроп.листа класа.додај("btn", "btn-secondary", "dropdown-toggle", "bigger2");
        бтнДроп.ид = "dropdownMenuButton";
        бтнДроп.постави Атрибут("data-toggle","dropdown");
        бтнДроп.постави Атрибут("aria-haspopup","тачно");
        бтнДроп.постави Атрибут("aria-expanded","нетачно");
        бтнДроп.постави Атрибут("type","дугме");
        бтнДроп.убаци ХаТеЕмЕл = ово.тип;
        дај да секција = документ.направи eлемент('секција');
        секција.листа класа.додај("dropdown-menu", "bigger3");
        секција.постави Атрибут("aria-labelledby","dropdownMenuButton");
        дај да то једнако ово;
        за(дај да i = 0;i < лен; i++){
    //kreira linkove sa nazivima sastojaka
            ако(подаци.састојци[i].тип == ово.тип){
                дај да a = документ.направи eлемент('a');
                дај да ид једнако подаци.састојци[i].ид;
                a.постави Атрибут('data-id',ид);
                a.листа класа.додај("dropdown-item");
                a.href = '#';
                a.убаци ХаТеЕмЕл = подаци.састојци[i]['назив'];
                секција.надовежи(a);
                a.на клик = this.додајСастојак.bind(this, ид);
                //функција(){
        //poziva funkciju za slanje sastojaka
                    //дај да одабир једнако parseInt(ово.преузми Атрибут("data-id"));
                    //то.додајСастојак(одабир);
                //}                            
            }
        }
        дивОмот.надовежи(бтнДроп);
        дивОмот.надовежи(секција);
        документ.квериСелектор("#meni").надовежи(дивОмот);
    }
 
    додајСастојак(одабир){
        //salje odabrane sastojke u listu
        листа.додај(одабир);
    }
}
 
дај да листа једнако {
//kreira listu sastojaka i prikazuje obrok na osnovu toga
    назив:"листа",
    низ:[],
    листаСастојци:'',
    направи: функција(){
        ово.листаСастојци једнако документ.направи eлемент('ул');
        ово.листаСастојци.класаИме једнако "col-md-6 list-group m-3 fs";
        документ.квериСелектор("#lista_iz").надовежи дете(ово.листаСастојци);
        дај да дугмеНађиЈело једнако документ.квериСелектор("#moze");
        дугмеНађиЈело.на клик једнако функција(){
            дај да јела једнако листа.нађиЈела(листа.низ);
            дај да r једнако документ.квериСелектор("#resenje");
            r.убаци ХаТеЕмЕл једнако "ЋЕ БУДЕ ";
            ако(јела.дужина исто 0) r.убаци ХаТеЕмЕл += "НИШТА";
            ако(јела.дужина исто 1) r.убаци ХаТеЕмЕл += јела[0].уВеликаСлова();
            ако(јела.дужина већи од 1) r.убаци ХаТеЕмЕл += јела[Math.под(Математика.насумично() * јела.дужина)].уВеликаСлова();
            r.убаци ХаТеЕмЕл += "није";
        }
    },
    додај: функција(y){
        дај да састојак;
        за ( дај да i једнако 0; i мањи од подаци.састојци.дужина; i++){
            ако ( y исто подаци.састојци[i].ид)
                састојак једнако подаци.састојци[i];
        }
        ако(ово.низ.индексОд(y) већи од= 0)
                врати;
 
        ово.низ.гурни(y);
        конзолирај(ово.низ);
        дај да ли једнако документ.направи eлемент('ли');
        ли.класаИме једнако "vel list-group-item pr";
        ли.убаци ХаТеЕмЕл једнако '<img класа="sl pa2" src="slike/'+састојак.slika+'" />'+састојак.назив;
        дај да обришиБтн једнако документ.направи eлемент('дугме');
        обришиБтн.класаИме једнако "close pa dd";
        обришиБтн.постави Атрибут("type", "дугме");
        обришиБтн.постави Атрибут("aria-label", "Close");
        обришиБтн.убаци ХаТеЕмЕл једнако '<span aria-hidden="тачно">Обриши &times;</span>';
        ли.убаци надовезујући елемент('предкрај', обришиБтн);
        ово.листаСастојци.убаци надовезујући елемент('предкрај', ли);
        обришиБтн.на клик једнако ово.обриши_састојак.bind( this , ли , y );
    },
    обриши_састојак: функција(ли, y){
            за (дај да i једнако 0; i мањи од ово.низ.дужина; i++){
                ако (ово.низ[i] исто y){
                    ово.низ.сплајсни(i,1);
                }
            }
            ли.родителјскиЧвор.укониДете(ли);
            конзолирај(листа.низ);
    },
    нађиЈела: функција(x){
        ако(x.дужина исто 0 ){
            врати [];
        }
        дај да јела једнако [];
        за (j једнако 0; j мањи од подаци.јела.дужина; j++) {
            дај да нашаоСве једнако тачно;
            за (i једнако 0; i мањи од x.дужина; i++) {
                дај да нашао једнако нетачно;
                за (k једнако 0; k мањи од подаци.јела[j].састојци јела.дужина; k++) {
                    ако (подаци.јела[j].састојци јела[k] исто x[i]) {
                        нашао једнако тачно;
                    }
                }
                ако (није нашао)
                    нашаоСве једнако нетачно;
            }
            ако (нашаоСве)
                јела.гурни(подаци.јела[j].назив);
        }
        врати јела;
    }
}


прикажи код.додај_обј(листа);
прикажи код.додај_обј(главни састојци);


главни састојци.увези();
дај да зачини=нови одеВлада('ЗАЧИН', 'одеВлада');
дај да поврће=нови одеВлада('ПОВРЋЕ', 'одеВлада');
листа.направи();

прикажи код.додај_обј(зачини);
прикажи код.додај_обј(поврће);

`);