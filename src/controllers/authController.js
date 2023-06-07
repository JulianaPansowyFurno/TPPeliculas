
router.get('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
    
    const peliculas = await peliculaService.PeliculaDetalles(req.params.id);
  
    return res.status(200).json(peliculas);
  }); 