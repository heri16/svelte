export function process_example(files) {
	return files
		.map(file => {
			const [name, type] = file.name.split('.');
			return { name, type, source: file.source };
		})
		.sort((a, b) => {
			if (a.name === 'App' && a.type === 'md') return -1;
			if (b.name === 'App' && b.type === 'md') return 1;

			if (a.type === b.type) return a.name < b.name ? -1 : 1;

			if (a.type === 'md') return -1;
			if (b.type === 'md') return 1;
		});
}