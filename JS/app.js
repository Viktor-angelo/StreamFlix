const movieList = [
    {
        title:"Sinners",
        description:"“Sinners” is a dark and intense thriller starring Michael B. Jordan. The story follows a man haunted by his past, struggling to escape a life shaped by violence, guilt, and difficult choices. As he faces powerful enemies and his own inner demons, he is forced to confront the consequences of his actions and decide whether redemption is still possible. With emotional depth and gripping tension, the film explores themes of morality, identity, and the thin line between right and wrong.",
        image:"https://th.bing.com/th/id/R.9a48a1fd86b56a57ae2027688f62b163?rik=JivxOiZZDtO1tQ&riu=http%3a%2f%2fwww.impawards.com%2f2025%2fposters%2fsinners_ver4.jpg&ehk=yuYPUORzQbF2p%2bWynNeANOaWKSu8Nia%2bpB3dFofHEFg%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        title:"The Godfather",
        description:"The story of the powerful Corleone crime family and their rise in the world of organized crime. As Don Vito Corleone ages, his youngest son, Michael, is drawn into the family business, facing difficult choices that will change his life forever. A tale of power, loyalty, and the consequences of ambition.",
        image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
        title:"All Quiet on the Western Front",
        description:"A young German soldier experiences the brutal reality of war during World War I. As he faces fear, loss, and hopelessness on the battlefield, his initial excitement fades into a deep understanding of the true cost of conflict.",
        image:"https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/229061/AllQuietOnTheWesternFront_340x504.jpg",
    },
    {
        title:"The Pursuit of Happyness",
        description:"Based on a true story, a struggling salesman faces homelessness while trying to build a better life for himself and his young son. Through determination and resilience, he fights for a chance at success and a brighter future.",
        image:"https://th.bing.com/th/id/R.c046630f8e44e34dfc09fa79dc663dd9?rik=FVVdF2prXiGx8A&riu=http%3a%2f%2fwww.impawards.com%2f2006%2fposters%2fpursuit_of_happyness.jpg&ehk=dHQ1UXsSz4qILPEmzLUziemBV8UBlrXvw0c4HMObKBs%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        title:"The Wolf of Wall Street",
        description:"The rise and fall of a stockbroker who gains massive wealth through corruption and fraud. Living a life of excess and luxury, he eventually faces the consequences of his actions in a high-stakes financial world.",
        image:"https://th.bing.com/th/id/OIP.ZhHPGVF-XCHRBM-nyKVhDgHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
        title:"Spider-Man: Across the Spider-Verse",
        description:"Miles Morales returns for a new adventure across multiple dimensions, where he meets a team of Spider-People. As conflicts arise, he must redefine what it truly means to be a hero and choose his own path.",
        image:"https://goldenglobes.com/wp-content/uploads/2023/12/spiderman-across-the-spiderverse.jpeg?w=600?w=600",
    },
    {
        title:"Harry Potter and the Philosopher’s Stone",
        description:"Harry Potter discovers he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry. Alongside new friends, he uncovers secrets about his past and faces a dark force that threatens the magical world.",
        image:"https://image.tmdb.org/t/p/original/kZModq4nvmXhSmXdMJWSmbqWXhH.jpg",
    },
    {
        title:"Space Jam",
        description:"A basketball superstar teams up with animated characters to face a group of alien opponents in a high-stakes game. Combining sports, humor, and adventure, the film delivers a fun and energetic story for all ages.",
        image:"https://image.tmdb.org/t/p/w500/mDACFTANR34u6lvucazoYiFJOp7.jpg",
    },

]


const moviesContainer = document.getElementById("movies-container");

const mainTitle = document.getElementById("main-title");

const mainDescription = document.getElementById("main-description");

const mainPoster = document.getElementById("main-poster");


movieList.forEach(movie=>{

    const movieElement = document.createElement("div");

    movieElement.classList.add("movie");

    movieElement.innerHTML = `
    <img src ="${movie.image}" alt="${movie.title}">
    `;

    //EVENTO DE CLIQUE (IMPORTANTE)

     movieElement.addEventListener("click", ()=>{
        mainTitle.innerText = movie.title;
        mainDescription.innerText = movie.description;
        mainPoster.src = movie.image;

        //SALVAR NO LOCALSTORAGE
        localStorage.setItem("movie", JSON.stringify(movie));
     });

     moviesContainer.appendChild(movieElement);
})
