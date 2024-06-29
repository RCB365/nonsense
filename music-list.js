// To add more song, just copy the following code and paste inside the array

//   {
//     name: "Here is the music name",
//     artist: "Here is the artist name",
//     img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
//     src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
//   }

//paste it inside the array as more as you want music then you don't need to do any other thing

let allMusic = [
  {
    name: "01 - Inkem Inkem Inkem Kaavaale",
    artist: "Sid Sriram",
    img: "01 - Inkem Inkem Inkem Kaavaale",
    src: "01 - Inkem Inkem Inkem Kaavaale"
  },
  {
    name: "01 - Pranaamam",
    artist: "DSP",
    img: "01 - Pranaamam",
    src: "01 - Pranaamam"
  },
  {
    name: "01 - Rao Gari Abbayi",
    artist: "Tippu",
    img: "01 - Rao Gari Abbayi",
    src: "01 - Rao Gari Abbayi"
  },
  {
    name: "01 - Shiva Shambho",
    artist: "Mike Archangelo",
    img: "01 - Shiva Shambho",
    src: "01 - Shiva Shambho"
  },
  {
    name: "1-Barbie Girl-SenSongsMp3.Co",
    artist: "Sid Sriram",
    img: "1-Barbie Girl-SenSongsMp3.Co",
    src: "1-Barbie Girl-SenSongsMp3.Co"
  },
  {
    name: "02 - Chali Chaliga",
    artist: "DSP",
    img: "02 - Chali Chaliga",
    src: "02 - Chali Chaliga"
  },
  {
    name: "02 - Fear Song",
    artist: "Tippu",
    img: "02 - Fear Song",
    src: "02 - Fear Song"
  },
  {
    name: "02 - Rock On Bro",
    artist: "Mike Archangelo",
    img: "02 - Rock On Bro",
    src: "02 - Rock On Bro"
  },
  {
    name: "02 - Samayama",
    artist: "Sid Sriram",
    img: "02 - Samayama",
    src: "02 - Samayama"
  },
  {
    name: "02 - Temper",
    artist: "Vishal",
    img: "02 - Temper",
    src: "02 - Temper"
  },
  {
    name: "2-Darlingey-SenSongsMp3.Co",
    artist: "Anurag kulakarni",
    img: "2-Darlingey-SenSongsMp3.Co",
    src: "2-Darlingey-SenSongsMp3.Co"
  },
  {
    name: "2-Uppenantha-SenSongsMp3.Co",
    artist: "Mike Archangelo",
    img: "2-Uppenantha-SenSongsMp3.Co",
    src: "2-Uppenantha-SenSongsMp3.Co"
  },
  {
    name: "03 - Apple Beauty",
    artist: "Balasubramanyam",
    img: "003 - Apple Beauty",
    src: "03 - Apple Beauty"
  },
  {
    name: "03 - Devudaa",
    artist: "DSP",
    img: "03 - Devudaa",
    src: "03 - Devudaa"
  },
  {
    name: "03 - Ningi Jaripadda",
    artist: "Tippu",
    img: "03 - Ningi Jaripadda",
    src: "03 - Ningi Jaripadda"
  },
  {
    name: "03 - Yenti Yenti",
    artist: "Anirudh",
    img: "03 - Yenti Yenti",
    src: "03 - Yenti Yenti"
  },
  {
    name: "3-Baby He Loves You-SenSongsMp3.Co",
    artist: "Karthik",
    img: "3-Baby He Loves You-SenSongsMp3.Co",
    src: "3-Baby He Loves You-SenSongsMp3.Co"
  },
  {
    name: "3-Idhedho Bagundhe-SenSongsMp3.Co",
    artist: "Sagar",
    img: "3-Idhedho Bagundhe-SenSongsMp3.Co",
    src: "3-Idhedho Bagundhe-SenSongsMp3.Co"
  },
  {
    name: "04 -  One More Time",
    artist: "Hariharan",
    img: "04 -  One More Time",
    src: "04 -  One More Time"
  },
  {
    name: "04 - Ammaadi",
    artist: "Thaman",
    img: "04 - Ammaadi",
    src: "04 - Ammaadi"
  },
  {
    name: "04 - Jayaho Janatha",
    artist: "Charan",
    img: "04 - Jayaho Janatha",
    src: "04 - Jayaho Janatha"
  },
  {
    name: "4-Mirchi-SenSongsMp3.Co",
    artist: "Haricharan",
    img: "4-Mirchi-SenSongsMp3.Co",
    src: "4-Mirchi-SenSongsMp3.Co"
  },
  {
    name: "05 - Ittage Recchipodham",
    artist: "Hemachandra",
    img: "05 - Ittage Recchipodham",
    src: "05 - Ittage Recchipodham"
  },
  {
    name: "05 - Mora Vinara",
    artist: "Dhanunjay",
    img: "05 - Mora Vinara",
    src: "05 - Mora Vinara"
  },
  {
    name: "05 - Naatu Naatu",
    artist: "Sid Sriram",
    img: "05 - Naatu Naatu",
    src: "05 - Naatu Naatu"
  },
  {
    name: "05 - Nee Selavadigi",
    artist: "Vishal",
    img: "05 - Nee Selavadigi",
    src: "05 - Nee Selavadigi"
  },
  {
    name: "5-Karige Loga-SenSongsMp3.Co",
    artist: "Anurag kulakarni",
    img: "5-Karige Loga-SenSongsMp3.Co",
    src: "5-Karige Loga-SenSongsMp3.Co"
  },
  {
    name: "5-Nee Choopula-SenSongsMp3.Co",
    artist: "Mike Archangelo",
    img: "5-Nee Choopula-SenSongsMp3.Co",
    src: "5-Nee Choopula-SenSongsMp3.Co"
  },
  {
    name: "06 -  Temper Theme",
    artist: "Balasubramanyam",
    img: "06 -  Temper Theme",
    src: "06 -  Temper Theme"
  },
  {
    name: "06 - Akasham Baddalaina",
    artist: "DSP",
    img: "06 - Akasham Baddalaina",
    src: "06 - Akasham Baddalaina"
  },
  {
    name: "06 - Vachindamma",
    artist: "Tippu",
    img: "06 - Vachindamma",
    src: "06 - Vachindamma"
  },
  {
    name: "6-My Love Is Gone-SenSongsMp3.Co",
    artist: "Anirudh",
    img: "6-My Love Is Gone-SenSongsMp3.Co",
    src: "6-My Love Is Gone-SenSongsMp3.Co"
  },
  {
    name: "6-Pandagala-SenSongsMp3.Co",
    artist: "Karthik",
    img: "6-Pandagala-SenSongsMp3.Co",
    src: "6-Pandagala-SenSongsMp3.Co"
  },
  {
    name: "07 - Aggipulla Lanti",
    artist: "Sagar",
    img: "07 - Aggipulla Lanti",
    src: "07 - Aggipulla Lanti"
  },
  {
    name: "07 - Komuram Bheemudo",
    artist: "Hariharan",
    img: "07 - Komuram Bheemudo",
    src: "07 - Komuram Bheemudo"
  },
  {
    name: "7-Yahoon Yahoon-SenSongsMp3.Co",
    artist: "Thaman",
    img: "7-Yahoon Yahoon-SenSongsMp3.Co",
    src: "7-Yahoon Yahoon-SenSongsMp3.Co"
  },
  {
    name: "08 - Badulu Tochani",
    artist: "Charan",
    img: "08 - Badulu Tochani",
    src: "08 - Badulu Tochani"
  },
  {
    name: "08 - Raamam Raaghavam",
    artist: "Haricharan",
    img: "08 - Raamam Raaghavam",
    src: "08 - Raamam Raaghavam"
  },
  {
    name: "09 - Adigaa",
    artist: "Hemachandra",
    img: "09 - Adigaa",
    src: "09 - Adigaa"
  },
  {
    name: "09 - Light Theesko",
    artist: "Dhanunjay",
    img: "09 - Light Theesko",
    src: "09 - Light Theesko"
  },
  {
    name: "10 - Chedhu Nijam",
    artist: "Sid Sriram",
    img: "10 - Chedhu Nijam",
    src: "10 - Chedhu Nijam"
  },
  {
    name: "11 - Needhe Needhe",
    artist: "Vishal",
    img: "11 - Needhe Needhe",
    src: "11 - Needhe Needhe"
  },
  {
    name: "Adara Adara-SenSongsMp3.Co",
    artist: "Anurag kulakarni",
    img: "Adara Adara-SenSongsMp3.Co",
    src: "Adara Adara-SenSongsMp3.Co"
  },
  {
    name: "Adhento Gaani Vunnapaatuga - SenSongsmp3.Co",
    artist: "Mike Archangelo",
    img: "Adhento Gaani Vunnapaatuga - SenSongsmp3.Co",
    src: "Adhento Gaani Vunnapaatuga - SenSongsmp3.Co"
  },
  {
    name: "Chakkani Bike Undhi-SenSongsMp3.Com",
    artist: "Balasubramanyam",
    img: "Chakkani Bike Undhi-SenSongsMp3.Com",
    src: "Chakkani Bike Undhi-SenSongsMp3.Com"
  },
  {
    name: "Inka Edo-SenSongsMp3.Co",
    artist: "DSP",
    img: "Inka Edo-SenSongsMp3.Co",
    src: "Inka Edo-SenSongsMp3.Co"
  },
  {
    name: "Mee Intiki Mundhu-SenSongsMp3.Com",
    artist: "Tippu",
    img: "Mee Intiki Mundhu-SenSongsMp3.Com",
    src: "Mee Intiki Mundhu-SenSongsMp3.Com"
  },
  {
    name: "Neeve-SenSongsMp3.Co",
    artist: "Anirudh",
    img: "Neeve-SenSongsMp3.Co",
    src: "Neeve-SenSongsMp3.Co"
  },
  {
    name: "O Madhu-SenSongsMp3.Com",
    artist: "Karthik",
    img: "O Madhu-SenSongsMp3.Com",
    src: "O Madhu-SenSongsMp3.Com"
  },
  {
    name: "Osey Osey-SenSongsMp3.Com",
    artist: "Sagar",
    img: "Osey Osey-SenSongsMp3.Com",
    src: "Osey Osey-SenSongsMp3.Com"
  },
  {
    name: "Pakado Pakado-SenSongsMp3.Com",
    artist: "Hariharan",
    img: "Pakado Pakado-SenSongsMp3.Com",
    src: "Pakado Pakado-SenSongsMp3.Com"
  },
  {
    name: "Spirit Of Jersey - SenSongsmp3.Co",
    artist: "Thaman",
    img: "Spirit Of Jersey - SenSongsmp3.Co",
    src: "Spirit Of Jersey - SenSongsmp3.Co"
  },
  // like this paste it and remember to give comma after ending of this bracket }
  // {
  //   name: "Here is the music name",
  //   artist: "Here is the artist name",
  //   img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
  //   src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
  // }
];