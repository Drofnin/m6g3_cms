const posts = [
{    
    id:1,
    title: "Súkkulaðibomba",
    author: "Brynja Geirs",
    coverImage: "/images/cake.webp",
    excerpt:
        "Þessi dásamlega súkkulaðikaka er eins og faðmlag fyrir sálina. Með sinni djúpu, ríku áferð og mjúku flauelsmýkt, er hún fullkomin fyrir hvaða tilefni sem er - hvort sem það er afmæli, hátíðisdagur eða bara venjulegur þriðjudagur sem þarfnast smá gleði",
    content: "af hverju kemur ekki innihaldið",
    slug:"chocolatebomb"
},

{    
    id:2,
    title: "Oreo bomba",
    author: "Brynja Geirs",
    coverImage: "/images/oreo.webp",
    excerpt:
        "Í fyrsta þætti af Matarboði með Brynju fékk ég vinkonu mína og hæfileikabúntið Línu til þess að elda með mér og hún gerði meðal annars þennan Oreo eftirrétt sem margir hafa spurt um og hér er uppskriftin og þessi eftirréttur er súper einfaldur og góður. Ég bætti hvítu súkkulaði saman svona fyrst það eru páskar en það má sleppa því, en hver gerir svoleiðis? Það sleppir enginn súkkulaði Oreo ostakökueftirréttur Miðast við 4-6 manns.",
    content: "hér kemur innihald",
    slug:"oreobomb"
},
{
    id:3,
    title: "Kanilsnúðar með rjómaostakremi",
    author: "Brynja Geirs",
    coverImage: "/images/kanilsnudur.webp",
    excerpt:
    "Þessir kanilsnúðar eru gjörsamlega geggjaðir og ég mun baka þá aftur og aftur. Amerískir kanilsnúðar eins og þeir gerast bestir! Ég fékk þessa uppskrift að láni hér, verður maður ekki að prófa uppskrift sem kemur frá Ameríku fyrst maður er að þessu? 😉 *Þessi uppskrift gefur 12-14 snúða",
    content: "hér kemur innihald",
    slug:"cinnamons-cream"
},
{    
    id:4,
    title: "Súkkulaðibitakökur",
    author: "Brynja Geirs",
    coverImage:  "/images/sukkubitar.webp",
    excerpt:
    "Það er fátt sem kveikir jafn mikla nostalgíu og ilmurinn af nýbökunum súkkulaðibitakökum sem leikur um nefið. Þessar gullbrúnu kökur, með sínum bráðnuðu súkkulaðibitum, eru eins og faðmlag fyrir bragðlaukana.",
    content: "hér kemur innihald",
    slug:"Chocolatecookies"
},
{    
    id:5,
    title: "Mars skyrterta",
    author: "Brynja Geirs",
    coverImage: "/images/marskaka.webp",
    excerpt:
    "Himnesk Blanda af Íslensku Skyri og Alþjóðlegum Sælgætisklassík. Þegar íslensk matarhefð mætir alþjóðlegum sælgætisiðnaði verður til eitthvað alveg einstakt - Mars skyrterta. Þessi eftirréttur er fullkomið dæmi um hvernig hægt er að taka það besta úr tveimur heimum og skapa eitthvað sem er meira en summa partanna.",
    content: "hér kemur innihald",
    slug:"marsk-skyr-cake"
},





]

export function getAllPosts () {
    return posts;
}


export function getAllSlugs(){
    let slugs = [];
    getAllPosts().map( p=> slugs.push('/blog/${p.slug}'));
    return slugs;

}

export function getPostData(slug){
    let post = null;
    getAllPosts().map((p) => {
        if(p.slug === slug){
            post = p;
            return
        }
    });
    return post;
}