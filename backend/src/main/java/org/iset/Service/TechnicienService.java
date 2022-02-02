package org.iset.Service;

import java.util.List;

import org.iset.Repositories.TechnicienRepository;
import org.iset.entities.Technicien;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TechnicienService implements ITechnicien {
	@Autowired
TechnicienRepository teR;

public TechnicienService(TechnicienRepository teR) {
	super();
	this.teR = teR;
}
@Override
public Technicien addTechnicien(Technicien t)
{
	return teR.save(t);
}
@Override
public List<Technicien> getAllTechnicien()
{
	return teR.findAll();
}
@Override
public void supprimTechnicien(Long id)
{
	teR.deleteById(id);
}
@Override
public Technicien getTech(Long id)
{
	return teR.findById(id).get();
}
@Override
public Technicien modifTech(Technicien t)
{
	 teR.save(t);
	 return t;
}
}
