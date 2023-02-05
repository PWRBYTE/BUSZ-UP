export default function Teaser({blok}){
    console.log(blok);
    return <div>
        <p>{blok.headline}</p>
        <p>{blok.new_field}</p>
        <p>{blok.title1}</p>
        <p>{blok.title2}</p>
        <p>{blok.title3}</p>
        <p>{blok.title4}</p>
    </div>
}