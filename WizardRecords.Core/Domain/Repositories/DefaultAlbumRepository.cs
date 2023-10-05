using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultAlbumRepository : IAlbumRepository {

        private readonly List<Album> _albums = new() {
            // AlbumId, ArtistId, Qty, Price, Title
            // TODO: Transferer les données à la BD une fois l'implémentation faite
            new Album(1, 1, 5, 24.99f, "After Dark", MediaType.CD, "essenger_after_dark.jpg"),
            new Album(2, 2, 3, 19.99f, "Tyrant", MediaType.CD, "aversions_crown_tyrant.jpg"),
            new Album(3, 3, 2, 29.99f, "How To Survive A Funeral", MediaType.VINYL, "make_them_suffer_how_to_survive_a_funeral.jpg"),
            new Album(4, 4, 1, 39.99f, "L\'Enfant Sauvage", MediaType.VINYL, "gojira_l_enfant_sauvage.jpg"),
            new Album(5, 5, 2, 19.99f, "In Utero", MediaType.CD, "nirvana_in_utero.jpg"),
            new Album(6, 6, 1, 24.99f, "All Hail", MediaType.CD, "norma_jean_all_hail.jpg"),
            new Album(7, 7, 3, 29.99f, "Californication", MediaType.CD, "red_hot_chili_peppers_californication.jpg"),
            new Album(8, 8, 4, 79.99f, "Master Of Puppets", MediaType.VINYL, "metallica_master_of_puppets.jpg"),
            new Album(9, 9, 3, 24.99f, "Hot Fuss", MediaType.CD, "killers_hot_fuss.jpg"),
            new Album(10, 10, 1, 29.99f, "131", MediaType.CD, "emarosa_131.jpg"),
            new Album(11, 11, 1, 19.99f, "Finding God Before God Finds Me", MediaType.VINYL, "bad_omens_finding_god_before_god_finds_me.jpg"),
            new Album(12, 12, 1, 34.99f, "Sempiternal", MediaType.VINYL, "bring_me_the_horizon_sempiternal.jpg"),
            new Album(13, 13, 1, 99.99f, "1st", MediaType.CD, "fushitsusha_1st.jpg"),
            new Album(14, 14, 1, 19.99f, "One-X", MediaType.VINYL, "three_days_grace_one_x.jpg"),
            new Album(15, 15, 1, 24.99f, "From Under The Cork Tree", MediaType.VINYL, "fall_out_boy_from_under_the_cork_tree.jpg"),
            new Album(16, 5, 3, 29.99f, "Bleach", MediaType.CD, "nirvana_bleach.jpg"),
            new Album(17, 5, 2, 29.99f, "MTV Unplugged", MediaType.VINYL, "nirvana_mtv_unplugged_in_new_york.jpg"),
            new Album(18, 5, 4, 29.99f, "Nevermind", MediaType.VINYL, "nirvana_nevermind.jpg"),
            new Album(19, 7, 1, 29.99f, "Mother\'s Milk", MediaType.VINYL, "red_hot_chili_peppers_mothers_milk.jpg"),
            new Album(20, 13, 1, 119.99f, "2nd", MediaType.CD, "fushitsusha_2nd.jpg"),
            new Album(21, 16, 1, 19.99f, "As Nasty As They Wanna Be", MediaType.CD, "2_live_crew_as_nasty_as_they_wanna_be.jpg"),
            new Album(22, 17, 1, 39.99f, "The Money Store", MediaType.VINYL, "death_grips_the_money_store.jpg"),
            new Album(23, 17, 1, 999.99f, "Ex-Military", MediaType.VINYL, "death_grips_ex_military.jpg"),
            new Album(24, 18, 1, 49.99f, "The College Dropout", MediaType.CD, "west_kanye_the_college_dropout.jpg"),
            new Album(25, 19, 1, 29.99f, "Pink Moon", MediaType.VINYL, "drake_nick_pink_moon.jpg"),
            new Album(26, 20, 1, 34.99f, "Music Has The Right To Children", MediaType.VINYL, "boards_of_canada_music_has_the_right_to_children.jpg"),
            new Album(27, 20, 1, 39.99f, "Geogaddi", MediaType.VINYL, "boards_of_canada_geogaddi.jpg"),
            new Album(28, 21, 1, 4.99f, "I Remember Yesterday", MediaType.CD, "summer_donna_i_remember_yesterday.jpg"),
            new Album(29, 22, 1, 2.99f, "Spirits Have Flown", MediaType.VINYL, "bee_gees_spirits_having_flown.jpg"),
            new Album(30, 23, 1, 19.99f, "Arrival", MediaType.CD, "abba_arrival.jpg"),
            new Album(31, 23, 1, 19.99f, "ABBA", MediaType.VINYL, "abba_abba.jpg"),
            new Album(32, 24, 2, 34.99f, "Thriller", MediaType.VINYL, "jackson_michael_thriller.jpg"),
            new Album(33, 24, 2, 34.99f, "Bad", MediaType.VINYL, "jackson_michael_bad.jpg"),
            new Album(34, 25, 1, 19.99f, "The Pleasure Principle", MediaType.CD, "numan_gary_the_pleasure_principle.jpg"),
            new Album(35, 26, 1, 39.99f, "Bitches Brew", MediaType.VINYL, "davis_miles_bitches_brew.jpg"),
            new Album(36, 26, 1, 39.99f, "Filles De Kilimanjaro", MediaType.VINYL, "davis_miles_filles_de_kilimanjaro.jpg"),
            new Album(37, 26, 1, 39.99f, "Miles In The Sky", MediaType.VINYL, "davis_miles_miles_in_the_sky.jpg"),
            new Album(38, 26, 1, 39.99f, "On The Corner", MediaType.VINYL, "davis_miles_on_the_corner.jpg"),
            new Album(38, 26, 1, 39.99f, "Big Fun", MediaType.VINYL, "davis_miles_big_fun.jpg"),
            new Album(38, 26, 1, 39.99f, "Black Beauty (Miles Davis At Fillmore West)", MediaType.VINYL, "davis_miles_black_beauty.jpg"),
            new Album(39, 27, 1, 29.99f, "A Love Supreme", MediaType.CD, "coltrane_john_a_love_supreme.jpg"),
            new Album(40, 27, 1, 49.99f, "Ascension", MediaType.VINYL, "coltrane_john_ascension_edition_i.jpg"),
            new Album(41, 28, 1, 29.99f, "Machine Gun", MediaType.VINYL, "brotzmann_peter_machine_gun.jpg"),
            new Album(42, 29, 1, 29.99f, "Mingus Mingus Mingus Mingus Mingus", MediaType.VINYL, "mingus_charles_mingus_mingus_mingus_mingus_mingus.jpg"),
            new Album(43, 30, 1, 149.99f, "Les Stances A Sophie", MediaType.VINYL, "art_ensemble_of_chicago_les_stances_a_sophie.jpg"),
            new Album(44, 31, 1, 29.99f, "Naked City", MediaType.VINYL, "naked_city_naked_city.jpg"),
            new Album(45, 32, 2, 29.99f, "Abbey Road", MediaType.VINYL, "beatles_abbey_road.jpg"),
            new Album(46, 32, 1, 199.99f, "Magical Mystery Tour", MediaType.VINYL, "beatles_magical_mystery_tour.jpg"),
            new Album(47, 32, 1, 29.99f, "Revolver", MediaType.CD, "beatles_revolver.jpg"),
            new Album(48, 32, 2, 29.99f, "Rubber Soul", MediaType.CD, "beatles_rubber_soul.jpg"),
            new Album(49, 32, 3, 49.99f, "Sgt. Pepper\'s Lonely Hearts Club Band", MediaType.VINYL, "beatles_sgt_peppers_lonely_hearts_club_band.jpg"),
            new Album(50, 32, 1, 29.99f, "The Beatles (White Album)", MediaType.VINYL, "beatles_white_album.jpg"),
            new Album(51, 33, 1, 29.99f, "Behind The Music", MediaType.VINYL, "soundtrack_of_our_lives_behind_the_music.jpg"),
            new Album(52, 34, 1, 1499.99f, "The Well-Tuned Piano", MediaType.VINYL, "young_lamonte_the_well_tuned_piano.jpg"),
            new Album(53, 35, 1, 199.99f, "Koyaanisqatsi", MediaType.VINYL, "soundtrack_koyaanisqatsi.jpg"),
            new Album(54, 36, 1, 29.99f, "Undertale", MediaType.VINYL, "soundtrack_undertale.jpg"),
            new Album(55, 37, 1, 99.99f, "Après Ski", MediaType.VINYL, "soundtrack_apres_ski.jpg"),
            new Album(56, 38, 1, 29.99f, "The Glagolitic Mass", MediaType.VINYL, "janacek_leos_glagolitic_mass.jpg"),
            new Album(57, 39, 1, 9.99f, "Sonatas", MediaType.VINYL, "scarlatti_domenico_sonatas_landowska.jpg"),
            new Album(58, 40, 1, 4.99f, "Symphony No. 9", MediaType.CD, "beethoven_ludwig_von_symphony_no_9.jpg"),
            new Album(59, 41, 1, 9.99f, "The Well-Tempered Clavier", MediaType.VINYL, "bach_johann_sebastian_the_well_tempered_clavier.jpg"),
            new Album(59, 41, 1, 29.99f, "The Brandenburg Concertos", MediaType.VINYL, "bach_johann_sebastian_the_brandenburg_concertos_marriner.jpg"),
            new Album(60, 42, 1, 79.99f, "Maggot Brain", MediaType.VINYL, "funkadelic_maggot_brain.jpg"),
            new Album(61, 43, 1, 29.99f, "The Budos Band III", MediaType.VINYL, "budos_band_iii.jpg"),
            new Album(62, 44, 1, 39.99f, "Expensive Shit", MediaType.VINYL, "kuti_fela_expensive_shit.jpg"),
            new Album(63, 45, 1, 19.99f, "Mambo", MediaType.CD, "sumac_yma_mambo.jpg"),
            new Album(64, 45, 1, 19.99f, "Voice Of The Xtabay", MediaType.VINYL, "sumac_yma_voice_of_the_xtabay.jpg"),
            new Album(65, 46, 2, 29.99f, "Legend - The Best Of Bob Marley", MediaType.CD, "marley_bob_legend_the_best_of.jpg"),
            new Album(66, 47, 1, 44.99f, "Black Mill Tapes Volumes 1 & 2", MediaType.VINYL, "pye_corner_audio_the_black_mill_tapes_volumes_1_2.jpg"),
            new Album(67, 48, 1, 39.99f, "Amber", MediaType.VINYL, "autechre_amber.jpg"),
            new Album(68, 48, 1, 89.99f, "Oversteps", MediaType.VINYL, "autechre_oversteps.jpg"),
            new Album(69, 49, 1, 24.99f, "Windowlicker", MediaType.VINYL, "aphex_twin_windowlicker.jpg"),
            new Album(70, 49, 1, 599.99f, "Selected Ambient Works Volume II", MediaType.VINYL, "aphex_twin_selected_ambient_works_volume_ii.jpg"),
            new Album(71, 50, 1, 19.99f, "The Real Folk Blues", MediaType.VINYL, "howlin_wolf_the_real_folk_blues.jpg"),
            new Album(72, 51, 1, 24.99f, "Burnin\'", MediaType.CD, "hooker_john_lee_burnin.jpg"),
            new Album(73, 52, 1, 19.99f, "King Of The Delta Blues", MediaType.VINYL, "johnson_robert_king_of_the_delta_blues.jpg"),
            new Album(74, 53, 1, 24.99f, "Leadbelly", MediaType.VINYL, "leadbelly_leadbelly.jpg"),
            new Album(75, 54, 1, 29.99f, "Peng!", MediaType.VINYL, "stereolab_peng.jpg"),
            new Album(76, 54, 1, 29.99f, "Transient Noise Bursts With Announcements", MediaType.VINYL, "stereolab_transient_noise_bursts_with_announcements.jpg"),
            new Album(77, 54, 1, 29.99f, "Emperor Tomato Ketchup", MediaType.VINYL, "stereolab_emperor_tomato_ketchup.jpg"),
            new Album(78, 55, 1, 34.99f, "Surfer Rosa", MediaType.VINYL, "pixies_surfer_rosa.jpg"),
            new Album(79, 55, 1, 34.99f, "Doolitlle", MediaType.VINYL, "pixies_doolittle.jpg"),
            new Album(80, 55, 1, 34.99f, "Bossanova", MediaType.VINYL, "pixies_bossanova.jpg"),
            new Album(81, 55, 1, 34.99f, "Trompe Le Monde", MediaType.CD, "pixies_trompe_le_monde.jpg"),
            new Album(82, 56, 1, 29.99f, "Dandelion Gum", MediaType.VINYL, "black_moth_super_rainbow_dandelion_gum.jpg"),
            new Album(83, 57, 1, 29.99f, "The Head On The Door", MediaType.VINYL, "cure_the_head_on_the_door.jpg"),
            new Album(84, 57, 1, 39.99f, "Disintegration", MediaType.VINYL, "cure_disintegration.jpg"),
            new Album(85, 57, 1, 29.99f, "Kiss Me, Kiss Me, Kiss Me", MediaType.VINYL, "cure_kiss_me_kiss_me_kiss_me.jpg"),
            new Album(86, 58, 2, 24.99f, "Curtis", MediaType.VINYL, "mayfield_curtis_curtis.jpg"),
            new Album(87, 58, 1, 24.99f, "Roots", MediaType.CD, "mayfield_curtis_roots.jpg"),
            new Album(88, 59, 1, 29.99f, "Night Beat", MediaType.CD, "cooke_sam_night_beat.jpg"),
            new Album(89, 60, 1, 24.99f, "Lady Soul", MediaType.CD, "franklin_aretha_lady_soul.jpg"),
            new Album(90, 61, 1, 24.99f, "Where Did Our Love Go", MediaType.VINYL, "supremes_where_did_our_love_go.jpg"),
            new Album(91, 62, 2, 24.99f, "Joy As An Act Of Resistance", MediaType.VINYL, "idles_joy_as_an_act_of_resistance.jpg"),
            new Album(92, 63, 1, 24.99f, "Ramones", MediaType.VINYL, "ramones_ramones.jpg"),
            new Album(93, 63, 1, 24.99f, "Rocket To Russia", MediaType.VINYL, "ramones_rocket_to_russia.jpg"),
            new Album(94, 63, 1, 24.99f, "It\'s Alive", MediaType.CD, "ramones_its_alive.jpg"),
            new Album(95, 64, 1, 49.99f, "Gas", MediaType.VINYL, "gas_gas.jpg"),
            new Album(96, 64, 1, 49.99f, "Zauberberg", MediaType.VINYL, "gas_zauberberg.jpg"),
            new Album(97, 64, 1, 49.99f, "Konigsforst", MediaType.VINYL, "gas_konigsforst.jpg"),
            new Album(98, 64, 1, 49.99f, "Pop", MediaType.VINYL, "gas_pop.jpg"),
            new Album(99, 65, 1, 24.99f, "The Stooges", MediaType.VINYL, "stooges_stooges.jpg"),
            new Album(100, 65, 1, 24.99f, "Fun House", MediaType.VINYL, "stooges_funhouse.jpg"),
            new Album(101, 65, 1, 24.99f, "Raw Power", MediaType.VINYL, "stooges_raw_power.jpg"),
            new Album(102, 66, 1, 24.99f, "Nonagon Infinity", MediaType.VINYL, "king_gizzard_and_the_lizard_wizard_nonagon_infinity.jpg"),
            new Album(103, 66, 1, 24.99f, "I\'m In Your Mind Fuzz", MediaType.VINYL, "king_gizzard_and_the_lizard_wizard_im_in_your_mind_fuzz.jpg"),
            new Album(104, 66, 1, 24.99f, "Infest The Rats\' Nest", MediaType.VINYL, "king_gizzard_and_the_lizard_wizard_infest_the_rats_nest.jpg"),
            new Album(105, 66, 1, 24.99f, "Petrodragonic Apocalypse; Or, Dawn Of Eternal Night: An Annihilation Of Planet Earth And The Beginning Of Merciless Damnation", MediaType.VINYL, "king_gizzard_and_the_lizard_wizard_petradragonic.jpg"),
            new Album(106, 66, 1, 29.99f, "Float Along - Fill Your Lungs", MediaType.VINYL, "king_gizzard_and_the_lizard_wizard_float_along_fill_your_lungs.jpg"),
            new Album(107, 67, 1, 44.99f, "Face Stabber", MediaType.VINYL, "thee_oh_sees_face_stabber.jpg"),
            new Album(108, 68, 2, 29.99f, "Elephant", MediaType.VINYL, "white_stripes_elephant.jpg"),
            new Album(109, 68, 1, 29.99f, "De Stijl", MediaType.VINYL, "white_stripes_de_stijl.jpg"),
            new Album(110, 68, 1, 29.99f, "The White Stripes", MediaType.VINYL, "white_stripes_white_stripes.jpg"),
            new Album(111, 68, 3, 29.99f, "White Blood Cells", MediaType.VINYL, "white_stripes_white_blood_cells.jpg"),
            new Album(112, 69, 1, 69.99f, "Blue", MediaType.VINYL, "mitchell_joni_blue.jpg"),
            new Album(113, 69, 1, 49.99f, "Clouds", MediaType.VINYL, "mitchell_joni_clouds.jpg"),
            new Album(114, 70, 1, 49.99f, "First Utterance", MediaType.VINYL, "comus_first_utterance.jpg"),
            new Album(115, 71, 1, 34.99f, "The Hangman\'s Beautiful Daughter", MediaType.VINYL, "incredible_string_band_the_hangmans_beautiful_daughter.jpg"),
            new Album(116, 71, 1, 34.99f, "The 5000 Spirits Or The Layers Of The Onion", MediaType.VINYL, "incredible_string_band_the_5000_spirits_or_the_layers_of_the_onion.jpg"),
            new Album(117, 72, 1, 39.99f, "Everybody Knows This Is Nowhere", MediaType.CD, "young_neil_everybody_knows_this_is_nowhere.jpg"),
            new Album(118, 72, 1, 39.99f, "After The Gold Rush", MediaType.VINYL, "young_neil_after_the_gold_rush.jpg"),
            new Album(119, 73, 1, 24.99f, "Head Hunters", MediaType.CD, "hancock_herbie_head_hunters.jpg"),
            new Album(120, 73, 1, 29.99f, "Future Shock", MediaType.VINYL, "hancock_herbie_future_shock.jpg"),
            new Album(121, 74, 1, 39.99f, "Led Zeppelin", MediaType.VINYL, "led_zeppelin_i.jpg"),
            new Album(122, 74, 1, 39.99f, "Led Zeppelin II", MediaType.VINYL, "led_zeppelin_ii.jpg"),
            new Album(123, 74, 1, 39.99f, "Led Zeppelin III", MediaType.VINYL, "led_zeppelin_iii.jpg"),
            new Album(124, 74, 2, 39.99f, "Untitled", MediaType.CD, "led_zeppelin_untitled.jpg"),
            new Album(125, 75, 1, 39.99f, "Squawk", MediaType.VINYL, "budgie_squawk.jpg"),
            new Album(126, 76, 1, 39.99f, "L.A. Woman", MediaType.VINYL, "doors_l_a_woman.jpg"),
            new Album(126, 76, 1, 39.99f, "Strange Days", MediaType.VINYL, "doors_strange_days.jpg"),
            new Album(127, 76, 1, 39.99f, "Waiting For The Sun", MediaType.VINYL, "doors_waiting_for_the_sun.jpg"),
            new Album(128, 77, 2, 29.99f, "Awaken, My Love!", MediaType.VINYL, "childish_gambino_awaken_my_love.jpg"),
            new Album(129, 78, 2, 29.99f, "To Pimp A Butterfly", MediaType.VINYL, "lamar_kendrick_to_pimp_a_butterfly.jpg"),
            new Album(130, 79, 1, 29.99f, "Rainforest", MediaType.CD, "clams_casino_rainforest.jpg"),
            new Album(131, 80, 1, 34.99f, "Houdini", MediaType.VINYL, "melvins_houdini.jpg"),
            new Album(132, 80, 1, 39.99f, "Bullhead", MediaType.VINYL, "melvins_bullhead.jpg"),
            new Album(133, 80, 1, 39.99f, "Ozma", MediaType.VINYL, "melvins_ozma.jpg"),
            new Album(134, 81, 1, 34.99f, "Not Available", MediaType.VINYL, "residents_not_available.jpg"),
            new Album(135, 81, 1, 34.99f, "Duck Stab / Buster & Glen", MediaType.VINYL, "residents_duck_stab_buster_and_glenn.jpg"),
            new Album(136, 81, 1, 34.99f, "Eskimo", MediaType.VINYL, "residents_eskimo.jpg"),
            new Album(137, 82, 1, 24.99f, "The No Comprendo", MediaType.VINYL, "rita_mitsouko_the_no_comprendo.jpg"),
            new Album(138, 83, 1, 1.99f, "Vous Souvenez-Vous De...", MediaType.CD, "gignac_fernand_vous_souvenez_vous_de.jpg"),
            new Album(139, 84, 1, 49.99f, "D\'Eux", MediaType.CD, "dion_celine_d_eux.jpg"),
            new Album(140, 84, 1, 49.99f, "Unison", MediaType.VINYL, "dion_celine_unison.jpg"),
            new Album(141, 84, 1, 29.99f, "Des Mots Qui Sonnent", MediaType.VINYL, "dion_celine_des_mots_qui_sonnent.jpg"),
            new Album(142, 85, 1, 4.99f, "Noël Avec Ginette Reno", MediaType.VINYL, "reno_ginette_noel_avec_ginette_reno.jpg"),
            new Album(142, 85, 1, 4.99f, "Ginette En Amour", MediaType.VINYL, "reno_ginette_ginette_en_amour.jpg"),
            new Album(143, 86, 1, 39.99f, "L\'Amour Est Sans Pitié", MediaType.VINYL, "leloup_jean_l_amour_est_sans_pitie.jpg"),
            new Album(144, 87, 1, 2.99f, "Obsession", MediaType.CD, "lapointe_eric_obsession.jpg"),
            new Album(145, 88, 1, 29.99f, "At Folsom Prison", MediaType.VINYL, "cash_johnny_at_folsom_prison.jpg"),
            new Album(146, 88, 1, 29.99f, "At San Quentin", MediaType.VINYL, "cash_johnny_at_san_quentin.jpg"),
            new Album(147, 88, 1, 29.99f, "American Recordings", MediaType.VINYL, "cash_johnny_american_recordings.jpg"),
            new Album(148, 89, 1, 24.99f, "Jolene", MediaType.VINYL, "parton_dolly_jolene.jpg"),
            new Album(149, 90, 1, 39.99f, "Let It Bleed", MediaType.VINYL, "rolling_stones_let_it_bleed.jpg"),
            new Album(150, 90, 1, 34.99f, "Aftermath", MediaType.VINYL, "rolling_stones_aftermath.jpg"),
            new Album(151, 91, 1, 29.99f, "Me And Bobby McGee", MediaType.VINYL, "kristofferson_kris_me_and_bobby_mcgee.jpg"),
            new Album(152, 92, 1, 29.99f, "Red Headed Stranger", MediaType.CD, "nelson_willie_red_headed_stranger.jpg"),
            new Album(153, 93, 1, 34.99f, "The Transfiguration Of Blind Joe Death", MediaType.VINYL, "fahey_john_the_transfiguration_of_blind_joe_death.jpg"),
            new Album(154, 93, 1, 34.99f, "The Yellow Princess", MediaType.CD, "fahey_john_the_yellow_princess.jpg"),
            new Album(155, 94, 1, 24.99f, "Elite Hotel", MediaType.VINYL, "harris_emmylou_elite_hotel.jpg"),
            new Album(156, 95, 1, 29.99f, "When We All Fall Asleep, Where Do We Go?", MediaType.VINYL, "eilish_billie_when_we_all_fall_asleep_where_do_we_go.jpg"),
            new Album(157, 96, 2, 34.99f, "Magdalene", MediaType.VINYL, "fka_twigs_magdalene.jpg"),
            new Album(158, 96, 1, 34.99f, "LP1", MediaType.VINYL, "fka_twigs_lp1.jpg"),
            new Album(159, 97, 1, 29.99f, "Debut", MediaType.CD, "bjork_debut.jpg"),
            new Album(160, 97, 1, 29.99f, "Post", MediaType.CD, "bjork_post.jpg"),
            new Album(161, 97, 1, 29.99f, "Homogenic", MediaType.CD, "bjork_homogenic.jpg"),
            new Album(162, 97, 1, 29.99f, "Vespertine", MediaType.CD, "bjork_vespertine.jpg"),
            new Album(163, 98, 3, 29.99f, "Lemonade", MediaType.VINYL, "beyonce_lemonade.jpg"),
            new Album(164, 99, 1, 29.99f, "Born To Die", MediaType.VINYL, "del_rey_lana_born_to_die.jpg"),
            new Album(165, 99, 1, 29.99f, "Ultraviolence", MediaType.VINYL, "del_rey_lana_ultraviolence.jpg"),
            new Album(166, 100, 1, 39.99f, "C\'est Pas Possible!", MediaType.CD, "lamour_normand_cest_pas_possible.jpg"),
            new Album(167, 101, 1, 34.99f, "Total 7", MediaType.CD, "various_total_7.jpg"),
            new Album(168, 102, 1, 29.99f, "No Alternative", MediaType.CD, "various_no_alternative.jpg"),
            new Album(169, 103, 1, 19.99f, "The Music Of Islam", MediaType.CD, "various_the_music_of_islam.jpg"),
            new Album(170, 74, 1, 19.99f, "Untitled", MediaType.VINYL, "led_zeppelin_untitled.jpg"),
            new Album(171, 98, 3, 29.99f, "Lemonade", MediaType.CD, "beyonce_lemonade.jpg"),
        };

        public IEnumerable<Album> GetAllAlbums() => _albums.AsEnumerable();

        public IEnumerable<Album> GetAlbumsByArtistId(int artistId) {
            var albumsByArtist = _albums.Where(a => a.ArtistId == artistId).ToList();
            if (albumsByArtist.Count() == 0) {
                throw new ArgumentException($"No albums found for artist {artistId}");
            }
            return albumsByArtist.AsEnumerable();
        }

        public IEnumerable<Album> GetAlbumsByGenre(AlbumGenre albumGenre) {
            var albumsByGenre = _albums.Where(a => a.AlbumGenre == albumGenre);
            if (albumsByGenre.Count() == 0) {
                throw new ArgumentException($"No albums found for genre {albumGenre}");
            }
            return albumsByGenre.AsEnumerable();
        }

        public IEnumerable<Album> GetAlbumsByMediaType(MediaType albumMediaType) {
            var albumsByMediaType = _albums.Where(a => a.Media == albumMediaType);
            if (albumsByMediaType.Count() == 0) {
                throw new ArgumentException($"No albums found for media type {albumMediaType}");
            }
            return albumsByMediaType.AsEnumerable();
        }

        public IEnumerable<Album> GetAlbumsByCategory(Category albumCategory) {
            var albumsByCategory = _albums.Where(a => a.Category == albumCategory);
            if (albumsByCategory.Count() == 0) {
                throw new ArgumentException($"No albums found for category {albumCategory}");
            }
            return albumsByCategory.AsEnumerable();
        }

        public Album GetAlbumById(int albumId) {
            var albumById = _albums.Find(a => a.AlbumId == albumId);
            if (albumById == null) {
                throw new ArgumentException($"Album with id {albumId} not found");
            }
            return albumById;
        }

        public Album GetAlbumByTitle(string title) {
            var albumByTitle = _albums.Find(a => a.Title == title);
            if (albumByTitle == null) {
                throw new ArgumentException($"Album with title {title} not found");
            }
            return albumByTitle;
        }

        public Album GetRandomAlbum() {
            Random rdm = new Random();
            int rdmAlbumId = rdm.Next(1, _albums.Count());
            return GetAlbumById(rdmAlbumId);
        }

        // TODO: Sort by price, sort alphabetically, etc.
    }
}
