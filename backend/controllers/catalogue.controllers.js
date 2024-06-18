const catalogue = require('../album.json');

exports.get = (req, res) => {
    const searchTerm = req.query.searchTerm;
    if (searchTerm) 
    {
        const filteredCatalogue = catalogue.filter(album => 
            (album.nom && album.nom.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (album.auteur && album.auteur.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        res.json(filteredCatalogue);
    } 
    else 
    {
        res.json(catalogue);
    }
};


