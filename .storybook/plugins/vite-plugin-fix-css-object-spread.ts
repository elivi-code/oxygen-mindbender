import { createFilter } from 'vite';
import type { Plugin, FilterPattern } from 'vite';

interface FixCssObjectSpreadOptions {
  include?: FilterPattern;
  exclude?: FilterPattern;
}

/**
 * Vite plugin to fix CSS object spread serialization in styled-components
 * This addresses the issue where numeric properties like fontWeight are stripped
 * from object spreads in template literals during production builds
 */
export function fixCssObjectSpread(options: FixCssObjectSpreadOptions = {}): Plugin {
  const filter = createFilter(
    options.include || /\.(jsx?|tsx?)$/,
    options.exclude || /node_modules/,
  );

  return {
    name: 'fix-css-object-spread',
    enforce: 'pre', // Run before other transforms like babel
    transform(code: string, id: string) {
      if (!filter(id)) return null;

      // Only apply in production builds
      if (process.env.NODE_ENV !== 'production') return null;

      // Look for CSS object spreads in template literals
      // Matches patterns like: ${({ theme }) => ({ ...theme.bodyBold01 })}
      const cssObjectSpreadPattern =
        /\$\{\s*\(\s*\{\s*([^}]*theme[^}]*)\s*\}\s*\)\s*=>\s*\(\s*\{\s*\.\.\.([^}]+)\}\s*\)\s*\}/g;

      let hasChanges = false;
      const transformedCode = code.replace(
        cssObjectSpreadPattern,
        (_: string, destructuredParams: string, themeProperty: string) => {
          hasChanges = true;

          // Extract the theme property path (e.g., theme.body01)
          const cleanProperty = themeProperty.trim();

          // Transform to explicit CSS properties to avoid serialization issues
          return `\${({ ${destructuredParams.trim()} }) => {
          const obj = ${cleanProperty};
          if (!obj || typeof obj !== 'object') return '';
          return Object.entries(obj).map(([key, value]) => {
            const cssProperty = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            return \`\${cssProperty}: \${value};\`;
          }).join('\\n');
        }}`;
        },
      );

      if (hasChanges) {
        return {
          code: transformedCode,
          map: null,
        };
      }

      return null;
    },
  };
}
