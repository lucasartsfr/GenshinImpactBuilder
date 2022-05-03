// Variables Noms
    // Statistiques
    var DCTC = "DGT Crit/Taux Crit";
    var DC = "DGT Crit";
    var TC = "Taux Crit";

    var ATK = "Attaque %";

    var EM = "Maitrise Elementaire";
    var sEm = "Maitrise"

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

    // Armes 5*
        // Epee
        var SwordFutsu = "Lune ondulante de Futsu";
        var SwordFalcon = "Épée du faucon";
        var SwordAzur = "Lame de la Voûte d'Azur";
        var SwordSommet = "Tranche-Sommets";
        var SwordJade = "Coupeur de jade primordial";
        var SwordBrume = "Reflet de tranche-brume";
        var SwordSerment = "Serment de la liberté";
        // Bow
        var BowAmos = "Arc d'Amos";
        var BowAzur = "Ailes de la Voûte d'Azur";
        var BowSoupir = "Ultime soupir";
        var BowTonerre = "Pulsation du tonnerre"
        var BowPolaire = "Étoile polaire";
        // Claymore
        var ClayCorne = "Brise-pierre de corne rouge";
        var ClayAsur = "Fierté de la Voûte d'Azur";
        var ClayWolf = "Mort-du-loup";
        var ClayBrute = "Lame brute";
        var ClayVent = "Ode au chant du vent"
        // Polearms
        var PolePrism ="Perceur Prismatique";
        var PoleJade = "Lance de jade ailée";
        var PoleAzur = "Berge de la Voûte d'Azur";
        var PoleHoma = "Bâton de Homa";
        var PoleFaucheur = "Lumière du faucheur";
        var PoleCalamite = "Étouffeur de calamités";
        // Catalyst 
        var CataVent = "L'origine des Quatre Vents";
        var CataAzur = "Atlas de la Voûte d'Azur";
        var CataChaines = "Chaînes mortelles";
        var CataEternelle = "Lueur de la lune éternelle";
        var CataKahura = "Vérité de Kagura";

    // Armes 4*
        // Epee
        var SwordIron = "Piqûre de fer";
        var SwordLion = "Rugissement du lion";
        var SwordRituel = "Épée rituelle";
        var SwordRoyal = "Épée longue royale";
        var SwordRochenoir = "Épée longue de Rochenoire";
        var SwordFavonus = "Épée de Favonius";
        var SwordBlackSword = "Épée noire";
        var SwordFlute = "La flûte";
        var SwordDescente = "Epée de la descente";
        var SwordCroc = "Croc Suppurant";
        var SwordEclair = "Eclair des impasses";
        var SwordAmenoma = "Lame kageuchi d'Amenoma";
        var SwordPrototype = "Tailleur de pierre";
        var SwordCinabre = "Fuseau de cinabre";
        // Bow
        var BowFavonus = "Arc de chasse de Favonius";
        var BowMoon = "Lune paisible";
        var BowPilies = "Arc à poulies";
        var BowRituel = "Arc rituel";
        var BowRouille = "Arc rouillé";
        var BowRochenoir = "Arc de guerre de Rochenoire";
        var BowRoyal = "Arc royal";
        var BowVerdoyant = "Arc de chasse verdoyant";
        var BowCorde = "Dernière corde";
        var BowOde = "Ode aux alizées";
        var BowImpasses = "Traqueur des impasses";
        var BowExorcisme = "Arc d'exorcisme";
        var BowNocturne = "Valse nocturne";
        var BowMouun = "Lune de Mouun";
        var BowPredator = "Predator";
        // Claymore
        var ClayEspadon = "Espadon"; 
        var ClayFavonus = "Espadon de Favonius";
        var ClayDragon = "Ossature du dragon";
        var ClayFluo = "Fluorescence"; 
        var ClayRochenoir = "Trancheuse de Rochenoire";
        var ClayHorloge = "Épée-horloge"; 
        var ClayRoyal = "Espadon royal";
        var ClayOmbre = "Ombre immaculée";
        var ClayRituel = "Espadon rituel"; 
        var ClayNeige = "Tombe-neige en argétoile";
        var ClayMillelithes = "Épée antique des Millelithes"; 
        var ClayNagamasa = "Espadon de Nagamasa";
        var ClayAkuoumaru = "Akuoumaru";
        var ClayMers = "Illustre seigneur des mers"; 
        // Polearms
        var PoleDragon = "Fléau du dragon";
        var PoleRochenoir = "Lance de Rochenoire";
        var PoleMoon = "Pique du croissant de lune";
        var PoleVictoire = "Scion de la victoire";
        var PoleStellaire = "Guisarme stellaire";
        var PoleMillelithes = "Lance des millelithes";
        var PoleFavonus = "Lance de Favonius";
        var PoleVagues = "Aileron de brise-vagues";
        var PoleDosdragon = "Lance Dosdragon";
        var PoleRoyal = "Lance de chasse royale";
        var PoleKitain = "Lance en croix de Kitain";
        var PolePrise = "La prise";
        // Catalyst 
        var CataRochenoir = "Amulette de Rochenoire";
        var CataAtlas = "Atlas des terres et des mers";
        var CataRituel = "Mémoires de rituels"
        var CataRoyal = "Grimoire royal";
        var CataMalice = "Malice";
        var CataFavonus = "Codex de Favonius";
        var CataSolaire = "Perle solaire";
        var CataVagabond = "Mouvement vagabond";
        var CataPerception = "Oeil de la perception";
        var CataFrost = "Fruit du permafrost";
        var CataVins = "Vins et chants";
        var CataHakushin = "Anneau des Hakushin";
        var CataDodoco = "Contes de Dodoco";
        var CataOeil = "Oeil d'assermentation";
    // Armes 3*
        // Epee
        var SwordCeleste = "Épée Céleste";
        var SwordDarkIron = "Épée en fer noir";
        var SwordAube = "Messager de l'Aube";
        var SwordFroide = "Lame froide";
        var SwordVoyageur = "Épée du voyageur";
        var SwordCouteau = "Couteau à filets";
        // Bow
        var BowMessager = "Messager";
        var BowPierre = "Lance-pierres";
        var BowCourbe = "Arc courbé";
        var BowSerment = "Serment de l'archer";
        var BowCorbeau = "Arc du corbeau";
        // Claymore
        var ClayIron = "Grande épée en fer blanc";
        var ClayRaison = "Épée de la raison";
        var ClaySang = "Épée sanglante";
        var ClayCeleste = "Grande épée céleste";
        var ClayShadow = "Ombre ferreuse";
        // Polearms
        var PoleBlack = "Pampille noire";
        var PoleBarde = "Hallebarde";
        var PoleWhite = "Pampille blanche";
        // Catalyst 
        var CataJumelle = "Néphrite jumelle";
        var CataJadien = "Orbe Jadien";
        var CataConte = "Conte d'un autre monde";
        var CataDragon = "Histoire des chasseurs de dragon";
        var CataMagie = "Guide de magie";


    // Artéfacts
    var Cinabrin = "Au-delà cinabrin"
    var Offrande = "Échos d'une offrande"
    var Opulent = "Coquille des rêves opulents"
    var Ocean = "Palourde aux teintes océaniques"
    var Destin = "Emblème du destin brisé"
    var Reminiscence = "Réminiscence nostalgique"
    var ToM = "Ténacité du Millelithe"
    var Bleme = "Flamme Blême"
    var Glace = "Briseur de glace"
    var Profondeurs = "Ame des profondeurs"
    var Meteore = "Météore inversé"
    var Roche = "Roche ancienne"
    var Ancien = "Ancien rituel royal"
    var Chevalerie = "Chevalerie ensanglantée"
    var Feu = "Sage de la traverse de feu"
    var Sorciere = "Sorcière des flammes ardentes"
    var Foudre = "Dompteur de foudre"
    var Colere = "Colère de tonnerre"
    var Chasseuse = "Ombre de la Verte Chasseuse"
    var Amour = "Amour chéri"
    var Vagabonde = "Bande Vagabonde"
    var Glad = "Rideau du gladiateur"


const DataChara = {
    "Albedo" : {
        Type : "Geo",
        Star : "5",
        Weapon : "Sword",
        Build : {
            1 : {
                BuildName : "Main DPS",            
                Weapons : {
                    4 : [SwordCinabre],
                    5 : [SwordJade],
                    3 : [SwordAube], 
                },
                Artifact : {
                    1 : [Opulent],
                    2 : [Roche, Opulent],
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
                    5 : [BowTonerre],
                    4 : [BowExorcisme], 
                    3 : [BowPierre], 
                },
                Artifact : {
                    1 : [Reminiscence],
                    2 : [Glace],
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
                    5 : [BowPolaire],
                    4 : [BowCorde], 
                    3 : [BowPierre], 
        
                },
                Artifact : {
                    1 : [Glace,Ancien],
                    2 : [Ancien],
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
                    5 : [BowAmos],
                    4 : [BowCorde], 
                    3 : [BowPierre], 
                },
                Artifact : {
                    1 : [Sorciere],
                    2 : [Sorciere,Ancien],
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
                    5 : [BowPolaire],
                    4 : [BowVerdoyant], 
                    3 : [BowPierre], 
        
                },
                Artifact : {
                    1 : [Vagabonde],
                    2 : [Sorciere,Glad],
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
   
}
module.exports = {DataChara};