export default function ThemeScript() {
  // This script runs before React hydrates to prevent flash
  const themeScript = `
    (function() {
      function getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      document.documentElement.setAttribute('data-theme', getInitialTheme());
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      // Execute before page renders
    />
  );
}
