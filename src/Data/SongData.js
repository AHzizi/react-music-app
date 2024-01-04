import { v4 as uuidv4 } from "uuid";

const songData = [

    {
        title: "After Dark",
        artist: "Mr.Kitty",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697515682/a6a543a0dd8f921e6c05e1987fba2170_j3dntq.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697515682/a6a543a0dd8f921e6c05e1987fba2170_j3dntq.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697515586/Mr_Kitty_-_Time_-_09_After_Dark_viz2st.flac",
        palette: "grey",
        musicLink: "https://www.youtube.com/watch?v=sVx1mJDeUjY",
        id: uuidv4(),
    },
    {
        title: "The Best Boy",
        artist: "Sukimaswitch",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1704004448/misxfuojjoyezcomueeq.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1704004448/misxfuojjoyezcomueeq.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1704004590/ekojwk8ji2ges2x7aima.mp3",
        palette: "yellow",
        id: uuidv4(),
    },
    {
        title: "Bernafas Tanpamu",
        artist: "Last Child",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1704334537/artworks-000115496165-v54kpa-original_a2gz9s.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1704334537/artworks-000115496165-v54kpa-original_a2gz9s.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1704334541/Last_Child_-_Bernafas_Tanpamu_nd2qlq.mp3",
        palette: "dark",
        id: uuidv4(),
    },
    {
        title: "Sekuat Hatimu",
        artist: "Last Child",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1704334773/artworks-000203031424-6goyft-original_lh19v7.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1704334773/artworks-000203031424-6goyft-original_lh19v7.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1704334778/Lastchild_-_Sekuat_Hatimu_pn5man.mp3",
        palette: "dark",
        id: uuidv4(),
    },
    {
        title: "Koimeguri",
        artist: "Yoh Kamiyama",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1704333996/pj0SVeyjmNchd_htawad.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1704333996/pj0SVeyjmNchd_htawad.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1704334013/01._Koimeguri_obj7ys.mp3",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "Di Sisimu | 貴方の側に。 ",
        artist: "Riria",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1704334368/Riria-Anata-no-Soba-ni_jvwfhl.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1704334368/Riria-Anata-no-Soba-ni_jvwfhl.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1704334316/01._%E8%B2%B4%E6%96%B9%E3%81%AE%E5%81%B4%E3%81%AB_gk7kwq.flac",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "Where Our Blue Is",
        artist: "Tatsuya Kitani",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697672947/Yc5VqWs43Q0hd_osyjts.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697672947/Yc5VqWs43Q0hd_osyjts.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697672953/Where_Our_Blue_Is_fznldo.mp3",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "SPECIALZ",
        artist: "King GNU",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698294403/cover_ydmnl8.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698294403/cover_ydmnl8.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698294422/01_King_Gnu_-_SPECIALZ_sdofbd.flac",
        palette: "orange",
        id: uuidv4(),
    },
    {
        title: "Chiisana Hibi | Kakushigoto OST",
        artist: "Flumpool",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1699660104/COVER_ottglt.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1699660104/COVER_ottglt.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1699660114/1_-_Chiisana_Hibi_kjwpea.flac",
        palette: "yellow",
        id: uuidv4(),
    },
    {
        title: "Idol (English Ver)",
        artist: "YOASOBI",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698294981/Cover_lai9id.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698294981/Cover_lai9id.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698294985/01._Idol_paz8lw.mp3",
        palette: "purple",
        id: uuidv4(),
    },
    {
        title: "Racing Into The Night",
        artist: "YOASOBI",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1699659918/Cover_opv2et.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1699659918/Cover_opv2et.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1699659943/01_%E5%A4%9C%E3%81%AB%E9%A7%86%E3%81%91%E3%82%8B_kldhot.flac",
        palette: "pink",
        id: uuidv4(),
    },
    {
        title: "Centimeter",
        artist: "The Peggies",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698375866/cover_hyeyyr.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698375866/cover_hyeyyr.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698375884/01_Centimeter_fzra9b.flac",
        palette: "cyan",
        id: uuidv4(),
    },
    {
        title: "If i Could Draw Life",
        artist: "YOASOBI",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698295258/Cover_1_n3awh5.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698295258/Cover_1_n3awh5.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698295219/02._If_I_Could_Draw_Life_arskwt.flac",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "Somebody That I Used To Know",
        artist: "Gotye feat. Kimbra 1988 ",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698296068/Gotye_featuring_Kimbra_-_Somebody_That_I_Used_to_Know_pnncjh.png",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698296068/Gotye_featuring_Kimbra_-_Somebody_That_I_Used_to_Know_pnncjh.png",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698296071/Gotye_feat._Kimbra_1988_Somebody_That_I_Used_To_Know_music_video_buitoe.mp3",
        palette: "grey",
        id: uuidv4(),
    },
    {
        title: "Love Letter",
        artist: "YOASOBI",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698295258/Cover_1_n3awh5.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698295258/Cover_1_n3awh5.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698295249/08._Love_Letter_iwjfoj.flac",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "The Blessing",
        artist: "YOASOBI",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698295258/Cover_1_n3awh5.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698295258/Cover_1_n3awh5.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698295238/01._The_Blessing_fhuvfr.flac",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "Romance",
        artist: "YOASOBI",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698295258/Cover_1_n3awh5.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698295258/Cover_1_n3awh5.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698295231/03._Romance_crqeq4.flac",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "Nemen",
        artist: "NDX",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697761704/ndx_zucnnc.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697761704/ndx_zucnnc.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697761708/Nemen_vjk2z2.mp3",
        palette: "teal",
        id: uuidv4(),
    },
    {
        title: "Antara Benci & Rindu",
        artist: "NDX",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697761704/ndx_zucnnc.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697761704/ndx_zucnnc.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1700707930/NDX_A.K.A_-_Antara_Benci_Dan_Rindu_ggzi0o.mp3",
        palette: "teal",
        id: uuidv4(),
    },
    {
        title: "Cahaya Cintamu",
        artist: "NDX",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698713193/Cahaya_Cintamu_neaaqp.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698713193/Cahaya_Cintamu_neaaqp.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698713044/Cahaya_Cintamu_q0s4ez.mp3",
        palette: "teal",
        id: uuidv4(),
    },
    {
        title: "Goblok",
        artist: "NDX",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698713193/Goblok_v7ngw7.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698713193/Goblok_v7ngw7.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698713045/Goblok_qfzktd.mp3",
        palette: "pink",
        id: uuidv4(),
    },
    {
        title: "Gradation",
        artist: "KANA-BOON",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697515395/maxresdefault_dlnmt6.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697515395/maxresdefault_dlnmt6.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697515400/Gradation_mnqocd.mp3",
        palette: "purple",
        id: uuidv4(),
    },
    {
        title: "幸せ | Happiness",
        artist: "Omoinotake",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697515110/Cover_wunyxj.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697515110/Cover_wunyxj.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697515101/Omoinotake_%E5%B9%B8%E3%81%9B_Official_Music_Video_rigddl.mp3",
        palette: "pink",
        id: uuidv4(),
    },
    
    {
        title: "Who's Ready For Tomorrow",
        artist: "Rat Boy, IBDY",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697093205/WhosReadyforTomorrow_dg7buq.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697093205/WhosReadyforTomorrow_dg7buq.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697091102/WhosReadyforTomorrow_ij1zsc.mp3",
        palette: "yellow",
        id: uuidv4(),
    },
   
    
    
    {
        title: "Kimi Ni Furete | 君にふれて",
        artist: "安月名莉子",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697674660/TxWJPjaXbLkhd_mol4o6.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697674660/TxWJPjaXbLkhd_mol4o6.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697674670/%E5%90%9B%E3%81%AB%E3%81%B5%E3%82%8C%E3%81%A6_ewx8wp.mp3",
        palette: "white",
        id: uuidv4(),
    },
    {
        title: "I Really Want to Stay at Your House",
        artist: "Rosa Walton & Hallie Coggins Remix By Samuel Kim & Lorien",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697680297/9B0yX0UIN9Mhd_vshu08.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697680297/9B0yX0UIN9Mhd_vshu08.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697680303/I_Really_Want_to_Stay_at_Your_House_mfeazn.mp3",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "Daisy",
        artist: "Kyo Hanabasami",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697680796/ade1Z0s2-Fshd_ez7ad1.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697680796/ade1Z0s2-Fshd_ez7ad1.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697680580/Daisy_juije7.mp3",
        palette: "yellow",
        id: uuidv4(),
    },
    {
        title: "Ekspektasi",
        artist: "Ocan Siagian & Okin",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697680796/okin-ekspektasi-feat-ocan-siagian-single_hati5b.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697680796/okin-ekspektasi-feat-ocan-siagian-single_hati5b.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697680800/Ocan_Siagian_feat._Okin_-_Ekspektasi_Official_Video_owzc19.mp3",
        palette: "orange",
        id: uuidv4(),
    },


    {
        title: "Irokousui",
        artist: "Yoh Kamiyama",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697758668/irokousui_uunmbr.png",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697758668/irokousui_uunmbr.png",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697758671/irokousui_idy6u7.mp3",
        palette: "orange",
        id: uuidv4(),
    },

    {
        title: "She Works Out Too Much",
        artist: "MGMT",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697761506/She_Works_Out_Too_Much_qt1xcy.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697761506/She_Works_Out_Too_Much_qt1xcy.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697758836/She_Works_Out_Too_Much_jibzai.mp3",
        palette: "yellow",
        id: uuidv4(),
    },
    {
        title: "When You Die",
        artist: "MGMT",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697761506/She_Works_Out_Too_Much_qt1xcy.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697761506/She_Works_Out_Too_Much_qt1xcy.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1700707714/MGMT_-_When_You_Die_wjrizp.mp3",
        palette: "yellow",
        id: uuidv4(),
    },

    {
        title: "Ghost City Tokyo",
        artist: "Ayase Cover By Jiakaira",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697759558/Ghost_City_Tokyo_ythik1.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697759558/Ghost_City_Tokyo_ythik1.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697759566/Ghost_City_Tokyo_aadm5o.mp3",
        palette: "yellow",
        id: uuidv4(),
    },

    {
        title: "Bury The Light",
        artist: "Casey Edwards",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697759558/Bury_The_Light_camr07.webp",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1697759558/Bury_The_Light_camr07.webp",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1697759603/Bury_The_Light_fo5cmd.flac",
        palette: "blue",
        id: uuidv4(),
    },

    {
        title: "COLORs",
        artist: "Sawano Hiroyuki",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698028606/O4DaFgWgyw8hd_pnfwko.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698028606/O4DaFgWgyw8hd_pnfwko.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698028608/COLORs_tkyxix.mp3",
        palette: "green",
        id: uuidv4(),
    },
    {
        title: "Yume wa Mijikashi Koiseyo Otome",
        artist: "Akiho Suzumoto",
        coverUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698293975/Cover_cvia6g.jpg",
        thumbUrl:
            "https://res.cloudinary.com/dvdola2py/image/upload/v1698293975/Cover_cvia6g.jpg",
        audio: "https://res.cloudinary.com/dvdola2py/video/upload/v1698294011/01._%E5%A4%A2%E3%81%AF%E7%9F%AD%E3%81%97%E6%81%8B%E3%81%9B%E3%82%88%E4%B9%99%E5%A5%B3_cff1rd.flac",
        palette: "cyan",
        id: uuidv4(),
    },


];

export default songData;
