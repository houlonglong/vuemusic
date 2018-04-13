export default class Song {
        constructor({id,mid,singer,name,album,duration,image,url}){
            this.id=id
            this.mid = mid
            this.singer = singer
            this.name = name
            this.album = album
            this.duration = duration
            this.image = image
            this.url = url
        }
}

export function createSong(musicData){
    return new Song({
        id:musicData.id,
        mid:musicData.mid,
        singer:filterSingers(musicData.singer),
        name:musicData.singer_name,
        album:musicData.album,
        duration:musicData.interval,
        image:musicData.pic,
        url:`https://thirdparty.gtimg.com/${musicData.songid}.m4a?frintag=38`   

    })
}

function filterSingers(singer){
    let ret = []
    if(!singer){
        return " "
    }else{
        singer.forEach((s)=> {
            ret.push(s.name)
        });  
    }
    return ret.join('/')   
}