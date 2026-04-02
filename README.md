# P.I.G - Site institutionnel Next.js

Refonte institutionnelle de la Police Internationale d’Intervention Générale (P.I.G) en **Next.js App Router**, **TypeScript** et **Tailwind CSS**.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site démarre ensuite sur [http://localhost:3000](http://localhost:3000).

## Structure principale

```text
app/
  (site)/
  layout.tsx
  globals.css
  manifest.ts
  robots.ts
  sitemap.ts
components/
  animations/
  cards/
  layout/
  sections/
  ui/
content/
  actions.ts
  contacts.ts
  missions.ts
  navigation.ts
  organisation.ts
  site.ts
  timeline.ts
lib/
  metadata.ts
  utils.ts
public/
  images/
```

## Modifier les contenus

- Les textes institutionnels sont centralisés dans `content/`.
- Les menus sont dans `content/navigation.ts`.
- Les contacts sont dans `content/contacts.ts`.
- Les missions, actions, organes et timeline sont dans leurs fichiers dédiés.
- Les métadonnées SEO de chaque page sont définies via `createPageMetadata()` dans les fichiers de page.

## Ajouter de nouvelles images

- Placer les nouvelles images dans `public/images/` selon leur contexte :
  - `logo/`
  - `hero/`
  - `missions/`
  - `actions/`
  - `organisation/`
  - `actualites/`
  - `galerie/`
  - `contacts/`
  - `leadership/`
- Utiliser des noms de fichiers lisibles, en minuscules, avec des tirets.
- Si le contexte d’une image est incertain, privilégier `galerie/` ou `actualites/`.

## Maintenir le SEO

- Mettre à jour `content/site.ts` pour l’URL canonique, la description globale et les mots-clés.
- Ajouter les metadata de chaque nouvelle page avec `createPageMetadata`.
- Vérifier `app/sitemap.ts` quand une nouvelle route publique est créée.
- Conserver des `alt` descriptifs et spécifiques pour chaque image.

## Notes d’architecture

- Les pages App Router sont en **Server Components** par défaut.
- Les composants clients sont limités aux interactions : menu mobile, reveals, lightbox et boutons animés.
- Les données éditoriales sont séparées des composants pour faciliter la maintenance.
