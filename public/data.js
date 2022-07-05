// Statistiques
var DCTC = "DGT Crit/Taux Crit";
var DC = "DGT Crit";
var TC = "Taux Crit";

var ATK = "Attaque %";
var PV = "PV %";
var EM = "Maitrise Elementaire";
var sEM = "Maitrise"

var ER = "Recharge Énergie";
var sER = "Recharge"

var DEF = "Défense %";

var CRYO = "Cryo";
var PYRO = "Pyro";
var ELECTRO = "Electro";
var ANEMO = "Anemo";
var HYDRO = "Hydro";
var GEO = "Geo";
var PHYSIC = "Physique";
var SOIN = "Soin";

// Aptitudes
var NORMAL = "Attaque normale";
var SKILL = "Compétence élémentaire";
var BURST = "Déchainement élémentaire";

const Sword = {
    // 5 Stars
    Futsu : "Lune ondulante de Futsu",
    Falcon : "Épée du faucon",
    Azur : "Lame de la Voûte d'Azur",
    Sommet : "Tranche-Sommets",
    Jade : "Coupeur de jade primordial",
    Brume : "Reflet de tranche-brume",
    Serment : "Serment de la liberté",
    // 4 Stars
    Iron : "Piqûre de fer",
    Lion : "Rugissement du lion",
    Rituel : "Épée rituelle",
    Royal : "Épée longue royale",
    Rochenoir : "Épée longue de Rochenoire",
    Favonus : "Épée de Favonius",
    BlackSword : "Épée noire",
    Flute : "La flûte",
    Descente : "Epée de la descente",
    Croc : "Croc Suppurant",
    Eclair : "Eclair des impasses",
    Amenoma : "Lame kageuchi d'Amenoma",
    Prototype : "Tailleur de pierre",
    Cinabre : "Fuseau de cinabre",
    // 3 Stars
    Celeste : "Épée Céleste",
    DarkIron : "Épée en fer noir",
    Aube : "Messager de l'Aube",
    Froide : "Lame froide",
    Voyageur : "Épée du voyageur",
    Couteau : "Couteau à filets",
}

const Bow = {
    // 5 Stars
    Amos : "Arc d'Amos",
    Azur : "Ailes de la Voûte d'Azur",
    Soupir : "Ultime soupir",
    Tonerre : "Pulsation du tonnerre",
    Polaire : "Étoile polaire",
    // 4 Stars
    Favonus : "Arc de chasse de Favonius",
    Moon : "Lune paisible",
    Pilies : "Arc à poulies",
    Rituel : "Arc rituel",
    Rouille : "Arc rouillé",
    Rochenoir : "Arc de guerre de Rochenoire",
    Royal : "Arc royal",
    Verdoyant : "Arc de chasse verdoyant",
    Corde : "Dernière corde",
    Ode : "Ode aux alizées",
    Impasses : "Traqueur des impasses",
    Exorcisme : "Arc d'exorcisme",
    Nocturne : "Valse nocturne",
    Mouun : "Lune de Mouun",
    Predator : "Predator",
    // 3 Stars  
    Messager : "Messager",
    Pierre : "Lance-pierres",
    Courbe : "Arc courbé",
    Serment : "Serment de l'archer",
    Corbeau : "Arc du corbeau",
}

const Claymore = {
    // 5 Stars
    Corne : "Brise-pierre de corne rouge",
    Azur : "Fierté de la Voûte d'Azur",
    Wolf : "Mort-du-loup",
    Brute : "Lame brute",
    Vent : "Ode au chant du vent",
    // 4 Stars
    Espadon : "Espadon", 
    Favonus : "Espadon de Favonius",
    Dragon : "Ossature du dragon",
    Fluo : "Fluorescence", 
    Rochenoir : "Trancheuse de Rochenoire",
    Horloge : "Épée-horloge", 
    Royal : "Espadon royal",
    Ombre : "Ombre immaculée",
    Rituel : "Espadon rituel", 
    Neige : "Tombe-neige en argétoile",
    Millelithes : "Épée antique des Millelithes", 
    Nagamasa : "Espadon de Nagamasa",
    Akuoumaru : "Akuoumaru",
    Mers : "Illustre seigneur des mers", 
    // 3 Stars
    Iron : "Grande épée en fer blanc",
    Raison : "Épée de la raison",
    Sang : "Épée sanglante",
    Celeste : "Grande épée céleste",
    Shadow : "Ombre ferreuse",
}

const Polearms = {
    // 5 Stars
    Prism : "Perceur Prismatique",
    Jade : "Lance de jade ailée",
    Azur : "Berge de la Voûte d'Azur",
    Homa : "Bâton de Homa",
    Faucheur : "Lumière du faucheur",
    Calamite : "Étouffeur de calamités", 
    // 4 Stars
    Dragon : "Fléau du dragon",
    Rochenoir : "Lance de Rochenoire",
    Moon : "Pique du croissant de lune",
    Victoire : "Scion de la victoire",
    Stellaire : "Guisarme stellaire",
    Millelithes : "Lance des millelithes",
    Favonus : "Lance de Favonius",
    Vagues : "Aileron de brise-vagues",
    Dosdragon : "Lance Dosdragon",
    Royal : "Lance de chasse royale",
    Kitain : "Lance en croix de Kitain",
    Prise : "La prise",
    // 3 Stars
    Black : "Pampille noire",
    Barde : "Hallebarde",
    White : "Pampille blanche",
}

const Catalyst = {
    // 5 Stars
    Vent : "L'origine des Quatre Vents",
    Azur : "Atlas de la Voûte d'Azur",
    Chaines : "Chaînes mortelles",
    Eternelle : "Lueur de la lune éternelle",
    Kagura : "Vérité de Kagura",
    // 4 Stars
    Rochenoir : "Amulette de Rochenoire",
    Atlas : "Atlas des terres et des mers",
    Rituel : "Mémoires de rituels",
    Royal : "Grimoire royal",
    Malice : "Malice",
    Favonus : "Codex de Favonius",
    Solaire : "Perle solaire",
    Vagabond : "Mouvement vagabond",
    Perception : "Oeil de la perception",
    Frost : "Fruit du permafrost",
    Vins : "Vins et chants",
    Hakushin : "Anneau des Hakushin",
    Dodoco : "Contes de Dodoco",
    Oeil : "Oeil d'assermentation",
    // 3 Stars
    Jumelle : "Néphrite jumelle",
    Jadien : "Orbe Jadien",
    Conte : "Conte d'un autre monde",
    Dragon : "Histoire des chasseurs de dragon",
    Magie : "Guide de magie",
}

const Arte = {
    Cinabrin : "Au-delà cinabrin",
    Offrande : "Échos d'une offrande",
    Opulent : "Coquille des rêves opulents",
    Ocean : "Palourde aux teintes océaniques",
    Destin : "Emblème du destin brisé",
    Reminiscence : "Réminiscence nostalgique",
    ToM : "Ténacité du Millelithe",
    Bleme : "Flamme Blême",
    Glace : "Briseur de glace",
    Profondeurs : "Ame des profondeurs",
    Meteore : "Météore inversé",
    Roche : "Roche ancienne",
    Ancien : "Ancien rituel royal",
    Chevalerie : "Chevalerie ensanglantée",
    Feu : "Sage de la traverse de feu",
    Sorciere : "Sorcière des flammes ardentes",
    Foudre : "Dompteur de foudre",
    Colere : "Colère de tonnerre",
    Chasseuse : "Ombre de la Verte Chasseuse",
    Amour : "Amour chéri",
    Vagabonde : "Bande Vagabonde",
    Glad : "Rideau du gladiateur",
}

window.DataChara = {
    "Albedo" : {
        Type : "Geo",
        Star : "5",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    4 : [Sword.Cinabre],
                    5 : [Sword.Jade],
                    3 : [Sword.Aube], 
                },
                Artifact : {
                    1 : [Arte.Opulent],
                    2 : [Arte.Roche, Arte.Opulent],
                },
                MainStats : {
                    Sablier : DEF,
                    Coupe : GEO,
                    Casque : [DC,TC,DEF]
                },
                SubStats : {
                    DEF,
                    DCTC,
                    ATK,
                    ER
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Aloy" : {
        Type : "Cryo",
        Star : "5",
        Weapon : "Bow",
        Build : {
            1 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Bow.Tonerre],
                    4 : [Bow.Exorcisme], 
                    3 : [Bow.Pierre], 
                },
                Artifact : {
                    1 : [Arte.Reminiscence],
                    2 : [Arte.Glace],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : CRYO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    EM,
                    ER
                },
                Aptitude : {
                    BURST,
                    NORMAL,
                    SKILL
                }
            },
            2 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Bow.Polaire],
                    4 : [Bow.Corde], 
                    3 : [Bow.Pierre], 
        
                },
                Artifact : {
                    1 : [Arte.Glace,Arte.Ancien],
                    2 : [Arte.Ancien],
                },
                MainStats : {
                    Sablier : [ATK,sER],
                    Coupe : CRYO,
                    Casque : [TC,DC]
                },
                SubStats : {
                    ATK,
                    DCTC,
                    EM,
                    ER
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        },
        
    },
    "Amber" : {
        Type : "Pyro",
        Star : "4",
        Weapon : "Bow",
        Build : {
            1 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Bow.Amos],
                    4 : [Bow.Corde], 
                    3 : [Bow.Pierre], 
                },
                Artifact : {
                    1 : [Arte.Sorciere],
                    2 : [Arte.Sorciere,Arte.Ancien],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : PYRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    EM,
                    ATK,
                    ER
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL  
                }
            },
            2 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Bow.Polaire],
                    4 : [Bow.Verdoyant], 
                    3 : [Bow.Pierre], 
        
                },
                Artifact : {
                    1 : [Arte.Vagabonde],
                    2 : [Arte.Sorciere,Arte.Glad],
                },
                MainStats : {
                    Sablier : [ATK],
                    Coupe : PYRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    EM,
                    ER
                },
                Aptitude : {
                    NORMAL,
                    SKILL,
                    BURST
                }
            }
        },
        
    },
    "Kamisato Ayaka" : {
        Type : "Cryo",
        Star : "5",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Sword.Brume,Sword.Jade],
                    4 : [Sword.Amenoma,Sword.BlackSword],
                    3 : [Sword.Aube], 
                },
                Artifact : {
                    1 : [Arte.Glace],
                    2 : [Arte.Glace, Arte.Glad],
                    3 : [Arte.Glace, Arte.Ancien],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : CRYO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    BURST,
                    NORMAL,
                    SKILL
                }
            }
        }
        
    },
    "Kamisato Ayato" : {
        Type : "Hydro",
        Star : "5",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Sword.Futsu,Sword.Jade],
                    4 : [Sword.BlackSword,Sword.Rochenoir],
                    3 : [Sword.Aube], 
                },
                Artifact : {
                    1 : [Arte.Offrande],
                    2 : [Arte.Profondeurs],
                    3 : [Arte.Glad],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : HYDRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ER,
                    ATK,
                    PV
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        }
        
    },
    "Barbara" : {
        Type : "Hydro",
        Star : "4",
        Weapon : "Catalyst",
        Build : {
            1 : {
                BuildName : "Support Healeur",            
                Weapons : {
                    5 : [Catalyst.Eternelle],
                    4 : [Catalyst.Malice,Catalyst.Favonus,Catalyst.Vins],
                    3 : [Catalyst.Dragon], 
                },
                Artifact : {
                    1 : [Arte.Ocean],
                    2 : [Arte.Amour],
                    3 : [Arte.Amour, Arte.ToM],
                },
                MainStats : {
                    Sablier : [PV,ER],
                    Coupe : PV,
                    Casque : [SOIN,PV]
                },
                SubStats : {
                    PV,
                    ER,
                    DCTC,
                    ATK
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Beidou" : {
        Type : "Electro",
        Star : "4",
        Weapon : "Claymore",
        Build : {
            1 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Claymore.Wolf],
                    4 : [Claymore.Dragon], 
                    3 : [Claymore.Raison], 
                },
                Artifact : {
                    1 : [Arte.Chevalerie,Arte.Bleme],
                    2 : [Arte.Chevalerie,Arte.Glad],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : PHYSIC,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    NORMAL,
                    SKILL,
                    BURST
                }
            },
            2 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Claymore.Azur],
                    4 : [Claymore.Espadon], 
                    3 : [Claymore.Raison], 
        
                },
                Artifact : {
                    1 : [Arte.Destin],
                    2 : [Arte.Colere,Arte.Glad],
                },
                MainStats : {
                    Sablier : [ATK,sEM],
                    Coupe : ELECTRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    EM,
                    ER
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        },
        
    },
    "Bennett" : {
        Type : "Pyro",
        Star : "4",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Support Healeur",
                Weapons : {
                    5 : [Sword.Azur],
                    4 : [Sword.Croc], 
                    3 : [Sword.Celeste], 
                },
                Artifact : {
                    1 : [Arte.Ancien],
                    2 : [Arte.Amour],
                },
                MainStats : {
                    Sablier : [PV, sER],
                    Coupe : PV,
                    Casque : [SOIN,PV]
                },
                SubStats : {
                    PV,
                    ER,
                    DCTC,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            },
            2 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Sword.Brume],
                    4 : [Sword.Favonus], 
                    3 : [Sword.Celeste], 
        
                },
                Artifact : {
                    1 : [Arte.Sorciere],
                    2 : [Arte.Ancien,Arte.Sorciere],
                },
                MainStats : {
                    Sablier : [ATK,sER],
                    Coupe : PYRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        },
        
    },
    "Chongyun" : {
        Type : "Cryo",
        Star : "4",
        Weapon : "Claymore",
        Build : {
            1 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Claymore.Azur],
                    4 : [Claymore.Dragon], 
                    3 : [Claymore.Raison], 
                },
                Artifact : {
                    1 : [Arte.Glace,Arte.Ancien],
                    2 : [Arte.Ancien],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : CRYO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            },
            2 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Claymore.Wolf],
                    4 : [Claymore.Espadon], 
                    3 : [Claymore.Celeste], 
        
                },
                Artifact : {
                    1 : [Arte.Glace,Arte.Glad],
                    2 : [Arte.Glad],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : CRYO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    NORMAL,
                    BURST,
                    SKILL
                }
            }
        },
        
    },
    "Diluc" : {
        Type : "Pyro",
        Star : "5",
        Weapon : "Claymore",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Claymore.Wolf,Claymore.Vent],
                    4 : [Claymore.Dragon,Claymore.Espadon],
                    3 : [Claymore.Raison], 
                },
                Artifact : {
                    1 : [Arte.Sorciere],
                    2 : [Arte.Sorciere, Arte.Glad],
                    3 : [Arte.Sorciere, Arte.Ancien],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : PYRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    SKILL,
                    NORMAL,
                    BURST
                }
            }
        }
        
    },
    "Diona" : {
        Type : "Cryo",
        Star : "4",
        Weapon : "Bow",
        Build : {
            1 : {
                BuildName : "Support Healeur",            
                Weapons : {
                    5 : [Bow.Soupir],
                    4 : [Bow.Rituel,Bow.Favonus,Bow.Ode],
                    3 : [Bow.Courbe], 
                },
                Artifact : {
                    1 : [Arte.Ocean],
                    2 : [Arte.Amour, Arte.ToM],
                    3 : [Arte.Amour],
                },
                MainStats : {
                    Sablier : [PV,sER],
                    Coupe : PV,
                    Casque : [PV,SOIN]
                },
                SubStats : {
                    PV,
                    ER,
                    DCTC,
                    ATK
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        }
        
    },
    "Eula" : {
        Type : "Cryo",
        Star : "5",
        Weapon : "Claymore",
        Build : {
            1 : {
                BuildName : "Support Healeur",            
                Weapons : {
                    5 : [Claymore.Vent,Claymore.Wolf],
                    4 : [Claymore.Dragon,Claymore.Neige],
                    3 : [Claymore.Raison], 
                },
                Artifact : {
                    1 : [Arte.Bleme,Arte.Chevalerie],
                    2 : [Arte.Bleme],
                    3 : [Arte.Chevalerie,Arte.Glad],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : PHYSIC,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    BURST,
                    NORMAL,
                    SKILL
                }
            }
        }
        
    },
    "Fischl" : {
        Type : "Electro",
        Star : "4",
        Weapon : "Bow",
        Build : {
            1 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Bow.Tonerre],
                    4 : [Bow.Corde], 
                    3 : [Bow.Pierre], 
                },
                Artifact : {
                    1 : [Arte.Colere],
                    2 : [Arte.Colere,Arte.Vagabonde],
                },
                MainStats : {
                    Sablier : [ATK, sEM],
                    Coupe : [ELECTRO,sEM],
                    Casque : [DC,TC,sEM]
                },
                SubStats : {
                    EM,
                    DCTC,
                    ATK,
                    ER
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            },
            2 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Bow.Soupir],
                    4 : [Bow.Nocturne], 
                    3 : [Bow.Pierre], 
        
                },
                Artifact : {
                    1 : [Arte.Chevalerie,Arte.Bleme],
                    2 : [Arte.Colere,Arte.Chevalerie],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : PHYSIC,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    NORMAL,
                    SKILL,
                    BURST
                }
            }
        },
        
    },
    "Ganyu" : {
        Type : "Cryo",
        Star : "5",
        Weapon : "Bow",
        Build : {
            1 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Bow.Amos],
                    4 : [Bow.Exorcisme], 
                    3 : [Bow.Messager], 
                },
                Artifact : {
                    1 : [Arte.Vagabonde],
                    2 : [Arte.Reminiscence],
                },
                MainStats : {
                    Sablier : [ATK, sEM],
                    Coupe : CRYO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    EM,
                    ER
                },
                Aptitude : {
                    NORMAL,
                    BURST,
                    SKILL
                }
            },
            2 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Bow.Azur],
                    4 : [Bow.Favonus], 
                    3 : [Bow.Messager], 
        
                },
                Artifact : {
                    1 : [Arte.Glace,Arte.Ancien],
                    2 : [Arte.Ancien],
                },
                MainStats : {
                    Sablier : [sER, ATK],
                    Coupe : CRYO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    ER,
                    DCTC,
                    ATK,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        },
        
    },
    "Gorou" : {
        Type : "Geo",
        Star : "4",
        Weapon : "Bow",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Bow.Polaire,Bow.Soupir],
                    4 : [Bow.Rituel,Bow.Favonus],
                    3 : [Bow.Pierre], 
                },
                Artifact : {
                    1 : [Arte.Opulent],
                    2 : [Arte.Destin],
                    3 : [Arte.Roche,Arte.Opulent],
                },
                MainStats : {
                    Sablier : DEF,
                    Coupe : GEO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DEF,
                    ER,
                    DCTC,
                    ATK
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        }
        
    },
    "Hu Tao" : {
        Type : "Pyro",
        Star : "5",
        Weapon : "Polearms",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Polearms.Homa,Polearms.Jade],
                    4 : [Polearms.Dragon,Polearms.Victoire],
                    3 : [Polearms.White], 
                },
                Artifact : {
                    1 : [Arte.Sorciere],
                    2 : [Arte.Reminiscence],
                    3 : [Arte.Sorciere,Arte.ToM],
                },
                MainStats : {
                    Sablier : [PV, sEM],
                    Coupe : PYRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    EM,
                    PV,
                    ATK
                },
                Aptitude : {
                    SKILL,
                    NORMAL,
                    BURST
                }
            }
        }
        
    },
    "Arataki Itto" : {
        Type : "Geo",
        Star : "5",
        Weapon : "Claymore",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Claymore.Corne, Claymore.Azur],
                    4 : [Claymore.Dragon,Claymore.Ombre],
                    3 : [Claymore.Iron], 
                },
                Artifact : {
                    1 : [Arte.Opulent],
                    2 : [Arte.Meteore],
                    3 : [Arte.Roche,Arte.Opulent],
                },
                MainStats : {
                    Sablier : DEF,
                    Coupe : [DEF,GEO],
                    Casque : [DC,TC,DEF]
                },
                SubStats : {
                    DCTC,
                    DEF,
                    ATK,
                    ER
                },
                Aptitude : {
                    NORMAL,
                    BURST,
                    SKILL
                }
            }
        }
        
    },
    "Jean" : {
        Type : "Anemo",
        Star : "5",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Sword.Falcon, Sword.Jade],
                    4 : [Sword.Flute,Sword.Lion],
                    3 : [Sword.Couteau], 
                },
                Artifact : {
                    1 : [Arte.Chasseuse],
                    2 : [Arte.Chasseuse, Arte.Glad],
                    3 : [Arte.Amour,Arte.Glad],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : [ATK,ANEMO],
                    Casque : [SOIN,ATK]
                },
                SubStats : {
                    ATK,
                    ER,
                    EM,
                    DCTC
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Kaeya" : {
        Type : "Cryo",
        Star : "4",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Sword.Falcon],
                    4 : [Sword.Croc], 
                    3 : [Sword.Aube], 
                },
                Artifact : {
                    1 : [Arte.Glace,Arte.Glad],
                    2 : [Arte.Glace,Arte.Ancien],
                },
                MainStats : {
                    Sablier : [ATK, sER],
                    Coupe : CRYO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            },
            2 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Sword.Jade],
                    4 : [Sword.Iron], 
                    3 : [Sword.Aube], 
        
                },
                Artifact : {
                    1 : [Arte.Glace],
                    2 : [Arte.Glace,Arte.Chevalerie],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : [CRYO,PHYSIC],
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    EM,
                    ER
                },
                Aptitude : {
                    NORMAL,
                    SKILL,
                    BURST
                }
            }
        },
        
    },
    "Kaedehara Kazuha" : {
        Type : "Anemo",
        Star : "5",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Sword.Serment, Sword.Jade],
                    4 : [Sword.Iron,Sword.Eclair],
                    3 : [Sword.Aube], 
                },
                Artifact : {
                    1 : [Arte.Chasseuse],
                    2 : [Arte.Chasseuse, Arte.Glad],    
                    3 : [Arte.Amour,Arte.Vagabonde],
                },
                MainStats : {
                    Sablier : sEM,
                    Coupe : [sEM,ANEMO],
                    Casque : [sEM,DC,TC]
                },
                SubStats : {
                    EM,
                    ER,
                    DCTC,
                    ATK
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        }
        
    },
    "Keqing" : {
        Type : "Electro",
        Star : "5",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Main DPS Electro",
                Weapons : {
                    5 : [Sword.Brume],
                    4 : [Sword.BlackSword], 
                    3 : [Sword.Aube], 
                },
                Artifact : {
                    1 : [Arte.Colere,Arte.Glad],
                    2 : [Arte.Colere],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : ELECTRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    EM,
                    ER
                },
                Aptitude : {
                    SKILL,
                    NORMAL,
                    BURST
                }
            },
            2 : {
                BuildName : "Main DPS Physique",
                Weapons : {
                    5 : [Sword.Jade],
                    4 : [Sword.Rochenoir], 
                    3 : [Sword.Aube], 
        
                },
                Artifact : {
                    1 : [Arte.Bleme],
                    2 : [Arte.Chevalerie,Arte.Bleme],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : PHYSIC,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    NORMAL,
                    SKILL,
                    BURST
                }
            }
        },
        
    },
    "Klee" : {
        Type : "Pyro",
        Star : "5",
        Weapon : "Catalyst",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Catalyst.Vent, Catalyst.Azur],
                    4 : [Catalyst.Vagabond,Catalyst.Solaire],
                    3 : [Catalyst.Jumelle], 
                },
                Artifact : {
                    1 : [Arte.Sorciere],
                    2 : [Arte.Sorciere, Arte.Glad],    
                    3 : [Arte.Sorciere,Arte.Ancien],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : PYRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    EM,
                    ER
                },
                Aptitude : {
                    NORMAL,
                    BURST,
                    SKILL
                }
            }
        }
        
    },
    "Sangonomiya Kokomi" : {
        Type : "Hydro",
        Star : "5",
        Weapon : "Catalyst",
        Build : {
            1 : {
                BuildName : "DPS Healeur",
                Weapons : {
                    5 : [Catalyst.Eternelle],
                    4 : [Catalyst.Malice,Catalyst.Atlas,Catalyst.Hakushin], 
                    3 : [Catalyst.Dragon], 
                },
                Artifact : {
                    1 : [Arte.Profondeurs],
                    2 : [Arte.Profondeurs,Arte.Amour],
                },
                MainStats : {
                    Sablier : PV,
                    Coupe : HYDRO,
                    Casque : [SOIN,PV]
                },
                SubStats : {
                    PV,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            },
            2 : {
                BuildName : "Support Healeur",
                Weapons : {
                    5 : [Catalyst.Eternelle],
                    4 : [Catalyst.Malice,Catalyst.Atlas,Catalyst.Hakushin], 
                    3 : [Catalyst.Dragon], 
                },
                Artifact : {
                    1 : [Arte.Ocean],
                    2 : [Arte.Amour,Arte.ToM],
                },
                MainStats : {
                    Sablier : PV,
                    Coupe : [PV, HYDRO],
                    Casque : [SOIN,PV]
                },
                SubStats : {
                    PV,
                    ER,
                    ATK,
                    EM
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        },
        
    },
    "Kujou Sara" : {
        Type : "Electro",
        Star : "4",
        Weapon : "Bow",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Bow.Azur, Bow.Soupir],
                    4 : [Bow.Corde,Bow.Rochenoir],
                    3 : [Bow.Messager], 
                },
                Artifact : {
                    1 : [Arte.Ancien],
                    2 : [Arte.Colere, Arte.Ancien],    
                    3 : [Arte.Destin],
                },
                MainStats : {
                    Sablier : [sER, sEM, ATK],
                    Coupe : [ELECTRO, sEM],
                    Casque : [DC,TC,sEM]
                },
                SubStats : {
                    ER,
                    DCTC,
                    EM,
                    ATK
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Lisa" : {
        Type : "Electro",
        Star : "4",
        Weapon : "Catalyst",
        Build : {
            1 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Catalyst.Vent],
                    4 : [Catalyst.Rochenoir], 
                    3 : [Catalyst.Jumelle], 
                },
                Artifact : {
                    1 : [Arte.Colere,Arte.Glad],
                    2 : [Arte.Colere],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : ELECTRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    EM,
                    ER
                },
                Aptitude : {
                    NORMAL,
                    SKILL,
                    BURST
                }
            },
            2 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Catalyst.Azur],
                    4 : [Catalyst.Solaire], 
                    3 : [Catalyst.Jumelle], 
        
                },
                Artifact : {
                    1 : [Arte.Colere],
                    2 : [Arte.Colere,Arte.Ancien],
                },
                MainStats : {
                    Sablier : [ATK, sER],
                    Coupe : ELECTRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        },
        
    },
    "Mona" : {
        Type : "Hydro",
        Star : "5",
        Weapon : "Catalyst",
        Build : {
            1 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Catalyst.Vent],
                    4 : [Catalyst.Vagabond], 
                    3 : [Catalyst.Jumelle], 
                },
                Artifact : {
                    1 : [Arte.Profondeurs],
                    2 : [Arte.Reminiscence],
                },
                MainStats : {
                    Sablier : [ATK,sER],
                    Coupe : HYDRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    BURST,
                    NORMAL,
                    SKILL
                }
            },
            2 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Catalyst.Azur],
                    4 : [Catalyst.Rochenoir], 
                    3 : [Catalyst.Jumelle], 
        
                },
                Artifact : {
                    1 : [Arte.Destin],
                    2 : [Arte.Profondeurs,Arte.Ancien],
                },
                MainStats : {
                    Sablier : [ATK, sER],
                    Coupe : HYDRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        },
        
    },
    "Ningguang" : {
        Type : "Geo",
        Star : "4",
        Weapon : "Catalyst",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Catalyst.Vent, Catalyst.Azur],
                    4 : [Catalyst.Solaire,Catalyst.Rochenoir],
                    3 : [Catalyst.Jumelle], 
                },
                Artifact : {
                    1 : [Arte.Roche,Arte.Ancien],
                    2 : [Arte.Roche, Arte.Glad],    
                    3 : [Arte.Roche,Arte.Reminiscence],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : GEO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Noelle" : {
        Type : "Geo",
        Star : "4",
        Weapon : "Claymore",
        Build : {
            1 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Claymore.Corne,Claymore.Brute],
                    4 : [Claymore.Dragon,Claymore.Ombre], 
                    3 : [Claymore.Iron], 
                },
                Artifact : {
                    1 : [Arte.Opulent],
                    2 : [Arte.Meteore],
                },
                MainStats : {
                    Sablier : DEF,  
                    Coupe : [DEF, GEO],
                    Casque : [DC,TC,DEF]
                },
                SubStats : {
                    DCTC,
                    DEF,
                    ATK,
                    ER
                },
                Aptitude : {
                    NORMAL,
                    SKILL,
                    BURST
                }
            },
            2 : {
                BuildName : "Support Healeur",
                Weapons : {
                    5 : [Claymore.Corne,Claymore.Brute],
                    4 : [Claymore.Dragon,Claymore.Ombre], 
                    3 : [Claymore.Iron], 
        
                },
                Artifact : {
                    1 : [Arte.Amour],
                    2 : [Arte.Amour,Arte.Opulent],
                },
                MainStats : {
                    Sablier : DEF,
                    Coupe : DEF,
                    Casque : [DEF,SOIN]
                },
                SubStats : {
                    DEF,
                    ER,
                    DCTC,
                    ATK
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        },
        
    },
    "Qiqi" : {
        Type : "Cryo",
        Star : "5",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Support Healeur",            
                Weapons : {
                    5 : [Sword.Sommet, Sword.Falcon],
                    4 : [Sword.Flute,Sword.Lion],
                    3 : [Sword.Couteau], 
                },
                Artifact : {
                    1 : [Arte.Ocean],
                    2 : [Arte.Amour, Arte.Glad],    
                    3 : [Arte.Glad,Arte.Reminiscence],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : ATK,
                    Casque : [SOIN,ATK]
                },
                SubStats : {
                    ATK,
                    ER,
                    DCTC,
                    EM
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        }
        
    },
    "Razor" : {
        Type : "Electro",
        Star : "4",
        Weapon : "Claymore",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Claymore.Vent, Claymore.Azur],
                    4 : [Claymore.Dragon,Claymore.Rochenoir],
                    3 : [Claymore.Raison], 
                },
                Artifact : {
                    1 : [Arte.Chevalerie,Arte.Bleme],
                    2 : [Arte.Glad],    
                    3 : [Arte.Glad,Arte.Chevalerie],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : PHYSIC,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    NORMAL,
                    SKILL,
                    BURST
                }
            }
        }
        
    },
    "Rosalia" : {
        Type : "Cryo",
        Star : "4",
        Weapon : "Polearms",
        Build : {
            1 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Polearms.Jade],
                    4 : [Polearms.Dosdragon], 
                    3 : [Polearms.White], 
                },
                Artifact : {
                    1 : [Arte.Chevalerie],
                    2 : [Arte.Chevalerie,Arte.Bleme],
                },
                MainStats : {
                    Sablier : ATK,  
                    Coupe : PHYSIC,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    NORMAL,
                    BURST,
                    SKILL
                }
            },
            2 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Polearms.Azur],
                    4 : [Polearms.Prise], 
                    3 : [Polearms.White], 
        
                },
                Artifact : {
                    1 : [Arte.Glace,Arte.Ancien],
                    2 : [Arte.Glace],
                },
                MainStats : {
                    Sablier : [ATK,sER],
                    Coupe : CRYO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        },
        
    },
    "Sayu" : {
        Type : "Anemo",
        Star : "4",
        Weapon : "Claymore",
        Build : {
            1 : {
                BuildName : "Support Healeur",
                Weapons : {
                    5 : [Claymore.Wolf],
                    4 : [Claymore.Fluo], 
                    3 : [Claymore.Sang], 
                },
                Artifact : {
                    1 : [Arte.Chasseuse],
                },
                MainStats : {
                    Sablier : [ATK,sEM],  
                    Coupe : [ATK,sEM],
                    Casque : [SOIN,ATK,sEM]
                },
                SubStats : {
                    ATK,
                    EM,
                    ER,
                    DCTC
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            },
            2 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Claymore.Azur],
                    4 : [Claymore.Rituel], 
                    3 : [Claymore.Sang], 
        
                },
                Artifact : {
                    1 : [Arte.Chasseuse],
                    2 : [Arte.Chasseuse,Arte.Vagabonde],
                },
                MainStats : {
                    Sablier : sEM,
                    Coupe : [ANEMO,sEM],
                    Casque : [DC,TC,sEM]
                },
                SubStats : {
                    EM,
                    ATK,
                    DCTC,
                    ER
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        },
        
    },
    "Shenhe" : {
        Type : "Cryo",
        Star : "5",
        Weapon : "Polearms",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Polearms.Calamite, Polearms.Prism],
                    4 : [Polearms.Millelithes,Polearms.Vagues],
                    3 : [Polearms.Barde], 
                },
                Artifact : {
                    1 : [Arte.Glad, Arte.Reminiscence],
                    2 : [Arte.Destin, Arte.Glad],    
                    3 : [Arte.Ancien],
                },
                MainStats : {
                    Sablier : [ATK, sER],
                    Coupe : ATK,
                    Casque : ATK
                },
                SubStats : {
                    ATK,
                    ER,
                    DCTC,
                    EM
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        }
        
    },
    "Shogun Raiden" : {
        Type : "Electro",
        Star : "5",
        Weapon : "Polearms",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Polearms.Faucheur, Polearms.Homa],
                    4 : [Polearms.Prise,Polearms.Victoire],
                    3 : [Polearms.White], 
                },
                Artifact : {
                    1 : [Arte.Destin],
                    2 : [Arte.Destin, Arte.Colere],    
                    3 : [Arte.Colere,Arte.Glad],
                },
                MainStats : {
                    Sablier : [sER, ATK],
                    Coupe : [ATK,ELECTRO],
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ER,
                    ATK,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Sucrose" : {
        Type : "Anemo",
        Star : "4",
        Weapon : "Catalyst",
        Build : {
            1 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Catalyst.Vent],
                    4 : [Catalyst.Rituel,Catalyst.Rochenoir,Catalyst.Favonus], 
                    3 : [Catalyst.Dragon], 
                },
                Artifact : {
                    1 : [Arte.Chasseuse],
                },
                MainStats : {
                    Sablier : [sEM,sER],  
                    Coupe : sEM,
                    Casque : sEM
                },
                SubStats : {
                    EM,
                    ER,
                    DCTC,
                    ATK
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            },
            2 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Catalyst.Vent],
                    4 : [Catalyst.Rituel,Catalyst.Rochenoir,Catalyst.Favonus], 
                    3 : [Catalyst.Dragon], 
        
                },
                Artifact : {
                    1 : [Arte.Chasseuse],
                    2 : [Arte.Chasseuse,Arte.Glad],
                },
                MainStats : {
                    Sablier : [ATK,sEM],
                    Coupe : ANEMO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    EM,
                    ATK,
                    ER
                },
                Aptitude : {
                    NORMAL,
                    SKILL,
                    BURST
                }
            }
        },
        
    },
    "Tartaglia" : {
        Type : "Hydro",
        Star : "5",
        Weapon : "Bow",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Bow.Tonerre, Bow.Polaire],
                    4 : [Bow.Rouille,Bow.Exorcisme],
                    3 : [Bow.Pierre], 
                },
                Artifact : {
                    1 : [Arte.Profondeurs],
                    2 : [Arte.Profondeurs, Arte.Glad],    
                    3 : [Arte.Reminiscence],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : HYDRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    EM,
                    ER
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Thoma" : {
        Type : "Pyro",
        Star : "4",
        Weapon : "Polearms",
        Build : {
            1 : {
                BuildName : "Support Shield",            
                Weapons : {
                    5 : [Polearms.Homa, Polearms.Azur],
                    4 : [Polearms.Vagues,Polearms.Favonus],
                    3 : [Polearms.Black], 
                },
                Artifact : {
                    1 : [Arte.Sorciere,Arte.ToM],
                    2 : [Arte.Sorciere, Arte.Ancien],    
                    3 : [Arte.Sorciere,Arte.Destin],
                },
                MainStats : {
                    Sablier : PV,
                    Coupe : [PYRO,PV],
                    Casque : [PV,DC,TC]
                },
                SubStats : {
                    PV,
                    ER,
                    DCTC,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Venti" : {
        Type : "Anemo",
        Star : "5",
        Weapon : "Bow",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Bow.Soupir, Bow.Polaire],
                    4 : [Bow.Favonus,Bow.Corde],
                    3 : [Bow.Corbeau], 
                },
                Artifact : {
                    1 : [Arte.Chasseuse],
                    2 : [Arte.Chasseuse, Arte.Vagabonde],    
                    3 : [Arte.Chasseuse,Arte.Destin],
                },
                MainStats : {
                    Sablier : [sEM,sER],
                    Coupe : [sEM,ANEMO],
                    Casque : [sEM,DC,TC]
                },
                SubStats : {
                    EM,
                    ER,
                    DCTC,
                    ATK
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Aether" : {
        Type : "Anemo",
        Star : "4",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Anemo",            
                Weapons : {
                    5 : [Sword.Serment, Sword.Azur],
                    4 : [Sword.Croc,Sword.Iron],
                    3 : [Sword.Aube], 
                },
                Artifact : {
                    1 : [Arte.Chasseuse],
                    2 : [Arte.Chasseuse, Arte.Ancien],    
                    3 : [Arte.Ancien],
                },
                MainStats : {
                    Sablier : [sEM,ATK],
                    Coupe : ANEMO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            },
            2 : {
                BuildName : "Electro",            
                Weapons : {
                    5 : [Sword.Azur, Sword.Brume],
                    4 : [Sword.Croc,Sword.Rituel],
                    3 : [Sword.Aube], 
                },
                Artifact : {
                    1 : [Arte.Colere,Arte.Ancien],
                    2 : [Arte.Colere],    
                    3 : [Arte.Colere,Arte.Destin],
                },
                MainStats : {
                    Sablier : [sER,ATK],
                    Coupe : ELECTRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    ER,
                    DCTC,
                    ATK,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            },
            3 : {
                BuildName : "Geo",            
                Weapons : {
                    5 : [Sword.Sommet, Sword.Jade],
                    4 : [Sword.Croc,Sword.Rituel],
                    3 : [Sword.Aube], 
                },
                Artifact : {
                    1 : [Arte.Roche,Arte.Ancien],
                    2 : [Arte.Roche,Arte.Glad],    
                    3 : [Arte.Roche,Arte.Destin],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : GEO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        }
        
    },
    "Xiangling" : {
        Type : "Pyro",
        Star : "4",
        Weapon : "Polearms",
        Build : {
            1 : {
                BuildName : "Main DPS",
                Weapons : {
                    5 : [Polearms.Homa],
                    4 : [Polearms.Dragon], 
                    3 : [Polearms.White], 
                },
                Artifact : {
                    1 : [Arte.Bleme,Arte.Chevalerie],
                    2 : [Arte.Glad,Arte.Chevalerie],
                },
                MainStats : {
                    Sablier : ATK,  
                    Coupe : PHYSIC,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    EM
                },
                Aptitude : {
                    NORMAL,
                    BURST,
                    SKILL
                }
            },
            2 : {
                BuildName : "Support DPS",
                Weapons : {
                    5 : [Polearms.Faucheur],
                    4 : [Polearms.Prise], 
                    3 : [Polearms.White], 
        
                },
                Artifact : {
                    1 : [Arte.Destin],
                    2 : [Arte.Sorciere],
                },
                MainStats : {
                    Sablier : [ATK,sER,sEM],
                    Coupe : PYRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    EM,
                    ATK,
                    ER
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        },
        
    },
    "Xiao" : {
        Type : "Anemo",
        Star : "5",
        Weapon : "Polearms",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Polearms.Jade, Polearms.Homa],
                    4 : [Polearms.Rochenoir,Polearms.Victoire],
                    3 : [Polearms.White], 
                },
                Artifact : {
                    1 : [Arte.Chasseuse,Arte.Glad],
                    2 : [Arte.Chasseuse, Arte.Reminiscence],    
                    3 : [Arte.Chasseuse],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : ANEMO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    EM,
                    EM
                },
                Aptitude : {
                    BURST,
                    NORMAL,
                    SKILL
                }
            }
        }
        
    },
    "Xingqiu" : {
        Type : "Hydro",
        Star : "4",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Sword.Azur, Sword.Jade],
                    4 : [Sword.Rituel,Sword.Croc],
                    3 : [Sword.Aube], 
                },
                Artifact : {
                    1 : [Arte.Destin],
                    2 : [Arte.Ancien, Arte.Destin],    
                    3 : [Arte.Profondeurs,Arte.Destin],
                },
                MainStats : {
                    Sablier : [ATK,sER],
                    Coupe : HYDRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    ER,
                    DCTC,
                    ATK,
                    EM
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Xinyan" : {
        Type : "Pyro",
        Star : "4",
        Weapon : "Claymore",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Claymore.Vent, Claymore.Corne],
                    4 : [Claymore.Dragon,Claymore.Ombre],
                    3 : [Claymore.Raison], 
                },
                Artifact : {
                    1 : [Arte.Chevalerie],
                    2 : [Arte.Chevalerie, Arte.Bleme]  
                },
                MainStats : {
                    Sablier : [ATK,DEF],
                    Coupe : PHYSIC,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    DEF,
                    ER
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            },
            2 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Claymore.Vent, Claymore.Corne],
                    4 : [Claymore.Dragon,Claymore.Ombre],
                    3 : [Claymore.Raison], 
                },
                Artifact : {
                    1 : [Arte.Chevalerie, Arte.Bleme],
                    2 : [Arte.Chevalerie, Arte.Ancien]  
                },
                MainStats : {
                    Sablier : [DEF,sER],
                    Coupe : PHYSIC,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DEF,
                    ER,
                    DCTC,
                    ATK
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Yae Miko" : {
        Type : "Electro",
        Star : "5",
        Weapon : "Catalyst",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Catalyst.Kagura, Catalyst.Azur],
                    4 : [Catalyst.Vagabond,Catalyst.Oeil],
                    3 : [Catalyst.Magie], 
                },
                Artifact : {
                    1 : [Arte.Glad,Arte.Reminiscence],
                    2 : [Arte.Colere, Arte.Glad],    
                    3 : [Arte.Foudre],
                },
                MainStats : {
                    Sablier : [ATK,sER],
                    Coupe : ELECTRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ER,
                    ATK,
                    EM
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        }
        
    },
    "Yanfei" : {
        Type : "Pyro",
        Star : "4",
        Weapon : "Catalyst",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Catalyst.Vent, Catalyst.Azur],
                    4 : [Catalyst.Vagabond,Catalyst.Solaire],
                    3 : [Catalyst.Jumelle], 
                },
                Artifact : {
                    1 : [Arte.Sorciere],
                    2 : [Arte.Vagabonde],    
                    3 : [Arte.Vagabonde, Arte.Sorciere],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : PYRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    ER
                },
                Aptitude : {
                    NORMAL,
                    BURST,
                    SKILL
                }
            }
        }
        
    },
    "Yoimiya" : {
        Type : "Pyro",
        Star : "5",
        Weapon : "Bow",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    5 : [Bow.Tonerre, Bow.Polaire],
                    4 : [Bow.Rouille,Bow.Exorcisme],
                    3 : [Bow.Pierre], 
                },
                Artifact : {
                    1 : [Arte.Sorciere],
                    2 : [Arte.Reminiscence],    
                    3 : [Arte.Sorciere, Arte.Glad],
                },
                MainStats : {
                    Sablier : ATK,
                    Coupe : PYRO,
                    Casque : [DC,TC]
                },
                SubStats : {
                    DCTC,
                    ATK,
                    ER,
                    ER
                },
                Aptitude : {
                    NORMAL,
                    SKILL,
                    BURST
                }
            }
        }
        
    },
    "Yun Jin" : {
        Type : "Geo",
        Star : "4",
        Weapon : "Polearms",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Polearms.Homa, Polearms.Jade],
                    4 : [Polearms.Favonus,Polearms.Victoire],
                    3 : [Polearms.Black], 
                },
                Artifact : {
                    1 : [Arte.Opulent],
                    2 : [Arte.Destin, Arte.Opulent],    
                    3 : [Arte.Roche, Arte.Opulent],
                },
                MainStats : {
                    Sablier : DEF,
                    Coupe : [DEF, GEO],
                    Casque : DEF
                },
                SubStats : {
                    DEF,
                    DCTC,
                    ATK,
                    ER
                },
                Aptitude : {
                    BURST,
                    SKILL,
                    NORMAL
                }
            }
        }
        
    },
    "Zhongli" : {
        Type : "Geo",
        Star : "5",
        Weapon : "Polearms",
        Build : {
            1 : {
                BuildName : "Support DPS",            
                Weapons : {
                    5 : [Polearms.Homa, Polearms.Azur],
                    4 : [Polearms.Favonus,Polearms.Victoire],
                    3 : [Polearms.Black], 
                },
                Artifact : {
                    1 : [Arte.Roche,Arte.Ancien],
                    2 : [Arte.Roche, Arte.ToM],    
                    3 : [Arte.Destin],
                },
                MainStats : {
                    Sablier : PV,
                    Coupe : GEO,
                    Casque : [DC,TC,PV]
                },
                SubStats : {
                    PV,
                    DCTC,
                    ATK,
                    ER
                },
                Aptitude : {
                    SKILL,
                    BURST,
                    NORMAL
                }
            }
        }
        
    },
}   
