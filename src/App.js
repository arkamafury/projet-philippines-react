import React, { useState } from 'react';
import { Trash2, Image as ImageIcon, Type, Star, Grid3x3, Briefcase, BarChart2, UserCheck, MapPin } from 'lucide-react';

// --- Configuration des Blocs Disponibles ---
const AVAILABLE_BLOCKS = {
    Hero: {
        name: 'Bloc H�ros',
        icon: <Star className="w-6 h-6 text-yellow-500" />,
        defaultContent: {
            title: 'Titre du H�ros',
            subtitle: 'Un sous-titre accrocheur pour capter l\'attention.',
            buttonText: 'Appel � l\'action',
            imageUrl: 'https://placehold.co/1200x600/0050E0/FFFFFF?text=Mon+H�ros',
        },
    },
    Text: {
        name: 'Paragraphe de Texte',
        icon: <Type className="w-6 h-6 text-gray-600" />,
        defaultContent: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
        },
    },
    Image: {
        name: 'Image Simple',
        icon: <ImageIcon className="w-6 h-6 text-blue-500" />,
        defaultContent: {
            imageUrl: 'https://placehold.co/800x600/f0f4ff/1D2B48?text=Mon+Image',
            altText: 'Description de l\'image',
        },
    },
    FeatureGrid: {
        name: 'Grille de Services',
        icon: <Grid3x3 className="w-6 h-6 text-green-500" />,
        defaultContent: {
            title: 'Nos Services Cl�s',
            features: [
                { id: 1, icon: 'Briefcase', title: 'R�seau d\'Entreprises', description: 'Acc�s exclusif � notre portefeuille d\'entreprises partenaires.' },
                { id: 2, icon: 'UserCheck', title: 'Pr�paration aux Entretiens', description: 'Coaching personnalis� pour r�ussir vos entretiens haut la main.' },
                { id: 3, icon: 'MapPin', title: 'Aide � l\'Installation', description: 'Conseils pratiques pour votre d�m�nagement et votre installation.' },
            ]
        }
    }
};

// --- Contenu Initial de la Page ---
const initialPageContent = [
    {
        id: 1,
        type: 'Hero',
        content: {
            title: 'Votre Carri�re aux Philippines D�colle Ici',
            subtitle: 'Transformez votre ambition en succ�s. Nous sommes le pont entre votre talent et les meilleures opportunit�s professionnelles � Manille.',
            buttonText: 'Commencer mon projet',
            imageUrl: 'https://images.unsplash.com/photo-1619536833484-b964b9e73549?q=80&w=1974&auto=format&fit=crop',
        },
    },
    {
        id: 2,
        type: 'Text',
        content: {
            text: `Les Philippines sont bien plus qu'un archipel paradisiaque. C'est un hub �conomique en pleine effervescence, un carrefour de l'innovation en Asie du Sud-Est o� les carri�res se construisent et s'acc�l�rent. Face � une telle dynamique, avoir un partenaire strat�gique pour naviguer le march� du travail local n'est pas un luxe, c'est une n�cessit�.`
        }
    },
    {
        id: 10,
        type: 'FeatureGrid',
        content: {
            title: 'Comment nous propulsons votre carri�re :',
            features: [
                { id: 1, icon: 'Briefcase', title: 'Acc�s Direct aux Recruteurs', description: 'B�n�ficiez de notre r�seau privil�gi� pour des mises en relation directes avec les d�cideurs des entreprises qui recrutent.' },
                { id: 2, icon: 'UserCheck', title: 'Optimisation de Candidature', description: 'Nous adaptons votre CV et profil LinkedIn aux standards et attentes du march� philippin.' },
                { id: 3, icon: 'MapPin', title: 'Accompagnement & Installation', description: 'Nous vous guidons dans les d�marches de visa et nous vous aidons � vous installer en toute s�r�nit�.' },
            ]
        }
    },
    {
        id: 4,
        type: 'Text',
        content: {
            text: `### Une �conomie Ouverte aux Talents\n\nAvec une croissance soutenue, Manille attire des investissements massifs dans les secteurs de la tech, de la finance durable et des services. Cette expansion cr�e un appel d'air pour les profils internationaux, valoris�s pour leur expertise et leur vision globale.`
        }
    },
    {
        id: 3,
        type: 'Image',
        content: {
            imageUrl: 'https://images.unsplash.com/photo-1545421239-3a3d51b34202?q=80&w=1932&auto=format&fit=crop',
            altText: 'Le quartier d\'affaires Ayala Triangle � Manille',
        },
    },
    {
        id: 8,
        type: 'Text',
        content: {
            text: `### L'�quilibre Parfait : Carri�re et Qualit� de Vie\n\nAu-del� du travail, Manille promet une vie riche en exp�riences. Un co�t de la vie attractif, une culture vibrante et accueillante, et des escapades spectaculaires � quelques heures de vol. C'est l'opportunit� unique de booster votre carri�re sans sacrifier votre bien-�tre.`
        }
    },
    {
        id: 7,
        type: 'Image',
        content: {
            imageUrl: 'https://images.unsplash.com/photo-1588796144259-23f2f8797f1b?q=80&w=1974&auto=format&fit=crop',
            altText: 'Ambiance d\'un caf� moderne � Manille',
        },
    },
    {
        id: 9,
        type: 'Hero',
        content: {
            title: 'Pr�t � �crire votre prochain chapitre ?',
            subtitle: 'Le bon poste, au bon moment. C\'est notre mission. Discutons de votre projet et faisons-en une r�alit�.',
            buttonText: 'Planifier un appel gratuit',
            imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop',
        },
    },
];

// --- Icon Helper ---
const IconComponent = ({ name, ...props }) => {
    switch (name) {
        case 'Briefcase': return <Briefcase {...props} />;
        case 'UserCheck': return <UserCheck {...props} />;
        case 'BarChart2': return <BarChart2 {...props} />;
        case 'MapPin': return <MapPin {...props} />;
        default: return <Star {...props} />;
    }
};

// --- Composants pour chaque type de bloc (Le rendu visuel sur la page) ---

const HeroBlock = ({ content, isSelected }) => (
    <div className={`relative text-center text-white rounded-2xl overflow-hidden shadow-xl ${isSelected ? 'ring-4 ring-indigo-500 ring-offset-4' : ''} transition-all duration-300`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
        <img src={content.imageUrl} alt={content.title} className="absolute inset-0 w-full h-full object-cover z-0 transform scale-100 group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x600/1D2B48/FFFFFF?text=Image+Indisponible'; }} />
        <div className="relative z-20 p-8 md:p-24">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md" style={{ fontFamily: 'Poppins, sans-serif' }}>{content.title}</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-sm font-light">{content.subtitle}</p>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300">
                {content.buttonText}
            </button>
        </div>
    </div>
);

const TextBlock = ({ content, isSelected }) => {
    const formatText = (text) => {
        return text
            .split('\n\n').map(paragraph => `<p class="mb-4">${paragraph}</p>`).join('')
            .replace(/### (.*)/g, '<h3 class="text-4xl font-bold text-slate-800 mb-6 mt-6" style="font-family: \'Poppins\', sans-serif;">$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    };

    return (
        <div className={`p-8 md:p-12 bg-white rounded-2xl shadow-lg ${isSelected ? 'ring-4 ring-indigo-500 ring-offset-4' : ''} transition-all duration-300`}>
            <div className="text-slate-700 text-lg leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: formatText(content.text) }}></div>
        </div>
    );
};

const ImageBlock = ({ content, isSelected }) => (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${isSelected ? 'ring-4 ring-indigo-500 ring-offset-4' : ''} transition-all duration-300`}>
        <img src={content.imageUrl} alt={content.altText} className="w-full h-auto" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/f0f4ff/1D2B48?text=Image'; }} />
    </div>
);

const FeatureGridBlock = ({ content, isSelected }) => (
    <div className={`p-8 md:p-12 bg-slate-50 rounded-2xl ${isSelected ? 'ring-4 ring-indigo-500 ring-offset-4' : ''} transition-all duration-300`}>
        <h3 className="text-4xl font-bold text-center text-slate-800 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>{content.title}</h3>
        <div className="grid md:grid-cols-3 gap-8">
            {content.features.map(feature => (
                <div key={feature.id} className="text-center p-8 bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-2xl hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="inline-block p-5 bg-indigo-100 text-indigo-600 rounded-full mb-5">
                        <IconComponent name={feature.icon} className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
            ))}
        </div>
    </div>
);


// --- Panneau des Param�tres (L'inspecteur � droite) ---

const SettingsPanel = ({ block, onUpdate, onDelete }) => {
    if (!block) {
        return (
            <div className="p-6 text-center text-slate-500">
                <p className="text-lg">Cliquez sur un bloc pour le modifier.</p>
            </div>
        );
    }

    const handleContentChange = (field, value) => {
        onUpdate(block.id, { ...block.content, [field]: value });
    };

    const handleFeatureChange = (featureId, field, value) => {
        const newFeatures = block.content.features.map(f => f.id === featureId ? { ...f, [field]: value } : f);
        handleContentChange('features', newFeatures);
    }

    const renderSettings = () => {
        switch (block.type) {
            case 'Hero':
                return (
                    <>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700">Titre</label>
                            <input type="text" value={block.content.title} onChange={(e) => handleContentChange('title', e.target.value)} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700">Sous-titre</label>
                            <textarea value={block.content.subtitle} onChange={(e) => handleContentChange('subtitle', e.target.value)} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" rows="3"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700">Texte du bouton</label>
                            <input type="text" value={block.content.buttonText} onChange={(e) => handleContentChange('buttonText', e.target.value)} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700">URL de l'image</label>
                            <input type="text" value={block.content.imageUrl} onChange={(e) => handleContentChange('imageUrl', e.target.value)} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                    </>
                );
            case 'Text':
                return (
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700">Texte (Markdown simple support�)</label>
                        <textarea value={block.content.text} onChange={(e) => handleContentChange('text', e.target.value)} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" rows="12"></textarea>
                    </div>
                );
            case 'Image':
                return (
                    <>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700">URL de l'image</label>
                            <input type="text" value={block.content.imageUrl} onChange={(e) => handleContentChange('imageUrl', e.target.value)} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700">Texte alternatif</label>
                            <input type="text" value={block.content.altText} onChange={(e) => handleContentChange('altText', e.target.value)} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                    </>
                );
            case 'FeatureGrid':
                return (
                    <>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700">Titre de la section</label>
                            <input type="text" value={block.content.title} onChange={(e) => handleContentChange('title', e.target.value)} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        {block.content.features.map((feature, index) => (
                            <div key={feature.id} className="p-3 border rounded-md mb-3 bg-slate-50">
                                <p className="font-bold mb-2 text-slate-700">Service {index + 1}</p>
                                <div className="mb-2">
                                    <label className="block text-xs font-medium text-slate-600">Titre</label>
                                    <input type="text" value={feature.title} onChange={(e) => handleFeatureChange(feature.id, 'title', e.target.value)} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 text-sm focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-xs font-medium text-slate-600">Description</label>
                                    <textarea value={feature.description} onChange={(e) => handleFeatureChange(feature.id, 'description', e.target.value)} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm p-2 text-sm focus:ring-indigo-500 focus:border-indigo-500" rows="2"></textarea>
                                </div>
                            </div>
                        ))}
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 text-slate-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Param�tres du Bloc</h3>
            {renderSettings()}
            <button onClick={() => onDelete(block.id)} className="w-full mt-6 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-red-300">
                <Trash2 className="w-4 h-4 mr-2" />
                Supprimer le bloc
            </button>
        </div>
    );
};

// --- Le Composant Principal de l'Application ---

export default function App() {
    const [blocks, setBlocks] = useState(initialPageContent);
    const [selectedBlockId, setSelectedBlockId] = useState(null);

    const addBlock = (type) => {
        const blockConfig = AVAILABLE_BLOCKS[type];
        if (!blockConfig) return;

        const newBlock = {
            id: Date.now(),
            type: type,
            content: JSON.parse(JSON.stringify(blockConfig.defaultContent)), // Deep copy
        };
        setBlocks([...blocks, newBlock]);
        setSelectedBlockId(newBlock.id);
    };

    const updateBlockContent = (id, newContent) => {
        setBlocks(
            blocks.map((block) =>
                block.id === id ? { ...block, content: newContent } : block
            )
        );
    };

    const deleteBlock = (id) => {
        setBlocks(blocks.filter((block) => block.id !== id));
        setSelectedBlockId(null);
    };

    const selectedBlock = blocks.find((b) => b.id === selectedBlockId);

    return (
        <div className="flex h-screen bg-slate-100" style={{ fontFamily: 'Inter, sans-serif' }}>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@400;500;700&display=swap');
        `}
            </style>
            <aside className="w-72 bg-white p-6 border-r border-slate-200 shadow-lg flex-shrink-0">
                <h2 className="text-2xl font-bold mb-8 text-slate-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Biblioth�que</h2>
                <div className="space-y-3">
                    {Object.entries(AVAILABLE_BLOCKS).map(([type, { name, icon }]) => (
                        <button
                            key={type}
                            onClick={() => addBlock(type)}
                            className="w-full flex items-center p-4 bg-slate-50 hover:bg-indigo-100 hover:text-indigo-800 rounded-lg text-left transition-colors border border-slate-200"
                        >
                            {icon}
                            <span className="ml-3 font-medium">{name}</span>
                        </button>
                    ))}
                </div>
            </aside>

            <main className="flex-1 p-4 md:p-10 overflow-y-auto">
                <div className="max-w-5xl mx-auto">
                    {blocks.length === 0 && (
                        <div className="text-center text-slate-500 py-24 border-2 border-dashed border-slate-300 rounded-lg">
                            <p className="text-lg">Commencez par ajouter un bloc depuis la biblioth�que.</p>
                        </div>
                    )}
                    <div className="space-y-10">
                        {blocks.map((block) => (
                            <div key={block.id} onClick={() => setSelectedBlockId(block.id)} className="cursor-pointer relative group">
                                {block.type === 'Hero' && <HeroBlock content={block.content} isSelected={block.id === selectedBlockId} />}
                                {block.type === 'Text' && <TextBlock content={block.content} isSelected={block.id === selectedBlockId} />}
                                {block.type === 'Image' && <ImageBlock content={block.content} isSelected={block.id === selectedBlockId} />}
                                {block.type === 'FeatureGrid' && <FeatureGridBlock content={block.content} isSelected={block.id === selectedBlockId} />}

                                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                                    <button onClick={(e) => { e.stopPropagation(); deleteBlock(block.id); }} className="p-3 bg-white rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors">
                                        <Trash2 className="w-5 h-5 text-red-600" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <aside className="w-[400px] bg-white p-6 border-l border-slate-200 shadow-lg overflow-y-auto flex-shrink-0">
                <SettingsPanel block={selectedBlock} onUpdate={updateBlockContent} onDelete={deleteBlock} />
            </aside>

        </div>
    );
}
