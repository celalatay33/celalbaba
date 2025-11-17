// --- JAVASCRIPT: Tüm Roller İçin Counter Veri ve İşlevsellik ---

// 1. TÜM VERİ TABANLARI (EKSİKSİZ)
const adcCounterData = {
    "aphelios": ["jhin", "caitlyn", "tristana", "samira", "ezreal"], "ashe": ["jhin", "caitlyn", "vayne", "tristana", "missfortune"],
    "caitlyn": ["ezreal", "vayne", "jhin", "lucian", "kaisa"], "corki": ["sivir", "tristana", "missfortune", "jhin", "samira"],
    "draven": ["caitlyn", "ezreal", "sivir", "ashe", "xayah"], "ezreal": ["lucian", "draven", "caitlyn", "twitch", "missfortune"],
    "jhin": ["vayne", "ezreal", "samira", "tristana", "caitlyn"], "jinx": ["caitlyn", "tristana", "samira", "kaisa", "draven"],
    "kaisa": ["lucian", "draven", "ashe", "tristana", "samira"], "kogmaw": ["tristana", "caitlyn", "ezreal", "jhin", "vayne"],
    "lucian": ["vayne", "caitlyn", "jinx", "ashe", "draven"], "missfortune": ["vayne", "sivir", "ezreal", "jhin", "zeri"],
    "nilah": ["samira", "zeri", "ezreal", "caitlyn", "twitch"], "samira": ["sivir", "jhin", "tristana", "twitch", "zeri"],
    "senna": ["draven", "caitlyn", "zeri", "twitch", "vayne"], "sivir": ["draven", "jinx", "caitlyn", "ezreal", "zeri"],
    "smolder": ["caitlyn", "jhin", "missfortune", "ezreal", "zeri"], "tristana": ["lucian", "jinx", "vayne", "caitlyn", "kaisa"],
    "twitch": ["caitlyn", "jhin", "ezreal", "tristana", "samira"], "varus": ["vayne", "kaisa", "tristana", "samira", "draven"],
    "vayne": ["caitlyn", "ashe", "lucian", "jhin", "tristana"], "xayah": ["caitlyn", "jhin", "tristana", "ezreal", "kaisa"],
    "zeri": ["lucian", "ezreal", "caitlyn", "jhin", "tristana"], "ziggs": ["jhin", "caitlyn", "ezreal", "vayne", "samira"] 
};
const supportCounterData = {
    "soraka": ["blitzcrank", "leona", "pyke", "nautilus", "thresh"], "bard": ["brand", "zyra", "karma", "zilean", "braum"],
    "nami": ["leona", "pyke", "blitzcrank", "thresh", "braum"], "milio": ["blitzcrank", "pyke", "thresh", "leona", "nautilus"],
    "sona": ["leona", "blitzcrank", "pyke", "nautilus", "thresh"], "thresh": ["blitzcrank", "morgana", "karma", "braum", "leona"],
    "janna": ["leona", "thresh", "nautilus", "blitzcrank", "pyke"], "brand": ["braum", "alistar", "thresh", "leona", "nautilus"],
    "zilean": ["pyke", "blitzcrank", "thresh", "leona", "nautilus"], "zyra": ["braum", "alistar", "thresh", "nautilus", "leona"],
    "rakan": ["braum", "janna", "lulu", "nami", "sona"], "blitzcrank": ["thresh", "morgana", "alistar", "taric", "braum"],
    "leona": ["morgana", "alistar", "janna", "zyra", "nautilus"], "lulu": ["leona", "pyke", "blitzcrank", "nautilus", "karma"],
    "morgana": ["thresh", "leona", "nautilus", "pyke", "blitzcrank"], "pantheon": ["alistar", "braum", "nautilus", "thresh", "leona"],
    "poppy": ["morgana", "janna", "lulu", "nami", "sona"], "pyke": ["braum", "alistar", "leona", "nautilus", "thresh"],
    "seraphine": ["leona", "pyke", "blitzcrank", "thresh", "nautilus"], "taric": ["janna", "lulu", "nami", "sona", "soraka"],
    "senna": ["draven", "caitlyn", "zeri", "twitch", "vayne"], "rell": ["morgana", "alistar", "janna", "zyra", "nautilus"],
    "nautilus": ["morgana", "alistar", "janna", "zyra", "braum"], "karma": ["braum", "nami", "sona", "taric", "yuumi"],
    "elise": ["braum", "alistar", "thresh", "nautilus", "leona"], "braum": ["morgana", "blitzcrank", "leona", "pyke", "nautilus"],
    "annie": ["janna", "lulu", "nami", "sona", "soraka"], "fiddlesticks": ["braum", "alistar", "thresh", "nautilus", "leona"],
    "xerath": ["blitzcrank", "pyke", "thresh", "leona", "nautilus"], "neeko": ["braum", "alistar", "thresh", "nautilus", "leona"],
    "velkoz": ["blitzcrank", "pyke", "thresh", "leona", "nautilus"], "alistar": ["morgana", "janna", "lulu", "nami", "sona"],
    "lux": ["blitzcrank", "pyke", "thresh", "leona", "nautilus"], "maokai": ["morgana", "janna", "lulu", "nami", "sona"],
    "tahmkench": ["morgana", "janna", "lulu", "nami", "sona"], "yuumi": ["leona", "blitzcrank", "pyke", "nautilus", "thresh"],
    "renataglasc": ["blitzcrank", "pyke", "thresh", "leona", "nautilus"] 
};
const topCounterData = {
    "vladimir": ["fiora", "garen", "jax", "kled", "darius"], "fiora": ["vladimir", "garen", "jax", "kled", "darius"], 
    "garen": ["kled", "darius", "gwen", "kayle", "olaf"], "jax": ["garen", "kled", "darius", "gwen", "kayle"], 
    "kled": ["olaf", "ornn", "pantheon", "poppy", "teemo"], "darius": ["olaf", "ornn", "pantheon", "poppy", "teemo"],
    "gwen": ["darius", "kled", "olaf", "ornn", "pantheon"], "kayle": ["darius", "kled", "olaf", "ornn", "pantheon"],
    "kennen": ["olaf", "ornn", "pantheon", "poppy", "teemo"], "malphite": ["olaf", "ornn", "pantheon", "poppy", "teemo"],
    "sett": ["olaf", "ornn", "pantheon", "poppy", "teemo"], "riven": ["olaf", "ornn", "pantheon", "poppy", "teemo"],
    "sion": ["olaf", "ornn", "pantheon", "poppy", "teemo"], "urgot": ["olaf", "ornn", "pantheon", "poppy", "teemo"],
    "irelia": ["olaf", "ornn", "pantheon", "poppy", "teemo"], "aatrox": ["olaf", "ornn", "pantheon", "poppy", "teemo"],
    "olaf": ["garen", "jax", "fiora", "kled", "darius"], "ornn": ["gwen", "kayle", "kled", "darius", "olaf"],
    "pantheon": ["gwen", "kayle", "kled", "darius", "olaf"], "poppy": ["gwen", "kayle", "kled", "darius", "olaf"],
    "quinn": ["gwen", "kayle", "kled", "darius", "olaf"], "teemo": ["gwen", "kayle", "kled", "darius", "olaf"],
    "warwick": ["gwen", "kayle", "kled", "darius", "olaf"], "shen": ["gwen", "kayle", "kled", "darius", "olaf"],
    "ambessa": ["gwen", "kayle", "kled", "darius", "olaf"], "camille": ["gwen", "kayle", "kled", "darius", "olaf"],
    "yasuo": ["gwen", "kayle", "kled", "darius", "olaf"], "yone": ["gwen", "kayle", "kled", "darius", "olaf"],
    "singed": ["gwen", "kayle", "kled", "darius", "olaf"], "aurora": ["jayce", "nasus", "rumble", "tryndamere", "vayne"],
    "akali": ["jayce", "nasus", "rumble", "tryndamere", "vayne"], "chogath": ["jayce", "nasus", "rumble", "tryndamere", "vayne"],
    "drmundo": ["jayce", "nasus", "rumble", "tryndamere", "vayne"], "gangplank": ["jayce", "nasus", "rumble", "tryndamere", "vayne"],
    "gnar": ["jayce", "nasus", "rumble", "tryndamere", "vayne"], "gragas": ["jayce", "nasus", "rumble", "tryndamere", "vayne"],
    "illaoi": ["jayce", "nasus", "rumble", "tryndamere", "vayne"], "jayce": ["nasus", "rumble", "tryndamere", "vayne", "yorick"],
    "nasus": ["rumble", "tryndamere", "vayne", "yorick", "volibear"], "rumble": ["tryndamere", "vayne", "yorick", "volibear", "renekton"],
    "tryndamere": ["vayne", "yorick", "volibear", "renekton", "ksante"], "vayne_top": ["yorick", "volibear", "renekton", "ksante", "jayce"],
    "yorick": ["volibear", "renekton", "ksante", "jayce", "rumble"], "volibear": ["renekton", "ksante", "jayce", "rumble", "nasus"],
    "renekton": ["ksante", "jayce", "rumble", "nasus", "tryndamere"], "ksante": ["jayce", "rumble", "nasus", "tryndamere", "vayne"],
};
const jungleCounterData = {
    "reksai": ["diana", "ekko", "jarvaniv", "lee_sin", "sylas"], "diana": ["ekko", "jarvaniv", "lee_sin", "sylas", "viego"],
    "ekko": ["jarvaniv", "lee_sin", "sylas", "viego", "fiddlesticks"], "jarvaniv": ["lee_sin", "sylas", "viego", "fiddlesticks", "briar"],
    "leesin": ["sylas", "viego", "fiddlesticks", "briar", "belveth"], "sylas": ["viego", "fiddlesticks", "briar", "belveth", "graves"],
    "viego": ["fiddlesticks", "briar", "belveth", "graves", "brand"], "jax_jungle": ["fiddlesticks", "briar", "belveth", "graves", "brand"],
    "fiddlesticks": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "briar": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "belveth": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "graves": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "hecarim": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "ivern": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "kayn": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "khazix": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "kindred": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "masteryi": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "nidalee": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "nunuwillump": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "warwick": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "xinzhao": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "zed_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "volibear_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "talon_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "karthus": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "elise_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "zac": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "brand_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "lillia": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "amumu": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "evelynn": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "gragas_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "gwen_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "morgana_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "wukong": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "pantheon_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "qiyana_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "rammus": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "shaco": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "rumble_jungle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "rengar": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "skarner": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "trundle": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "vi": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "udyr": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "shyvana": ["reksai", "diana", "ekko", "jarvaniv", "leesin"], "nocturne": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
    "naafiri": ["reksai", "diana", "ekko", "jarvaniv", "leesin"],
};
const midCounterData = {
    "vladimir_mid": ["syndra", "ahri", "diana", "veigar", "leblanc"], "syndra": ["ahri", "diana", "veigar", "leblanc", "hwei"],
    "ahri": ["diana", "veigar", "leblanc", "hwei", "annie"], "diana_mid": ["veigar", "leblanc", "hwei", "annie", "qiyana"],
    "qiyana": ["veigar", "leblanc", "hwei", "annie", "sylas"], "sylas_mid": ["veigar", "leblanc", "hwei", "annie", "zoe"],
    "zoe": ["mel", "veigar", "leblanc", "hwei", "annie"], "katarina": ["mel", "veigar", "leblanc", "hwei", "annie"],
    "anivia": ["mel", "veigar", "leblanc", "hwei", "annie"], "yasuo_mid": ["mel", "veigar", "leblanc", "hwei", "annie"],
    "mel": ["ahri", "diana", "qiyana", "sylas", "zoe"], "veigar": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "leblanc": ["ahri", "diana", "qiyana", "sylas", "zoe"], "hwei": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "akali_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"], "akshan": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "ekko_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"], "kassadin": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "morgana_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"], "orianna": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "twistedfate": ["ahri", "diana", "qiyana", "sylas", "zoe"], "vex": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "zed": ["ahri", "diana", "qiyana", "sylas", "zoe"], "talon": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "irelia_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"], "fizz": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "galio": ["ahri", "diana", "qiyana", "sylas", "zoe"], "cassiopeia": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "yone_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"], "annie_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "xerath_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"], "neeko_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "ryze": ["ahri", "diana", "qiyana", "sylas", "zoe"], "velkoz_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "aurora_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"], "aurelion_sol": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "azir": ["ahri", "diana", "qiyana", "sylas", "zoe"], "jayce_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "lux_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"], "lissandra": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "pantheon_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"], "viktor": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "naafiri_mid": ["ahri", "diana", "qiyana", "sylas", "zoe"], "swain": ["ahri", "diana", "qiyana", "sylas", "zoe"],
    "malzahar": ["ahri", "diana", "qiyana", "sylas", "zoe"], "taliyah": ["ahri", "diana", "qiyana", "sylas", "zoe"]
};

// --- YENİ EKLENEN: ADC Eşya Dizilim Verileri ---
const adcBuildData = {
    "aphelios": ["Kanonik Yay", "Fırtınabiçen", "Ebedi Kılıç", "Dominik Efendi'nin Hürmetleri"],
    "ashe": ["Kanonik Yay", "Mahvolmuş Kralın Kılıcı", "Kraken Katili", "Runaan'ın Kasırgası"],
    "caitlyn": ["Fırtınabiçen", "Ebedi Kılıç", "Kanonik Yay", "Lord Dominik'in Hürmetleri"],
    "draven": ["Hızkesen", "Ölümün Dansı", "Ruhgömleği", "Kan Arıtıcısı"],
    "ezreal": ["Gözyaşı", "Kraken Katili", "Muramana", "Navori Yağmurla Tetiklenen"],
    "jhin": ["Hızkesen", "Ebedi Kılıç", "Fırtınabiçen", "Dominik Lordu'nun Hürmetleri"],
    "jinx": ["Kraken Katili", "Fırtınabiçen", "Ebedi Kılıç", "Runaan'ın Kasırgası"],
    "kaisa": ["Kraken Katili", "Rageblade (Öfke Kılıcı)", "Nashor'un Dişi", "Rabadon'un Şapkası"],
    "lucian": ["Kanonik Yay", "Fırtınabiçen", "Ebedi Kılıç", "Hızlıateş Topu"],
    "missfortune": ["Hızkesen", "Dominik Lordu'nun Hürmetleri", "Ruhgömleği", "Fırtınabiçen"],
    "nilah": ["Kraken Katili", "Ebedi Kılıç", "Kanonik Yay", "Kan Arıtıcısı"],
    "samira": ["Kraken Katili", "Kan Arıtıcısı", "Ebedi Kılıç", "Dominik Lordu'nun Hürmetleri"],
    "senna": ["Gözyaşı", "Kraken Katili", "Muramana", "Navori Yağmurla Tetiklenen"],
    "sivir": ["Kanonik Yay", "Ebedi Kılıç", "Fırtınabiçen", "Hızlıateş Topu"],
    "smolder": ["Kanonik Yay", "Fırtınabiçen", "Ebedi Kılıç", "Runaan'ın Kasırgası"],
    "tristana": ["Fırtınabiçen", "Ebedi Kılıç", "Kanonik Yay", "Hızlıateş Topu"],
    "twitch": ["Kraken Katili", "Runaan'ın Kasırgası", "Ebedi Kılıç", "Dominik Lordu'nun Hürmetleri"],
    "varus": ["Kraken Katili", "Rageblade (Öfke Kılıcı)", "Nashor'un Dişi", "Rabadon'un Şapkası"],
    "vayne": ["Mahvolmuş Kralın Kılıcı", "Kraken Katili", "Rageblade (Öfke Kılıcı)", "Kanonik Yay"],
    "xayah": ["Kanonik Yay", "Fırtınabiçen", "Ebedi Kılıç", "Dominik Lordu'nun Hürmetleri"],
    "zeri": ["Statikk Hançeri", "Rageblade (Öfke Kılıcı)", "Nashor'un Dişi", "Rabadon'un Şapkası"],
    "ziggs": ["Ludens Companion", "Mejai'nin Ruh Yürütücüsü", "Rabadon'un Şapkası", "Büyük Kış"],
};


// 2. YARDIMCI VE API FONKSİYONLARI
const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

const getChampionApiName = (champName) => {
    const cleanName = champName.replace(/_(top|jungle|mid)$/, '');

    switch (cleanName) {
        case "missfortune": return "MissFortune"; case "kogmaw": return "KogMaw";  
        case "renataglasc": return "RenataGlasc"; case "tahmkench": return "TahmKench"; 
        case "velkoz": return "Velkoz"; case "leesin": return "LeeSin";
        case "jarvaniv": return "JarvanIV"; case "khazix": return "KhaZix"; 
        case "masteryi": return "MasterYi"; case "nunuwillump": return "Nunu";
        case "xinzhao": return "XinZhao"; case "aurelion_sol": return "AurelionSol";
        case "drmundo": return "DrMundo"; case "chogath": return "Chogath";
        case "reksai": return "RekSai"; case "twistedfate": return "TwistedFate";
        case "belveth": return "BelVeth"; case "ksante": return "KSante";
        case "wukong": return "MonkeyKing";
        default: return capitalize(cleanName); 
    }
}

const getDisplayChampName = (champName) => {
    const cleanName = champName.replace(/_(top|jungle|mid)$/, '');
    switch (cleanName) {
        case "missfortune": return "Miss Fortune"; case "kogmaw": return "Kog'Maw";  
        case "renataglasc": return "Renata Glasc"; case "tahmkench": return "Tahm Kench";
        case "velkoz": return "Vel'Koz"; case "leesin": return "Lee Sin";
        case "jarvaniv": return "Jarvan IV"; case "khazix": return "Kha'Zix";
        case "masteryi": return "Master Yi"; case "nunuwillump": return "Nunu & Willump"; 
        case "xinzhao": return "Xin Zhao"; case "aurelion_sol": return "Aurelion Sol";
        case "drmundo": return "Dr. Mundo"; case "chogath": return "Cho'Gath";
        case "reksai": return "Rek'Sai"; case "twistedfate": return "Twisted Fate";
        case "belveth": return "Bel'Veth"; case "ksante": return "K'Sante";
        case "wukong": return "Wukong"; case "mel": return "Mel";
        default: return capitalize(cleanName); 
    }
}

// 3. GLOBAL DEĞİŞKENLER VE API URL'si
const STABLE_VERSION = '14.23.1'; 
const API_URL = `https://ddragon.leagueoflegends.com/cdn/${STABLE_VERSION}/img/champion/`;

const allRoleData = {
    'top': topCounterData,
    'jungle': jungleCounterData,
    'mid': midCounterData,
    'adc': adcCounterData,
    'support': supportCounterData
};
const allChampionNamesForTierList = {
    'top': Object.keys(topCounterData).map(n => n.replace(/_(top|jungle|mid)$/, '')),
    'jungle': Object.keys(jungleCounterData).map(n => n.replace(/_(top|jungle|mid)$/, '')),
    'mid': Object.keys(midCounterData).map(n => n.replace(/_(top|jungle|mid)$/, '')),
    'adc': Object.keys(adcCounterData).map(n => n.replace(/_(top|jungle|mid)$/, '')),
    'support': Object.keys(supportCounterData).map(n => n.replace(/_(top|jungle|mid)$/, '')),
};
let currentRoleData = null;


// 4. ŞAMPİYON LİSTESİNİ OLUŞTURMA (COUNTER)
function populateChampionGrid(roleData) {
    const grid = document.getElementById('champion-grid');
    const searchInput = document.getElementById('champion-search');
    grid.innerHTML = ''; 
    
    if (!roleData) {
        // Rol seçimi yoksa arama çubuğunu devre dışı bırak
        searchInput.disabled = true;
        return;
    }
    
    // Rol seçildiğinde arama çubuğunu aktif et
    searchInput.disabled = false;
    searchInput.value = ''; // Arama çubuğunu temizle
    
    const allChampions = Object.keys(roleData).sort();

    allChampions.forEach(champName => {
        const champContainer = document.createElement('div');
        champContainer.className = 'champ-item-container'; 
        
        const button = document.createElement('div');
        button.className = 'champ-icon';
        
        const apiName = getChampionApiName(champName); 
        const iconUrl = `${API_URL}${apiName}.png`; 
        
        const img = document.createElement('img');
        img.src = iconUrl;
        img.alt = getDisplayChampName(champName);
        
        button.appendChild(img);
        
        button.addEventListener('click', () => showCounters(champName, roleData));
        
        const nameText = document.createElement('span');
        nameText.textContent = getDisplayChampName(champName);
        
        champContainer.appendChild(button);
        champContainer.appendChild(nameText);
        
        grid.appendChild(champContainer);
    });
    
    // Grid her dolduğunda filtrelemeyi sıfırlamak için tüm şampiyonları görünür yap
    filterChampionGrid(''); 
}

// YENİ FONKSİYON: Modal Sekmelerini Yöneten Fonksiyon
function setupModalTabs() {
    const tabButtons = document.querySelectorAll('.modal-tab-button');
    const tabContents = document.querySelectorAll('.modal-content-area');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-tab-content');

            // Butonları ve içerikleri sıfırla
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Aktif olanı göster
            this.classList.add('active');
            document.getElementById(`modal-content-${target}`).classList.add('active');
        });
    });
}

// 5. COUNTER SONUÇLARINI GÖSTERME (MODAL) - Build Sekmesi Eklendi
function showCounters(selectedChamp, roleData) {
    const modalContainer = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    
    const counters = roleData[selectedChamp];
    const build = adcBuildData[selectedChamp.replace(/_(top|jungle|mid)$/, '')] || ["Veri Yok"]; 
    const displayChampName = getDisplayChampName(selectedChamp);
    
    // --- MODAL SEKMELERİNİ OLUŞTURMA ---
    let modalHTML = `
        <h2>${displayChampName}</h2>
        
        <div class="modal-tabs" style="display:flex; justify-content:center; margin-bottom: 20px;">
            <button class="modal-tab-button active" data-tab-content="counters">COUNTER'LAR</button>
            <button class="modal-tab-button" data-tab-content="build">GÜNCEL BUILD</button>
        </div>
        
        <div id="modal-content-counters" class="modal-content-area active">
            <h3>Bu şampiyona karşı en iyi 5 seçim:</h3>
            <div class="counter-list">
    `;

    // Counter Listesi
    if (counters && counters.length > 0) {
        counters.forEach(counterName => {
            const apiCounterName = getChampionApiName(counterName); 
            const counterIconUrl = `${API_URL}${apiCounterName}.png`;
            const counterDisplayName = getDisplayChampName(counterName);
            
            modalHTML += `
                <div class="counter-card">
                    <img src="${counterIconUrl}" alt="${counterDisplayName}" /> 
                    <span>${counterDisplayName}</span>
                </div>
            `;
        });
    } else {
        modalHTML += `<p>Üzgünüz, ${displayChampName} için counter verisi bulunamadı.</p>`;
    }
    
    modalHTML += `</div></div>`; // content-area-counters bitişi

    // Build Sekmesi İçeriği
    modalHTML += `
        <div id="modal-content-build" class="modal-content-area">
            <h3>Önerilen Temel Eşya Dizilimi (4 Eşya):</h3>
            <div class="build-list">
    `;
    
    if (build.length > 0 && build[0] !== "Veri Yok") {
        build.forEach(itemName => {
            // Not: item_placeholder.png dosyasını manuel olarak oluşturmanız veya item API'dan çekmeniz gerekmektedir.
            modalHTML += `
                <div class="build-card">
                    <img src="images/item_placeholder.png" alt="${itemName}" />
                    <span>${itemName}</span>
                </div>
            `;
        });
    } else {
         modalHTML += `<p>Bu şampiyon için güncel eşya dizilimi verisi bulunamadı.</p>`;
    }

    modalHTML += `</div></div>`; // content-area-build bitişi
    
    modalBody.innerHTML = modalHTML;
    
    // Modalı göster
    modalContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
    
    // Modal sekme dinleyicilerini kur
    setupModalTabs();
}


// 6. ROL SEÇİMİ VE GRİD YÖNETİMİ (COUNTER)
function setupRoleSelector() {
    const selector = document.getElementById('role-selector');
    const buttons = selector.querySelectorAll('.tab-button');
    const grid = document.getElementById('champion-grid');
    const resultArea = document.getElementById('result-area');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const newRole = this.getAttribute('data-role');
            
            if (this.classList.contains('active')) {
                buttons.forEach(btn => btn.classList.remove('active'));
                grid.classList.remove('grid-active'); 
                resultArea.innerHTML = '<p>Lütfen bir rol seçin ve counter listesini görmek için bir şampiyona tıklayın.</p>';
                currentRoleData = null;
                populateChampionGrid(currentRoleData);
                return;
            }

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            currentRoleData = allRoleData[newRole];

            grid.classList.remove('grid-active');
            resultArea.innerHTML = ''; 

            populateChampionGrid(currentRoleData);
            grid.classList.add('grid-active');
        });
    });
}


// 7. ARAMA MANTIĞI
function filterChampionGrid(searchTerm) {
    const grid = document.getElementById('champion-grid');
    const items = grid.querySelectorAll('.champ-item-container');
    const term = searchTerm.toLowerCase();

    items.forEach(item => {
        const nameSpan = item.querySelector('span'); 
        if (nameSpan) {
            const champName = nameSpan.textContent.toLowerCase();
            if (champName.includes(term)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        }
    });
}


// 8. TIER LIST İŞLEVLERİ VE YÖNETİMİ
const TIER_STORAGE_KEY = 'customTierList';
let currentTierRole = 'top'; 

function loadTierList(role) {
    const storedData = localStorage.getItem(`${TIER_STORAGE_KEY}_${role}`);
    return storedData ? JSON.parse(storedData) : {};
}

function saveTierList(tierList, role) {
    localStorage.setItem(`${TIER_STORAGE_KEY}_${role}`, JSON.stringify(tierList));
}

function createDraggableChampIcon(champName, tier) {
    const champDiv = document.createElement('div');
    champDiv.className = 'tier-champ-icon';
    champDiv.setAttribute('draggable', 'true');
    champDiv.setAttribute('data-champ-name', champName);

    const apiName = getChampionApiName(champName); 
    const iconUrl = `${API_URL}${apiName}.png`; 
    
    const img = document.createElement('img');
    img.src = iconUrl;
    img.alt = getDisplayChampName(champName);

    champDiv.appendChild(img);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = getDisplayChampName(champName);
    champDiv.appendChild(nameSpan);

    champDiv.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', champName);
        e.currentTarget.classList.add('is-dragging');
    });

    champDiv.addEventListener('dragend', (e) => {
        e.currentTarget.classList.remove('is-dragging');
    });

    return champDiv;
}

function setupDragAndDrop() {
    document.querySelectorAll('.tier-drop-zone').forEach(dropZone => {
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('drag-over');
        });
        
        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('drag-over');
        });
        
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('drag-over');
            
            const champName = e.dataTransfer.getData('text/plain');
            const targetTier = dropZone.getAttribute('data-tier');
            const draggedElement = document.querySelector(`.tier-champ-icon[data-champ-name="${champName}"]`);

            if (draggedElement) {
                dropZone.appendChild(draggedElement);
                updateTierListInStorage(champName, targetTier);
            }
        });
    });

    document.getElementById('reset-tier-list').addEventListener('click', () => {
        if (confirm("Tier List'i sıfırlamak istediğinizden emin misiniz? Tüm şampiyonlar havuza geri dönecek.")) {
            localStorage.removeItem(`${TIER_STORAGE_KEY}_${currentTierRole}`);
            renderTierList();
        }
    });
}

function updateTierListInStorage(champName, newTier) {
    let tierList = loadTierList(currentTierRole);
    
    for (const tier in tierList) {
        tierList[tier] = tierList[tier].filter(name => name !== champName);
    }
    
    if (newTier !== 'POOL') {
        if (!tierList[newTier]) {
            tierList[newTier] = [];
        }
        tierList[newTier].push(champName);
        // İsimlere göre alfabetik sıralama
        tierList[newTier].sort((a, b) => getDisplayChampName(a).localeCompare(getDisplayChampName(b)));
    }
    
    saveTierList(tierList, currentTierRole);
}

function renderTierList() {
    const tierList = loadTierList(currentTierRole);
    const poolElement = document.getElementById('tier-champion-pool');
    
    const allRoleChamps = allChampionNamesForTierList[currentTierRole];
    
    document.querySelectorAll('.tier-drop-zone').forEach(zone => {
        zone.innerHTML = '';
    });
    
    let assignedChampions = new Set();
    
    // 1. Tier'lara atanmış şampiyonları yerleştir
    for (const tier in tierList) {
        const dropZone = document.querySelector(`.tier-drop-zone[data-tier="${tier}"]`);
        if (dropZone) {
            // Sadece mevcut roldeki şampiyonları filtrele
            tierList[tier].filter(champ => allRoleChamps.includes(champ)).forEach(champName => {
                const icon = createDraggableChampIcon(champName, tier);
                dropZone.appendChild(icon);
                assignedChampions.add(champName);
            });
        }
    }
    
    // 2. Havuza (POOL) atanmamış şampiyonları yerleştir
    allRoleChamps.sort().forEach(champName => {
        if (!assignedChampions.has(champName)) {
            const icon = createDraggableChampIcon(champName, 'POOL');
            poolElement.appendChild(icon);
        }
    });
}

function setupTierRoleSelector() {
    const tierButtons = document.querySelectorAll('.tier-role-button');
    tierButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.tier-role-button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentTierRole = this.getAttribute('data-role');
            renderTierList(); // Yeni role göre listeyi yükle
        });
    });
    document.querySelector('.tier-role-button[data-role="top"]').classList.add('active');
}

function setupMainTabs() {
    const tabs = document.querySelectorAll('.main-tab-button');
    const contents = document.querySelectorAll('.content-area');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(`${target}-content`).classList.add('active');
            
            // Eğer Counter Pick açılıyorsa
            if (target === 'counter') {
                document.getElementById('result-area').innerHTML = '<p>Lütfen bir rol seçin ve counter listesini görmek için bir şampiyona tıklayın.</p>';
                document.getElementById('champion-grid').classList.remove('grid-active');
                
                // Rol butonu seçimini kaldır ve arama çubuğunu devre dışı bırak
                document.querySelectorAll('#role-selector .tab-button').forEach(btn => btn.classList.remove('active'));
                document.getElementById('champion-search').disabled = true;
                document.getElementById('champion-search').value = '';
                document.getElementById('champion-grid').innerHTML = ''; 
            } 
            // Eğer Tier List açılıyorsa
            else if (target === 'tier') {
                const activeTierButton = document.querySelector('.tier-role-button.active');
                if(activeTierButton) {
                    currentTierRole = activeTierButton.getAttribute('data-role');
                } else {
                    currentTierRole = 'top'; 
                    document.querySelector('.tier-role-button[data-role="top"]').classList.add('active');
                }
                renderTierList();
                setupDragAndDrop();
            }
        });
    });
}

// Modal Kapatma İşlevselliği
function setupModalListeners() {
    const modalContainer = document.getElementById('modal-container');
    const closeModalButton = document.getElementById('close-modal');

    // Kapatma butonuna tıklama
    closeModalButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
        document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
    });

    // Modal dışına tıklama
    window.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
            document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
        }
    });
}


// 9. SAYFA YÜKLENİNCE BAŞLAT
window.onload = function() {
    setupMainTabs(); 
    setupRoleSelector(); 
    setupTierRoleSelector();
    setupModalListeners(); // Modal dinleyicilerini kur

    // Arama dinleyicisini SADECE bir kez kur, rol değişiminden bağımsız çalışır
    document.getElementById('champion-search').addEventListener('input', (e) => filterChampionGrid(e.target.value));
    
    // Varsayılan olarak Counter Pick sekmesini aç
    document.querySelector('.main-tab-button[data-tab="counter"]').classList.add('active');
    document.getElementById('counter-content').classList.add('active');
    document.getElementById('champion-search').disabled = true; // Başlangıçta arama çubuğu kapalı olmalı
};