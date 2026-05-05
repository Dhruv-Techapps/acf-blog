# Auto Clicker AutoFill Blog

This is a Hugo-based blog for Auto Clicker AutoFill at `blog.getautoclicker.com`. The blog uses Bootstrap for styling and focuses on announcements, tutorials, and product updates.

## Working Effectively

- Bootstrap and build the blog:
  - `npm install` -- installs Hugo, Bootstrap, and development dependencies
  - `npm run build` -- builds the site to `_site/` directory with Hugo
  - `npm run serve` -- starts Hugo dev server on port 4000 with live reload
  - `npm test` -- runs all linting and validation checks

- Development workflow:
  - Use `npm run serve` for local development with hot reload
  - Always run `npm test` before committing to ensure content quality
  - Hugo builds from `src/` to `_site/` output directory

## Project Structure

```text
/src
├── content/           # Blog posts and content (Markdown)
│   └── posts/        # Individual blog posts organized by year/month
├── layouts/          # Hugo templates (HTML)
│   ├── _default/     # Default templates
│   └── partials/     # Reusable template components
├── static/           # Static assets (images, files)
└── assets/           # Preprocessed assets
    └── scss/         # Bootstrap SCSS customizations
```

## Tech Stack & Key Libraries

- **Static Site Generator**: Hugo (v0.134.3) with extended features
- **CSS Framework**: Bootstrap 5.3.8 with custom SCSS
- **JavaScript**: Vanilla JS with clipboard.js and vanilla-lazyload
- **Build Tooling**:
  - Hugo for site generation
  - PostCSS with Autoprefixer for CSS processing
  - ESLint for JavaScript linting
  - Stylelint for SCSS/CSS linting
  - Markdownlint for Markdown files
  - Linkinator for link validation
  - VNU for HTML validation

## Hugo Configuration

- **Language**: English (en)
- **Permalinks**: Posts use `/:year/:month/:day/:filename/` pattern
- **Output**: `_site/` directory
- **Markdown**: Goldmark with unsafe HTML enabled
- **Syntax Highlighting**: Enabled with classes
- **Pagination**: 5 posts per page
- **RSS**: Limited to 10 items
- **Drafts/Future**: Both enabled for development

## Common Development Tasks

### Creating a New Blog Post

1. Create new Markdown file in `src/content/posts/YYYY/MM/`
2. Add YAML frontmatter with title, date, author, tags
3. Use Markdown for content
4. Preview with `npm run serve`
5. Validate with `npm test` before committing

### Working with Styles

1. Edit SCSS files in `src/assets/scss/`
2. Bootstrap variables can be customized
3. Run `npm run test-stylelint` to validate SCSS
4. Run `npm run test-fusv` to find unused Sass variables

### Content Validation

1. Markdown: `npm run test-markdownlint` -- checks Markdown formatting
2. Links: `npm run test-linkinator` -- validates all links in built site
3. HTML: `npm run test-vnu` -- validates HTML output
4. JavaScript: `npm run test-eslint` -- lints JavaScript files

## Content Guidelines

- Use Markdown for blog posts
- Follow consistent frontmatter structure
- Include featured images in `/static/` folder
- Tag posts appropriately for categorization
- Keep post filenames lowercase with dashes
- Use proper heading hierarchy (H1 for title, H2-H6 for sections)

## Build & Deployment

- Production build: `npm run build`
- Built files output to `_site/` directory
- Site is deployed to `blog.getautoclicker.com`
- Hugo builds are optimized with `--cleanDestinationDir`
- Warnings enabled for missing templates and incorrect paths

## Quality Checks (npm test)

All quality checks must pass before deployment:

1. **ESLint**: JavaScript code quality
2. **FUSV**: Unused Sass variables detection
3. **Stylelint**: SCSS/CSS code quality
4. **Markdownlint**: Markdown formatting
5. **Linkinator**: Link validation (local URLs only)
6. **VNU**: HTML5 validation
7. **Lockfile-lint**: Package lock security

## Rules for Copilot

- Use ES modules (`import`/`export`), never `require()`
- Follow Hugo's template syntax for layouts
- Maintain Bootstrap 5.3 compatibility
- Use semantic HTML5 elements
- Ensure all links are valid before committing
- Keep Markdown content clean and properly formatted
- Follow existing SCSS organization patterns

## Relationship to Other Projects

This blog is part of the Auto Clicker AutoFill ecosystem:

- Main extension: `auto-clicker-auto-fill` workspace
- Documentation: `acf-docs` project
- Backend: `acf-firebase` project
- Translations: `acf-i18n` project

When referencing other projects or creating cross-links, use the appropriate base URLs:

- Docs: `https://getautoclicker.com`
- Stable app: `https://stable.getautoclicker.com`
- Configs: `https://configs.getautoclicker.com`
