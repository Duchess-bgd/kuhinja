const podaci = {
    састојци: [
        {ид:1, name:'Месо', тип:'glavni', slika: 'meso.png'},
        {ид:2, name:'Kупус', тип:'ПОВРЋЕ', slika: 'kupus.png'},
        {ид:3, name:'Со и бибер', тип:'ЗАЧИН', slika: 'soibiber.png'},
        {ид:4, name:'Teсто', тип:'glavni', slika: 'testo.png'},
        {ид:5, name:'Парадајз', тип:'ПОВРЋЕ', slika: 'paradajz.png'},
        {ид:6, name:'Oригано', тип:'ЗАЧИН', slika: 'origano.png'},
        {ид:7, name:'Резанци', тип:'glavni', slika: 'rezanci.png'},
        {ид:8, name:'Kромпир', тип:'ПОВРЋЕ', slika: 'krompir.png'},
        {ид:9, name:"Босиљак", тип:'ЗАЧИН', slika: 'bosiljak.png'}
    ], 

    јела: [
        {ид: 101, name: 'Сарма', sastojci_jela: [1, 2, 3], slika: 'sarma.png'},
        {ид: 102, name: 'Брускети', sastojci_jela: [4, 5, 6], slika: 'brusketi.png'},
        {ид: 103, name: 'Мусака', sastojci_jela: [1, 3, 8], slika: 'musaka.png'},
        {ид: 104, name: 'Шпагети', sastojci_jela: [5, 7, 9], slika: 'spageti.png'},
        {ид: 105, name: 'Паста', sastojci_jela: [4, 5, 9], slika: 'pasta.png'},
        {ид: 106, name: 'Супа', sastojci_jela: [1, 3, 7], slika: 'supa.png'},
        {ид: 107, name: 'Гулаш', sastojci_jela: [3, 7, 8], slika: 'gulas.png'},
        {ид: 108, name: 'Мусака', sastojci_jela: [1, 9, 8], slika: 'musaka.png'},
        {ид: 109, name: 'Сарма', sastojci_jela: [1, 2, 9], slika: 'sarma.png'},
        {ид: 110, name: 'Шпагети', sastojci_jela: [5, 7, 6], slika: 'spageti.png'},
        {ид: 111, name: 'Брускети', sastojci_jela: [4, 5, 9], slika: 'brusketi.png'},
        {ид: 112, name: 'Пизза', sastojci_jela: [4, 5, 3], slika: 'pizza.png'},
    ]
}
$('#poruka').on('click', function(){
    $(this).hide();
});

var prikazi_kod = {
    div: document.querySelector(".cpp"),
    "odeVlada.листа":function(){return "одеВлада.листа()"},
    "odeVlada.додајСастојак":function(a){return "одеВлада.додајСастојак("+a[0]+")"},
    "листа.направи":function(){return `<div>листа.направи() {<p>
        дај да дугмеНађиЈело једнако документ.квериСелектор("#moze");</p><p>
        дугмеНађиЈело.на клик једнако функција(){</p><p>
            дај да јела једнако листа.нађиЈела(листа.низ);</p><p>
            дај да r једнако документ.квериСелектор("#resenje");</p><p>
            r.убаци ХаТеЕмЕл једнако "ЋЕ БУДЕ ";</p><p>
            ако(јела.дужина исто 0) r.убаци ХаТеЕмЕл += "НИШТА";</p><p>
            ако(јела.дужина исто 1) r.убаци ХаТеЕмЕл += јела[0].уВеликаСлова();</p><p>
            r.убаци ХаТеЕмЕл += "није";</p><p>
        }</p>
        
    } </div>`},
    "листа.add":function(a){return `<div>листа.додај(${a[0]}){ <p>
        за ( дај да i једнако 0; i мањи од подаци.састојци.дужина; i++){</p><p>
            ако ( y исто подаци.састојци[i].ид)</p><p>
                састојак једнако подаци.састојци[i];</p><p>
        }</p><p>
        ако(ово.низ.индексОд(y) већи од= 0)</p><p>
                врати;</p><p>
        ово.низ.гурни(y);</p>
    }</div>`},
    "листа.нађиЈела":function(a){return `<div>листа.нађиЈела(${a[0]}){ <p>
        ако(x.дужина исто 0 ) врати [];</p><p>
        за (j једнако 0; j мањи од подаци.јела.дужина; j++) {</p><p>
            дај да нашаоСве једнако тачно;</p><p>
            за (i једнако 0; i мањи од x.дужина; i++) {</p><p>
                дај да нашао једнако нетачно;</p><p>
                за (k једнако 0; k мањи од подаци.јела[j].састојци јела.дужина; k++)</p><p>
                    ако (подаци.јела[j].састојци јела[k] исто x[i])</p><p>
                        нашао једнако тачно;</p><p>
                ако (није нашао)</p><p>
                    нашаоСве једнако нетачно;</p><p>
            }</p><p>
            ако (нашаоСве)</p><p>
                јела.гурни(подаци.јела[j].назив);</p><p>
        }</p><p>
        врати јела;</p>
    }</div>`},

    "листа.обриши_састојак":function(a){return `<div>листа.обриши_састојак(${a[1]}){<p>
        за (дај да i једнако 0; i мањи од ово.низ.дужина; i++)</p><p>
            ако (ово.низ[i] исто y)</p><p>
                ово.низ.сплајсни(i,1);</p><p>
        ли.родителјскиЧвор.укониДете(ли);</p>
    }</div>`},

    "glavni_sastojci.увези":function(){return `<div>главни_састојци.увези(){<p>
    дај да глв_м једнако документ.направи eлемент("секција")</p><p>
дај да мену једнако документ.направи eлемент("секција")</p><p>
 за (дај да i једнако 0; i мањи од подаци.састојци.дужина; i++)</p><p>
ако (тип исто "glavni")</p><p>
                    наз једнако документ.направи eлемент("a")</p><p>
наз.на клик једнако ово.додај.bind(ово, ид);</p>
    }</div>
`},
    "glavni_sastojci.dodaj":function(а){return "главни_састојци.додај()"},

    fja_poziv : function(func, obj_name, name) {
        let that = this;
        return function() {
            //console.log(obj_name, name);
            if(typeof that[obj_name+"."+name] == "function"){
                that.div.innerHTML += that[obj_name+"."+name](arguments)+"<br>";
                let that2 = that;
                let inter = setInterval(function(){
                    if(that2.div.scrollTop === that2.div.scrollHeight)
                        clearInterval(inter);
                    that2.div.scrollTop = that2.div.scrollHeight;
                }, 350);
            }else
                console.log("NIJE DEFINISANA "+obj_name+"."+name+" u prikazi_kod");
            return func.apply(this, arguments);
        }
    },
    dodaj_obj : function(obj){
        //console.log(obj.name);
        let props = this.getAllFuncs(obj);
        //console.log(props);
        for(let name of props){
            let metoda = obj[name];
            if(typeof metoda == "function")
                obj[name] = this.fja_poziv(metoda, obj.name, name);
        }
    },
    getAllFuncs : function(obj) {
        var props = [], original = obj;
        do {
            props = props.concat(Object.getOwnPropertyNames(obj));
        } while (obj = Object.getPrototypeOf(obj));
        obj = original;
        return props.sort().filter(function(e, i, arr) { 
           if (e!=arr[i+1] && typeof obj[e] == 'function') return true;
        });
    }
};