package org.iset.Service;

import java.util.List;

import org.iset.entities.Demande;

public interface IDemande {
List<Demande> getAll();
Demande getDemande(Long id);
Demande modifDemande(Demande d);
Demande addDemande(Demande d);
void supprimDemande(Long id);
}
