const baseUrl="https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
const istanbulUrl='https://images.unsplash.com/photo-1518084823714-2f59a7315a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
const ankaraUrl="https://images.unsplash.com/photo-1563261402-c5a58e622eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80n"
const izmirUrl="https://images.unsplash.com/photo-1564403526882-db54feee2d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
const bursaUrl="https://images.unsplash.com/photo-1566470709058-51b3039af264?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80  "
const adanaUrl="https://images.unsplash.com/photo-1490213299088-a5b6ff3ac761?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
const trazonUrl="https://images.unsplash.com/photo-1596404839495-0fcee3885f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"



export default function setBackground(city){
    if(city==="istanbul"){
        return istanbulUrl
    }
    if(city==="ankara"){
      return ankaraUrl
    }
    if(city==="izmir"){
      return izmirUrl
    }
    if(city==="bursa"){
      return bursaUrl
    }
    if(city==="adana"){
      return adanaUrl
    }
    if(city==="trabzon"){
      return trazonUrl
    }
    return baseUrl
  }
