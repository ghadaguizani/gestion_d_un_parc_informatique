package org.iset.Repositories;

import org.iset.entities.Professeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProfesseurRepository extends JpaRepository<Professeur, Long> {

}
