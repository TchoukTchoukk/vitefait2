import { useState } from 'react';
import { Checkbox } from "./components/ui/checkbox";
import { Button } from "./components/ui/button";
import { PanelLeftOpen, PanelLeftClose } from 'lucide-react';
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function App() {
    const videos = [
        {
            "id": 1,
            "title": "DAZN1",
            "url": "https://rereyano.ru/player/3/20",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-DAZN1-en-direct-streaming-gratuit"
        },
        {
            "id": 2,
            "title": "DAZN2",
            "url": "https://rereyano.ru/player/3/21",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-DAZN2-en-direct-streaming-gratuit"
        },
        {
            "id": 3,
            "title": "DAZN3",
            "url": "https://rereyano.ru/player/3/22",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-DAZN3-en-direct-streaming-gratuit"
        },
        {
            "id": 4,
            "title": "DAZN4",
            "url": "https://rereyano.ru/player/3/40",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-DAZN4-en-direct-streaming-gratuit"
        },
        {
            "id": 5,
            "title": "beIN SPORT 1",
            "url": "https://rereyano.ru/player/3/1",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-beIN-SPORT-1-en-direct-streaming-gratuit"
        },
        {
            "id": 6,
            "title": "beIN SPORT 2",
            "url": "https://rereyano.ru/player/3/2",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-beIN-SPORT-2-en-direct-streaming-gratuit"
        },
        {
            "id": 7,
            "title": "beIN SPORT 3",
            "url": "https://rereyano.ru/player/3/3",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-beIN-SPORT-3-en-direct-streaming-gratuit"
        },
        {
            "id": 8,
            "title": "beIN SPORT max 4",
            "url": "https://rereyano.ru/player/3/4",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-beIN-SPORT-max-4-en-direct-streaming-gratuit"
        },
        {
            "id": 9,
            "title": "beIN SPORT max 5",
            "url": "https://rereyano.ru/player/3/5",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-beIN-SPORT-max-5-en-direct-streaming-gratuit"
        },
        {
            "id": 10,
            "title": "beIN SPORT max 6",
            "url": "https://rereyano.ru/player/3/6",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-beIN-SPORT-max-6-en-direct-streaming-gratuit"
        },
        {
            "id": 11,
            "title": "beIN SPORT max 7",
            "url": "https://rereyano.ru/player/3/7",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-beIN-SPORT-max-7-en-direct-streaming-gratuit"
        },
        {
            "id": 12,
            "title": "beIN SPORT max 8",
            "url": "https://rereyano.ru/player/3/8",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-beIN-SPORT-max-8-en-direct-streaming-gratuit"
        },
        {
            "id": 13,
            "title": "beIN SPORT max 9",
            "url": "https://rereyano.ru/player/3/9",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-beIN-SPORT-max-9-en-direct-streaming-gratuit"
        },
        {
            "id": 14,
            "title": "beIN SPORT max 10",
            "url": "https://rereyano.ru/player/3/10",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-beIN-SPORT-max-10-en-direct-streaming-gratuit"
        },
        {
            "id": 15,
            "title": "canal+",
            "url": "https://rereyano.ru/player/3/11",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-en-direct-streaming-gratuit"
        },
        {
            "id": 16,
            "title": "canal+ Foot",
            "url": "https://rereyano.ru/player/3/12",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Foot-en-direct-streaming-gratuit"
        },
        {
            "id": 17,
            "title": "canal+ Sport",
            "url": "https://rereyano.ru/player/3/13",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Sport-en-direct-streaming-gratuit"
        },
        {
            "id": 18,
            "title": "canal+ Sport360",
            "url": "https://rereyano.ru/player/3/14",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Sport360-en-direct-streaming-gratuit"
        },
        {
            "id": 19,
            "title": "Eurosport 1",
            "url": "https://rereyano.ru/player/3/15",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-Eurosport-1-en-direct-streaming-gratuit"
        },
        {
            "id": 20,
            "title": "Eurosport 2",
            "url": "https://rereyano.ru/player/3/16",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-Eurosport-2-en-direct-streaming-gratuit"
        },
        {
            "id": 21,
            "title": "RMC sport 1",
            "url": "https://rereyano.ru/player/3/17",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-Rmc-sport-1-en-direct-streaming-gratuit"
        },
        {
            "id": 22,
            "title": "RMC sport 2",
            "url": "https://rereyano.ru/player/3/18",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-Rmc-sport-2-en-direct-streaming-gratuit"
        },
        {
            "id": 23,
            "title": "L'Equipe",
            "url": "https://rereyano.ru/player/3/19",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-L-Equipe-en-direct-streaming-gratuit"
        },
        {
            "id": 24,
            "title": "Automoto",
            "url": "https://rereyano.ru/player/3/23",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-Automoto-en-direct-streaming-gratuit"
        },
        {
            "id": 25,
            "title": "TF1",
            "url": "https://rereyano.ru/player/3/24",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-TF1-en-direct-streaming-gratuit"
        },
        {
            "id": 26,
            "title": "TMC",
            "url": "https://rereyano.ru/player/3/25",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-TMC-en-direct-streaming-gratuit"
        },
        {
            "id": 27,
            "title": "M6",
            "url": "https://rereyano.ru/player/3/26",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-M6-en-direct-streaming-gratuit"
        },
        {
            "id": 28,
            "title": "W9",
            "url": "https://rereyano.ru/player/3/27",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-W9-en-direct-streaming-gratuit"
        },
        {
            "id": 29,
            "title": "France 2",
            "url": "https://rereyano.ru/player/3/28",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-france2-en-direct-streaming-gratuit"
        },
        {
            "id": 30,
            "title": "C+Live 1",
            "url": "https://rereyano.ru/player/3/31",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-1-en-direct-streaming-gratuit"
        },
        {
            "id": 31,
            "title": "C+Live 2",
            "url": "https://rereyano.ru/player/3/32",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-2-en-direct-streaming-gratuit"
        },
        {
            "id": 32,
            "title": "C+Live 3",
            "url": "https://rereyano.ru/player/3/33",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-3-en-direct-streaming-gratuit"
        },
        {
            "id": 33,
            "title": "C+Live 4",
            "url": "https://rereyano.ru/player/3/34",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-4-en-direct-streaming-gratuit"
        },
        {
            "id": 34,
            "title": "C+Live 5",
            "url": "https://rereyano.ru/player/3/35",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-5-en-direct-streaming-gratuit"
        },
        {
            "id": 35,
            "title": "C+Live 6",
            "url": "https://rereyano.ru/player/3/36",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-6-en-direct-streaming-gratuit"
        },
        {
            "id": 36,
            "title": "C+Live 7",
            "url": "https://rereyano.ru/player/3/37",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-7-en-direct-streaming-gratuit"
        },
        {
            "id": 37,
            "title": "C+Live 8",
            "url": "https://rereyano.ru/player/3/38",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-8-en-direct-streaming-gratuit"
        },
        {
            "id": 38,
            "title": "C+Live 9",
            "url": "https://rereyano.ru/player/3/39",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-9-en-direct-streaming-gratuit"
        },
        {
            "id": 39,
            "title": "C+Live 10",
            "url": "https://rereyano.ru/player/3/40",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-10-en-direct-streaming-gratuit"
        },
        {
            "id": 40,
            "title": "C+Live 11",
            "url": "https://rereyano.ru/player/3/41",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-11-en-direct-streaming-gratuit"
        },
        {
            "id": 41,
            "title": "C+Live 12",
            "url": "https://rereyano.ru/player/3/42",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-12-en-direct-streaming-gratuit"
        },
        {
            "id": 42,
            "title": "C+Live 13",
            "url": "https://rereyano.ru/player/3/43",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-13-en-direct-streaming-gratuit"
        },
        {
            "id": 43,
            "title": "C+Live 14",
            "url": "https://rereyano.ru/player/3/44",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-14-en-direct-streaming-gratuit"
        },
        {
            "id": 44,
            "title": "C+Live 15",
            "url": "https://rereyano.ru/player/3/45",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-15-en-direct-streaming-gratuit"
        },
        {
            "id": 45,
            "title": "C+Live 16",
            "url": "https://rereyano.ru/player/3/46",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-16-en-direct-streaming-gratuit"
        },
        {
            "id": 46,
            "title": "C+Live 17",
            "url": "https://rereyano.ru/player/3/47",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-17-en-direct-streaming-gratuit"
        },
        {
            "id": 47,
            "title": "C+Live 18",
            "url": "https://rereyano.ru/player/3/48",
            "vlk_link": "https://oohquelbut.ru/regarder-la-chaine-canal-plus-Live-18-en-direct-streaming-gratuit"
        }
    ];

  const [selected, setSelected] = useState([]);
  const [panelOpen, setPanelOpen] = useState(true);
  const [openCategories, setOpenCategories] = useState({});

  const categorizedVideos = {
    DAZN: videos.filter((video) => video.title.includes("DAZN")),
    "beIN SPORT": videos.filter((video) => video.title.includes("beIN SPORT")),
    canal: videos.filter((video) => video.title.includes("canal+")),
    "C+Live": videos.filter((video) => video.title.includes("C+Live")),
    Eurosport: videos.filter((video) => video.title.includes("Eurosport")),
    RMC: videos.filter((video) => video.title.includes("RMC")),
    Autre: videos.filter(
      (video) =>
        ![
          "DAZN",
          "beIN SPORT",
          "canal+",
          "Eurosport",
          "RMC",
          "C+Live",
        ].some((d) => video.title.includes(d))
    ),
  };

  const toggleVideo = (id) => {
    if (selected.includes(id)) {
      setSelected(prev => prev.filter(x => x !== id)); // Retirer si déjà sélectionnée
    } else if (selected.length < 4) {
      setSelected(prev => [...prev, id]); // Ajouter si moins de 4 vidéos
    } else {
      alert("Vous ne pouvez pas sélectionner plus de 4 vidéos.");
    }
  };

  const toggleCategory = (category) => {
    setOpenCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category] // Inverse l'état de la catégorie (ouverte ou fermée)
    }));
  };

  // Filtrer les vidéos sélectionnées
  const selectedVideos = videos.filter((v) => selected.includes(v.id));

  // Définir les colonnes pour la grille
  const getGridCols = () => {
    const count = selectedVideos.length;
    if (count === 2) return 'grid-cols-2';
    if (count === 3) return 'grid-cols-1 lg:grid-cols-2';
    if (count >= 4) return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    return 'grid-cols-1';
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div className={`relative bg-gray-100 h-full transition-all duration-300 ${panelOpen ? 'w-60' : 'w-0'}`}>
        {/* Toggle button - toujours visible */}
        <div className={`absolute top-2 right-2 z-10 ${panelOpen ? '' : 'w-0'}`}>
          <Button
            className="bg-gray-300 hover:bg-gray-400 text-black rounded-full p-3"
            onClick={() => setPanelOpen(!panelOpen)}
          >
            {panelOpen ? (
              <ChevronLeft size={24} color="black" />
            ) : (
              <ChevronRight size={24} color="black" />
            )}
          </Button>
        </div>

        {/* Contenu visible seulement si le panel est ouvert */}
        {panelOpen && (
          <div className="p-4 pt-10 overflow-y-auto max-h-screen">
            <h2 className="text-xl font-bold mb-4">Chaînes dispo</h2>
            
            {/* Affichage des catégories de diffuseurs */}
            {Object.keys(categorizedVideos).map((category) => (
              <div key={category} className="mb-4">
                <div className="flex items-center justify-between">
                  <h3
                    className="text-lg font-semibold cursor-pointer"
                    onClick={() => toggleCategory(category)} // Toggle de la catégorie
                  >
                    {category}
                  </h3>
                  <span>{openCategories[category] ? "↓" : "→"}</span>
                </div>
                {/* Affichage des vidéos si la catégorie est ouverte */}
                {openCategories[category] && (
                  <div>
                    {categorizedVideos[category].map((video) => (
                      <div key={video.id} className="flex items-center gap-2 mb-2">
                        <Checkbox
                          checked={selected.includes(video.id)}
                          onCheckedChange={() => toggleVideo(video.id)}
                        />
                        <span className="text-sm">{video.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 h-full bg-black">
        {selectedVideos.length === 1 ? (
          <iframe
            src={selectedVideos[0].url}
            className="w-full h-full border-none"
            allow="autoplay; encrypted-media"
            allowFullScreen
            rel="noopener noreferrer"
            sandbox="allow-scripts allow-same-origin"
            frameBorder="0"
          ></iframe>
        ) : selectedVideos.length === 2 ? (
          <div className={`grid gap-2 p-2 ${getGridCols()} h-full overflow-y-auto`}>
            {selectedVideos.map(video => (
              <iframe
                key={video.id}
                src={video.url}
                className="w-full aspect-video rounded-md shadow border border-black h-full"
                allow="autoplay; encrypted-media"
                rel="noopener noreferrer"
                sandbox="allow-scripts allow-same-origin"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            ))}
          </div>
        ) : selectedVideos.length === 3 ? (
          <div className="flex flex-col h-full">
            {/* Première vidéo en haut */}
            <iframe
              src={selectedVideos[0].url}
              className="w-full h-1/2 border-none"
              allow="autoplay; encrypted-media"
              allowFullScreen
              rel="noopener noreferrer"
              sandbox="allow-scripts allow-same-origin"
              frameBorder="0"
            ></iframe>
            {/* Deux autres vidéos côte à côte en bas */}
            <div className="flex h-1/2 gap-2">
              {selectedVideos.slice(1).map(video => (
                <iframe
                  key={video.id}
                  src={video.url}
                  className="w-1/2 aspect-video rounded-md shadow border border-black"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  rel="noopener noreferrer"
                  sandbox="allow-scripts allow-same-origin"
                  frameBorder="0"
                ></iframe>
              ))}
            </div>
          </div>
        ) : selectedVideos.length === 4 ? (
          <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2 h-full">
            {selectedVideos.map(video => (
              <iframe
                key={video.id}
                src={video.url}
                className="w-full h-full aspect-video rounded-md shadow border border-black"
                allow="autoplay; encrypted-media"
                allowFullScreen
                rel="noopener noreferrer"
                sandbox="allow-scripts allow-same-origin"
                frameBorder="0"
              ></iframe>
            ))}
          </div>
        ) : (
          <div className={`grid gap-2 p-2 ${getGridCols()} h-full overflow-y-auto`}>
            {selectedVideos.map(video => (
              <iframe
                key={video.id}
                src={video.url}
                className="w-full aspect-video rounded-md shadow border border-black"
                allow="autoplay; encrypted-media"
                allowFullScreen
                rel="noopener noreferrer"
                sandbox="allow-scripts allow-same-origin"
                frameBorder="0"
              ></iframe>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
