import React from 'react';
import { HorizontalCard } from '../molecules/HorizontalCard';
import './AllMembers.css';

export function AllMembers() {

    const cardsProfiles = [
        { className: "Usuario 1", title: "Juan", content: "Apasionado por la tecnología y los videojuegos", imageUrl: "/Singer.webp" },
        { className: "Usuario 2", title: "María", content: "Le encanta la música y tocar la guitarra", imageUrl: "/Singer.webp" },
        { className: "Usuario 3", title: "Pedro", content: "Aficionado al deporte y al fitness", imageUrl: "/Singer.webp" },
        { className: "Usuario 4", title: "Ana", content: "Amante de la lectura y la escritura", imageUrl: "/Singer.webp" },
        { className: "Usuario 5", title: "Luis", content: "Cocinero aficionado y amante de la gastronomía", imageUrl: "/Singer.webp" },
        { className: "Usuario 6", title: "Sofía", content: "Viajar es su pasión y explorar nuevas culturas", imageUrl: "/Singer.webp" },
        { className: "Usuario 7", title: "Carlos", content: "Entusiasta del cine y la fotografía", imageUrl: "/Singer.webp" },
        { className: "Usuario 8", title: "Laura", content: "Apasionada por la moda y el diseño", imageUrl: "/Singer.webp" },
        { className: "Usuario 9", title: "Javier", content: "Amante de la naturaleza y el senderismo", imageUrl: "/Singer.webp" },
        { className: "Usuario 10", title: "Clara", content: "Fanática de la cocina internacional", imageUrl: "/Singer.webp" },
        { className: "Usuario 12", title: "Valeria", content: "Entusiasta del arte y la pintura", imageUrl: "/Singer.webp" },
        { className: "Usuario 13", title: "Andrés", content: "Apasionado por la fotografía y los viajes", imageUrl: "/Singer.webp" },
        { className: "Usuario 14", title: "Natalia", content: "Le encanta el yoga y la meditación", imageUrl: "/Singer.webp" },
        { className: "Usuario 15", title: "Fernando", content: "Aficionado a la música clásica y el piano", imageUrl: "/Singer.webp" },
        { className: "Usuario 16", title: "Gabriel", content: "Apasionado por la astronomía y las estrellas", imageUrl: "/Singer.webp" },
        { className: "Usuario 17", title: "Isabel", content: "Le gusta la jardinería y las plantas", imageUrl: "/Singer.webp" },
        { className: "Usuario 18", title: "Ricardo", content: "Entusiasta de los deportes extremos y la aventura", imageUrl: "/Singer.webp" },
        { className: "Usuario 19", title: "Lucía", content: "Amante de la fotografía y el arte digital", imageUrl: "/Singer.webp" },
        { className: "Usuario 20", title: "Mateo", content: "Apasionado por la historia y la arqueología", imageUrl: "/Singer.webp" },
        { className: "Usuario 21", title: "Camila", content: "Le encanta la cocina vegana y la nutrición", imageUrl: "/Singer.webp" },
        { className: "Usuario 22", title: "Sebastián", content: "Aficionado a los deportes acuáticos y la pesca", imageUrl: "/Singer.webp" },
        { className: "Usuario 23", title: "Valentina", content: "Entusiasta del diseño gráfico y la ilustración", imageUrl: "/Singer.webp" },
        { className: "Usuario 24", title: "Nicolás", content: "Apasionado por la tecnología y la robótica", imageUrl: "/Singer.webp" },
        { className: "Usuario 25", title: "Santiago", content: "Le gusta el senderismo y la exploración de montañas", imageUrl: "/Singer.webp" },
        { className: "Usuario 26", title: "Renata", content: "Amante de los animales y el voluntariado", imageUrl: "/Singer.webp" },
        { className: "Usuario 27", title: "Diego", content: "Aficionado a la astronomía y la observación de estrellas", imageUrl: "/Singer.webp" },
        { className: "Usuario 28", title: "Elena", content: "Le encanta el cine clásico y la crítica de películas", imageUrl: "/Singer.webp" }
    ];
    
    return (
        <div className="container px-2 py-5">
            <div>
                <h1 className="text-center mb-4 display-4 text-primary font-weight-bold">Conoce personas con habilidades similares</h1>
            </div>

            <div className="row flex">  
                {cardsProfiles.map((card) => (
                    <div key={card.title} className="col-md-4 col-12">
                        <HorizontalCard 
                            className={card.className} 
                            title={card.title} 
                            content={card.content} 
                            imageUrl={card.imageUrl} 
                        />
                    </div>
                ))}
            </div>
        </div>

           
                
    );
}