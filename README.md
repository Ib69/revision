# Révisions EPITA — Jibril

Site personnel de révisions pour les cours de l'EPITA (S2 PA).

## Lancer le site en local

```bash
# Installation (une fois)
python -m pip install -r requirements.txt

# Démarrer le serveur de développement
python -m mkdocs serve

# Ouvrir http://127.0.0.1:8000 dans le navigateur
```

## Construire le site statique

```bash
python -m mkdocs build
# Le site est généré dans le dossier site/
```

## Structure

- `docs/` : contenu du site (Markdown)
- `Documents/` : PDFs sources (TDs, sujets d'examen)
- `mkdocs.yml` : configuration MkDocs
