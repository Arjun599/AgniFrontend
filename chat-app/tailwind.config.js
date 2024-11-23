"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFpbHdpbmQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxNQUFNLEdBQVc7SUFDckIsT0FBTyxFQUFFO1FBQ1Asa0NBQWtDO1FBQ2xDLHVDQUF1QztRQUN2QyxnQ0FBZ0M7S0FDakM7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUU7WUFDTixlQUFlLEVBQUU7Z0JBQ2YsaUJBQWlCLEVBQUUsMkNBQTJDO2dCQUM5RCxnQkFBZ0IsRUFDZCxrRUFBa0U7YUFDckU7U0FDRjtLQUNGO0lBQ0QsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Q0FDOUMsQ0FBQTtBQUNELGtCQUFlLE1BQU0sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSAndGFpbHdpbmRjc3MnXG5cbmNvbnN0IGNvbmZpZzogQ29uZmlnID0ge1xuICBjb250ZW50OiBbXG4gICAgJy4vcGFnZXMvKiovKi57anMsdHMsanN4LHRzeCxtZHh9JyxcbiAgICAnLi9jb21wb25lbnRzLyoqLyoue2pzLHRzLGpzeCx0c3gsbWR4fScsXG4gICAgJy4vYXBwLyoqLyoue2pzLHRzLGpzeCx0c3gsbWR4fScsXG4gIF0sXG4gIHRoZW1lOiB7XG4gICAgZXh0ZW5kOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICAgICAgJ2dyYWRpZW50LXJhZGlhbCc6ICdyYWRpYWwtZ3JhZGllbnQodmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKScsXG4gICAgICAgICdncmFkaWVudC1jb25pYyc6XG4gICAgICAgICAgJ2NvbmljLWdyYWRpZW50KGZyb20gMTgwZGVnIGF0IDUwJSA1MCUsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbcmVxdWlyZSgnQHRhaWx3aW5kY3NzL3R5cG9ncmFwaHknKV0sXG59XG5leHBvcnQgZGVmYXVsdCBjb25maWdcbiJdfQ==