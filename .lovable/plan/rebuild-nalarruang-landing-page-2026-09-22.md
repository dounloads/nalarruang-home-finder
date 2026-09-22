# Rebuild NalarRuang Landing Page

## Outcome
Replace the placeholder with a complete, responsive NalarRuang landing page and a friendly `/app` “Segera hadir” destination. The design will combine a soft clay countryside with picnic-scrapbook sections, using only Plus Jakarta Sans and the supplied color language.

## Build
- Establish reusable design tokens for sky, grass, gingham, persona colors, glossy controls, sticker outlines, shadows, radii, spacing, and motion.
- Build a sticky pill navigation with desktop links, a keyboard-friendly mobile drawer, smooth section links, and working `/app` buttons.
- Create a lightweight 3D hero with procedural clay hills, trees, buildings, roads, pond/waterfall, clouds, balloon, and looping train; include day/night mode, restrained pointer parallax, visibility pausing, capped pixel density, and a static mobile/no-WebGL fallback.
- Build each requested content section as a separate component: problem cards, selectable personas, three-step flow, toggleable map layers, feature postcards, interactive point inspector, FAQ, CTA, and footer.
- Keep persona selections synchronized between the persona cards and demo, and update point/area scores and summaries locally without accounts or saved data.
- Add restrained GSAP/ScrollTrigger placement animations and parallax, with reduced-motion behavior and accessible focus/contrast throughout.
- Create a branded hill-and-house favicon and unique metadata for both `/` and `/app`.

## Technical Notes
- Keep TanStack Router as the project router while matching the requested URLs.
- Add Three.js, React Three Fiber, Drei, GSAP, and supporting type packages.
- Use low-poly procedural geometry and no large external media files.
- Organize shared copy/data separately from section components and centralize visual values in the global token system.

## Validation
- Verify the homepage and `/app` at desktop and mobile sizes.
- Confirm navigation, drawer, persona selections, layer toggles, point/area switch, FAQ, day/night mode, and CTA links.
- Inspect screenshots for composition, readability, overlap, and a correctly lit 3D scene; confirm no console or runtime errors.
